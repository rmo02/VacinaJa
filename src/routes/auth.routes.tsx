import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import { SplashScreen } from "../screens/SplashScreen";

type AuthRoutes = {
    splash: undefined;
    login: undefined;
    cadastro: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={SplashScreen} />
      <Screen name="login" component={Login}  options={{ gestureEnabled: false}}/>
      <Screen name="cadastro" component={Cadastro} />
    </Navigator>
  );
}