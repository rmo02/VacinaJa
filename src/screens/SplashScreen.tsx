import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { VStack } from "native-base";

export function SplashScreen() {
  // const navigation = useNavigation();
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        loop={loop}
        // onAnimationFinish={() => navigation.navigate('SignIn')}
      />
    </VStack>
  );
}
