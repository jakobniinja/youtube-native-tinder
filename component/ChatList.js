import { collection, onSnapshot, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList  } from 'react-native'
import tw from "tailwind-rn"
import useAuth from '../hooks/useAuth'
import ChatRow from "../component/ChatRow"

export default function ChatList() {
    const [matches, setMatches] = useState()
    const {user} = useAuth()

    useEffect(() => 
        onSnapshot(query(collection(db, "matches"), where("usersMatche", "array-contains", user.uid)),
        (snapshot) => setMatches(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }) ) )
    , [user]));

    return (
        matches.length> 0 ?(
        <FlatList  style={tw("h-full")} data={matches} keyExtractor={item => item.id} renderItem={({item}) => <ChatRow   matchDetails={item} /> } >
            <Text>i'm the chatList bre</Text>
        </FlatList>
        ):(
            <View style={tw("text-center text-lg")} >
                <Text style={tw("p-5")} >
                No mathces at the moment
                </Text>
            </View>
        )
    )
}
