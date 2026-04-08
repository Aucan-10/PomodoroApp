# 🍅 Pomodoro Timer App

> App de productividad con técnica Pomodoro desarrollada en React Native + Expo.

---

## 📋 Descripción

Aplicación móvil para gestionar sesiones de trabajo/productividad usando la técnica Pomodoro: 25 minutos de enfoque + 5 minutos de descanso. Ideal para estudiantes, desarrolladores y cualquier persona que quiera mejorar su gestión del tiempo.

---

## ✨ Características

- ⏱️ Temporizador Pomodoro personalizable (trabajo/descanso)
- 🔴 Indicador visual del estado actual (trabajo / pausa)
- 🔔 Notificaciones al finalizar cada sesión
- 📊 Contador de pomodoros completados
- 🎨 Diseño limpio y minimalista
- 📱 Compatible con iOS y Android vía Expo Go

---

## 🛠️ Tecnologías

| Tecnología              | Propósito                            |
| ----------------------- | ------------------------------------ |
| React Native            | Framework para apps móviles          |
| Expo                    | Desarrollo y despliegue simplificado |
| JavaScript / TypeScript | Lenguaje base                        |
| StyleSheet              | Estilos nativos                      |

---

## 🚀 Instalación y Ejecución

### Requisitos previos

- Node.js >= 16.x
- npm o yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go instalado en tu dispositivo móvil

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/pomodoro-app.git
cd pomodoro-app

# 2. Instalar dependencias
npm install
# o
yarn install

# 3. Iniciar el servidor de desarrollo
npx expo start

# 4. Escanear el QR con Expo Go (Android/iOS) o usar emulador
```

---

## 📁 Estructura del Proyecto

```
pomodoro-app/
├── App.js                 # Componente raíz
├── app.json              # Configuración de Expo
├── package.json          # Dependencias y scripts
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── TextRojo.js   # Ejemplo de componente personalizado
│   │   ├── Timer.js      # Lógica del temporizador
│   │   └── Controls.js   # Botones de inicio/pausa/reinicio
│   ├── hooks/            # Custom hooks (usePomodoro, etc.)
│   ├── utils/            # Funciones auxiliares
│   └── assets/           # Imágenes, fuentes, iconos
└── README.md             # Este archivo
```

---

## ▶️ Uso

1. Abre la app en tu dispositivo.
2. Presiona **"Iniciar"** para comenzar un ciclo de 25 min.
3. Al finalizar, la app notificará y cambiará automáticamente a modo descanso (5 min).
4. Usa **"Pausa"** o **"Reiniciar"** para controlar el temporizador.
5. Cada ciclo completado incrementa el contador de pomodoros 🍅.

---

## 🧪 Scripts Disponibles

```bash
npm start          # Iniciar servidor de desarrollo (expo start)
npm run android    # Abrir en emulador Android
npm run ios        # Abrir en emulador iOS (requiere macOS)
npm run web        # Ejecutar en navegador (expo web)
npm run lint       # Verificar errores de código (si está configurado)
```

---

## 🤝 Contribuir

1. Haz fork del repositorio
2. Crea tu rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -m 'feat: agregar X'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

> 💡 Tip: Usa commits semánticos (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`).

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙌 Agradecimientos

- [Expo](https://expo.dev/) por facilitar el desarrollo multiplataforma.
- La comunidad de React Native por el soporte constante.
- Francesco Cirillo, creador de la técnica Pomodoro 🍅.

---

> ✨ _Hecho con ❤️ para mejorar tu productividad._

---

### 🔧 Personalización rápida

Para cambiar los tiempos por defecto, edita `src/hooks/usePomodoro.js` o los valores iniciales en `App.js`:

```javascript
const TIEMPO_TRABAJO = 25 * 60; // 25 minutos en segundos
const TIEMPO_DESCANSO = 5 * 60; // 5 minutos en segundos
```

---

_¿Encontraste un bug o tienes una idea? ¡Abre un issue!_ 🐛💡
