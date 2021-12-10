import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import getMatchUserInfo from "../lib/getMatchUserInfo";
import tw from "tailwind-rn";

export default function ChatRow({ matchDetails }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [mathcedUserInfo, setmathcedUserInfo] = useState(null);
  useEffect(() => {
    setmathcedUserInfo(getMatchUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  return (
    <TouchableOpacity
      style={
        ([tw("flow-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg ")],
        styles.cardShadow)
      }
      onPress={() =>
        navigation.navigate("Message", {
          matchDetails,
        })
      }
    >
      <Image
        style={tw("rounded-full h-16 w-16 mr-4k")}
        source={{ uri: mathcedUserInfo?.photoURL }}
      />
      <View>
        <Text style={tw("text-lg font-semibold")}>
          {mathcedUserInfo?.displayName}
        </Text>
        <Text> Say Hi!</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
