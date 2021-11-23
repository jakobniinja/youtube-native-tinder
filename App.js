import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import tw from "tailwind-rn";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      < StackNavigator/>
    </NavigationContainer>
  );
}
