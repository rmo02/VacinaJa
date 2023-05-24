import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { useTheme } from "native-base";
import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { HomePage } from "../screens/HomePage";
import { Localvacina } from "../screens/LocalVacina";
import { Vacinas } from "../screens/Vacinas";
import { Perfil } from "../screens/Perfil";
import { Noticias } from "../screens/Noticias";
import { Noticias1 } from "../screens/Noticias1";

type AppRoutes = {
  home: undefined;
  localVacina: undefined;
  perfil: undefined;
  vacinas: undefined;
  noticias: undefined;
  noticias1: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[7];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: colors.amber[500],
        tabBarInactiveTintColor: colors.blue[500],
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 78 : 96,
          paddingTop: sizes[2],
          paddingBottom: sizes[5],
        },
      }}
    >
      <Screen
        name="home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }: any) => (
            <AntDesign name="home" size={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="localVacina"
        component={Localvacina}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="vacinas"
        component={Vacinas}
        options={{
          tabBarIcon: ({ color }: any) => (
            <FontAwesome5 name="book-medical" size={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="face-man"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="noticias"
        component={Noticias}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="noticias1"
        component={Noticias1}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
