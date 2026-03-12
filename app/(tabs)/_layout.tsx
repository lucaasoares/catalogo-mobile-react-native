import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="men"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarButton: HapticTab,
      }}
    >
      {/* 👕 MASCULINO */}
      <Tabs.Screen
        name="men"
        options={{
          title: "Masculino",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />

      {/* 👗 FEMININO */}
      <Tabs.Screen
        name="women"
        options={{
          title: "Feminino",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />

      {/* 🛒 CARRINHO */}
      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="cart.fill" color={color} />
          ),
        }}
      />

      {/* 🚪 LOGOUT */}
      <Tabs.Screen
        name="logout"
        options={{
          title: "Sair",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="rectangle.portrait.and.arrow.right" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}