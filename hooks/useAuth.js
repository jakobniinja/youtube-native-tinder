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
import config   from "../config";

const AuthContext = createContext({});
// ja bror

const setup= {
  androidClientId: config.REACT_APP_AC,
  iosClientId: config.REACT_APP_IOSC ,
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
    await Google.logInAsync(setup)
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
