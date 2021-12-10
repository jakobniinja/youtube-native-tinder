import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Header  from '../component/Header'

export default function ChatScreen() {
    return (
        <SafeAreaView>
            <Header title="Chat" />
        </SafeAreaView>
    );
};
