import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { VStack } from "native-base";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

export function SplashScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldNavigate(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate('login');
    }
  }, [shouldNavigate, navigation]);

  return (
    <VStack
      flex={1}
      bg={{
        linearGradient: {
          colors: ["roxo.300", "roxo.500"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    >
      <LottieView
        source={require("../../assets/spash.json")}
        autoPlay
        loop={false}
      />
    </VStack>
  );
}