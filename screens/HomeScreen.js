import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>homescren</Text>
      <Button
        title="Go to chat"
        color="#8a2be2"
        onPress={() => navigation.navigate("Chat")}
      ></Button>
    </View>
  );
}
