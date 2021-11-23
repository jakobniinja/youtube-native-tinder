import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth"

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const signInWithGoogle = async() => {
        await Google.logInAsync()
        
    }
    
  return (
    <AuthContext.Provider
      value={{
        user: null
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
