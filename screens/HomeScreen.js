import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const dummyData = [
  {
    firstName: "Jakob ",
    lastName: "Yaro",
    occupation: "Software Developer",
    photoURL:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/ff/56/e3/san-dar-burgare-med-pommes.jpg",
    age: 22,
  },
  {
    firstName: "Anders ",
    lastName: "B",
    occupation: "Konsult",
    photoURL:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/ff/56/e3/san-dar-burgare-med-pommes.jpg",
    age: 34,
  },
  {
    firstName: "David ",
    lastName: "R",
    occupation: "chillare",
    photoURL:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/ff/56/e3/san-dar-burgare-med-pommes.jpg",
    age: 33,
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={tw("flex-1")}>
      <View style={tw("flex-row  items-center justify-between px-5")}>
        <TouchableOpacity style={tw(" left-5 top-3")} onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={require("../tinder.png")}

            // source={{ uri: user.photoURL }}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={tw("h-14 w-14")}
            source={require("../tinder.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="chatbubbles-sharp"
            size={30}
            color="#FF5864"
            onPress={() => navigation.navigate("Chat")}
          ></Ionicons>
        </TouchableOpacity>
        {/* <Button
          title="Go to chat"
          color="#8a2be2"
          onPress={() => navigation.navigate("Chat")}
        ></Button> */}
      </View>
      {/* <Button title="logout" color="#8a2be2" onPress={logout}></Button> */}
      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          cards={dummyData}
          containerStyle={{ backgroundColor: "transparent" }}
          stackSize={5}
          verticalSwipe={false}
          animateCardOpacity
          cardIndex={0}
          overlayLabels={{
            left: {
              title: "NO",
              style: {
                label: {
                  textAlign: "right",
                  color:"red"
                },
              },
            },
            right: {
              title: "MATCH",
              style:{
                label: {
                  color:"#4DED30"
                }
              }
            }

          }}

          renderCard={(card) => (
            <View key={card.id} style={tw("relative bg-white h-3/4 rounded-xl")}>
              <Text> {card.firstName} </Text>
              <Image
                style={tw("absolute top-0 h-full  w-full rounded-xl ")}
                source={{ uri: card.photoURL }}
              ></Image>

              <View style={[tw('absolute bottom-0 bg-white w-full flex-row justify-between items-between h-20'), styles.cardShadow]} >
                <View  >
                  <Text style={tw("text-xl font-bold")} >
                    {card.firstName}
                    {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
               <Text style={tw("text-2xl font-bold")} >{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  cardShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  }

})
