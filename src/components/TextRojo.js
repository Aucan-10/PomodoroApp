// El que importe 'import React from "react"' o 'from React' queda DESAPROBADO;

import { Text } from "react-native";

export default function TextRojo({ texto }) {
  return <Text style={{ color: "red", fontSize: 20 }}>{texto}</Text>;
}
