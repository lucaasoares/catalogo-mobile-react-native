import { Stack } from "expo-router";
import React from "react";
import LoginScreen from "../src/screens/LoginScreen.js";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Catalogo Mobile",
          headerLeft: () => null
        }}
      />
      <LoginScreen />
    </>
  );
}