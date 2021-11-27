import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth"

export default function HomeScreen() {
  const navigation = useNavigation();
  const {logout} = useAuth();

  return (
    <View>
      <Text>homescren</Text>
      <Button
        title="Go to chat"
        color="#8a2be2"
        onPress={() => navigation.navigate("Chat")}
      ></Button>
      <Button
        title="logout"
        color="#8a2be2"
        onPress={logout}
      ></Button>
    </View>
  );
}
