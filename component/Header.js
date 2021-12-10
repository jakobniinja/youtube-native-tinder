import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from "tailwind-rn"
import {Foundation, Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

export default function Header({title, callEnabled}) {
    const navigatoin = useNavigation();
    return (
        <View styke={tw("p-2 flex-row items-center justify-between")} >
            <View style={tw("flex flex-row items-center")} >
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw("p-2")}  >
                <Ionicons name="chevron-back-outline" size={34} color="FF5864"  />
                </TouchableOpacity>
                <Text style={tw("text-2xl font-bold pt-2 ")} > {title} </Text>


            </View>
            {callEnabled  && (
                <TouchableOpacity  style={tw("rounded-full mr-4 p-4 bg-red-200")} >
                    <Foundation style={tw("")}  name="telephone" size={20} color="red" ></Foundation>
                </TouchableOpacity>
            ) }
        </View>
    )
}
