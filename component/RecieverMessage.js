import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from "tailwind-rn"

export default function ReceiverMessage({message}) {
    return (
        <View style={[tw("bg-red-400 rounded-lg rounded-tl-non px-5 py-3 my-2 ml-14"), {alignSelf: "flex-start"} ]} >
            <Image style={tw("h-12 w-12 rounded-full absolute top-0 left-14")}
            source={{uri: message.photoURL}}
            />
            <Text style={tw("text-white")} >
                {messages.message}
            </Text>
        </View>
    )
}
