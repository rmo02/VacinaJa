import { useState, useEffect, useRef } from "react";
import { VStack, Fab, Box, HStack, Heading, Text } from "native-base";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";

import MapView, { Marker, Circle } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { CardHospital } from "../components/CardHospital";


export function Localvacina() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const refRBSheet = useRef();

  const mapRef = useRef<MapView>(null);

  async function requestLocationPermission() {
    //pedindo permissão
    const { granted } = await requestForegroundPermissionsAsync();

    //se tiver permissão do usuário a localização é salva
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  //observando a posição atual e atualizando o estado
  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        });
      }
    );
  }, []);

  return (
    <VStack flex={1} bg="fundo">
      {location && (
        <MapView
          ref={mapRef}
          style={{ flex: 1, width: "100%" }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={20} // raio em metros
            fillColor="rgba(0, 150, 255, 0.3)" // cor de preenchimento do círculo
            strokeColor="rgba(0, 150, 255, 0.5)" // cor da borda do círculo
            strokeWidth={2} // largura da borda do círculo
          />
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
      <Fab
        renderInPortal={false}
        shadow={2}
        size="md"
        icon={<FontAwesome name="stethoscope" size={20} color="white" />}
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        height={600}
        openDuration={250}
        closeOnDragDown
        closeOnPressMask={false}
        customStyles={{
          container: {
            backgroundColor: "#fafafa",
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            elevation: 30,
          },
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <CardHospital />
      </RBSheet>
    </VStack>
  );
}
