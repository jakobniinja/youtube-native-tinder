import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { logout } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
    
  }, [])
  return (
    <SafeAreaView>
      <Text>homescren</Text>
      <Button
        title="Go to chat"
        color="#8a2be2"
        onPress={() => navigation.navigate("Chat")}
      ></Button>
      <Button title="logout" color="#8a2be2" onPress={logout}></Button>
    </SafeAreaView>
  );
}
