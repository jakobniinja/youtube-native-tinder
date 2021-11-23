import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen() {

    const navigation  = useNavigation();
    return (
        <View>
            <Text>I'm the home screen</Text>
            <Button title="Go to ChatScreen" color="#8a2be2" onPress={() => navigation.navigate("Chat")} ></Button>
        </View>
    )
}
