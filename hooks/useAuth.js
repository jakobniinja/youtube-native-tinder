import React, { createContext, useContext, useEffect, useState,  useMemo} from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});
// ja bror

const config = {
  androidClientId:
    "516864946729-e5aqrqah9lvfoueba6nell0ecj7t30e5.apps.googleusercontent.com",
  iosClientId:
    "516864946729-k02mt9f7bar6mamace93k8tq22b4lbbo.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  persmissoins: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoadingInitial(false);
      }),
    []
  );
  const logout = () => {
    setLoading(true);
    signOut(auth)
      .catch((err) => setError(err))
      .finally(setLoading(false));
  };

  const signInWithGoogle = async () => {
    await Google.logInAsync(config)
      .then(async (loginResult) => {
        if (loginResult.type === "success") {
          // login...
          const { idToken, accessToken } = loginResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
        }
        return Promise.reject();
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  const memoedValue = useMemo(
    () => ({
      user,
      signInWithGoogle,
      loading,
      error,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue} >{!loadingInitial && children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
