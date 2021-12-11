import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn"

export default function SenderMessage({ message }) {
  return (
    <View
      style={[
        tw("bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2 "),
        { alignSelf: "flex-start", marginLeft: "auto" },
      ]}
    >
      <Text style={tw("text-white")} >{message.message}</Text>
    </View>
  );
}
