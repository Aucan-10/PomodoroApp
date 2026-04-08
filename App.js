import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Audio } from "expo-av";

const MODES = {
  pomodoro: { label: "Pomodoro", time: 25 * 60, color: "#ba4949" },
  shortBreak: { label: "Descanso Corto", time: 10, color: "#38858a" },
  longBreak: { label: "Descanso Largo", time: 10 * 60, color: "#397097" },
};

export default function App() {
  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(MODES.pomodoro.time);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    async function setupAudio() {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
    }
    setupAudio();
  }, []);

  const playSound = async (soundFile) => {
    try {
      const { sound } = await Audio.Sound.createAsync(soundFile, {
        volume: 0.5,
      });
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.log("Error sonido:", error);
    }
  };

  const playClickSound = () => {
    playSound(require("./assets/sounds/button_click.mp3"));
  };

  const playAlarmSound = async () => {
    for (let i = 0; i < 3; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      await playSound(require("./assets/sounds/alarm_clock.mp3"));
    }
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            playAlarmSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleModeChange = (newMode) => {
    playClickSound();
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(MODES[newMode].time);
  };

  const toggleTimer = () => {
    playClickSound();
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const currentColor = MODES[mode].color;

  return (
    <View style={[styles.container, { backgroundColor: currentColor }]}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Pomodoro Timer</Text>

      <View style={styles.tabs}>
        {Object.entries(MODES).map(([key, { label }]) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.tab,
              mode === key && styles.tabActive,
              {
                backgroundColor:
                  mode === key ? "#fff" : "rgba(255,255,255,0.2)",
              },
            ]}
            onPress={() => handleModeChange(key)}
            activeOpacity={0.7}
          >
            <Text
              style={[styles.tabText, mode === key && styles.tabTextActive]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={toggleTimer}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {isRunning ? "⏸ Pausar" : "▶ Empezar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 40,
  },
  tabs: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 40,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
  },
  tabTextActive: {
    color: "#333",
    fontWeight: "bold",
  },
  timer: {
    fontSize: 72,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
