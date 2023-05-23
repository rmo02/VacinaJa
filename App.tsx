import { StatusBar } from "react-native";
import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import { NativeBaseProvider } from "native-base";
import { SplashScreen } from "./src/screens/SplashScreen";
import { Loading } from "./src/components/Loading";
import { THEME, config } from "./src/theme";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Lora_400Regular, Lora_700Bold });

  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
