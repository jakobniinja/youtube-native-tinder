import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { tw } from "tailwind-rn";

export default function MatchScreen() {
  const navigation = useNavigation();

  const { params } = useRoute();
  const { loggedInProfile, userSwiped } = params;

  return (
    <View style={[tw("h-full bg-red-500 pt-20"), { opacity: 0.89 }]}>
      <View style={tw("justify-center px-10 pt-20")}>
        <Image  style={tw("h-24 w-full")} source={{ uri: "https://lnks.papareact.com/mg9" }}></Image>
      </View>
      <Text style={tw("text-white text-center mt-5")}>
        You and {userSwiped.displayName} have liked each other
      </Text>

      <View styke={tw("flex-row justify-evenly mt-5")}>
        <Image
          style={tw("h-32 w-32 rounded-full")}
          source={{ uri: loggedInProfile.photoURL }}
        ></Image>

        <Image
          style={tw("h-32 w-32 rounded-full")}
          source={{ uri: userSwiped.photoURL }}
        ></Image>
      </View>
      <TouchableOpacity
        style={tw("bg-white m-5 px-10 py-8 rounded-full mt-20")}
        onPress={() => {
            navigation.goBack();
            navigation.navigate("Chat")
        }}
      >
        <Text>Send a Message</Text>
      </TouchableOpacity>
    </View>
  );
}
