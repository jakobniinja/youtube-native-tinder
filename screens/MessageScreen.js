import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
 FlatList,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {db} from "../firebase"
import {serverTimestamp, addDoc, collection, query, orderBy} from "@firebase/firestore"


import  SenderMessage from "../component/SenderMessage"
import   RecieverMessage from "../component/RecieverMessage"
import tw from "tailwind-rn";
import Header from "../component/Header";
import useAuth from "../hooks/useAuth";

const MessageScreen = ({ matchDetails }) => {
  const user = useAuth();
  const { params } = useRoute();
  const { matchDetails } = params;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    onSnapshot(query(collection(db, "matches", matchDetails.id, "messages" ), orderBy("timestamp", "desc") ),
    ), (snapshot) => setMessages(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })))
  }, [matchDetails, db])

  const sendMessage = () => {
      addDoc(collection(db, "matches", matchDetails.id, "messages" ), {
        timestamp: serverTimestamp(),
        userId: user.uid,
        displayName: user.displayName,
        photoURL: matchDetails.users[user.uid].photoURL,
        message: input
      })
      setInput("")

  };

  return (
    <SafeAreaView style={tw("flex-1")}>
      <Header
        title={getMatchUserInfo(matchDetails.users, user.uid)}
        callEnabled
      />

      <KeyboardAvoidingView
        behavior={(Platform.OS = "ios" ? "padding" : "height")}
        style={tw("flex-1")}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList 
          data={messages} 
          inverted={-1}
          style={tw("pl-4")}
          keyExtractor={item = item.id}
          renderItem={({item : message}) => 
           message.userId === user.uid? (
            <SenderMessage  key={message.id} message={message} />
           ):(
             <RecieverMessage key={message.id} message={message}  />
           ) 
          }
         >  </FlatList > 
        </TouchableWithoutFeedback>

        {/* <Text>message screen</Text> */}
        <View
          style={tw(
            "flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2"
          )}
        >
          <TextInput
            style={tw("h-10 text-lg")}
            placeholder="Send Message..."
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            value={input}
          ></TextInput>
          <Button title="Send" color="#ff5864" onPress={sendMessage}></Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageScreen;
