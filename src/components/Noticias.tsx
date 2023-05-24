import { Box, HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppNavigatorRoutesProps } from "../routes/app.route";
import { useNavigation } from "@react-navigation/native";

export function Noticias() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();


  return (
    <VStack bg="white" mt={2} borderRadius={10} py={2} px={5}>
      <VStack>
      <TouchableOpacity onPress={() => navigation.navigate('noticias')}>
        <HStack alignItems="center" h={30} w='full'>
          <Box
            bg="blue.300"
            borderRadius={5}
            alignItems="center"
            justifyContent="center"
            h={30}
            w={30}
          >
            <FontAwesome5 name="medkit" size={24} color="white" />
          </Box>
          <VStack px={5} flex={1}>
            <Text fontFamily="bold" >
              Calendário de vacinação
            </Text>
            <Text>Novo calendário de vacinação já</Text>
          </VStack>
          <Box flex={0.1}>
            <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
          </Box>
        </HStack>
        <VStack borderTopWidth={0.5} borderColor="gray.200" mt={3}></VStack>
      </TouchableOpacity>
      </VStack>


      <VStack mt={2}>
        <TouchableOpacity onPress={() => console.log("clicou")}>
          <HStack alignItems="center" h={10}>
            <Box
              bg="blue.300"
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
              h={30}
              w={30}
            >
              <MaterialIcons name="sports-handball" size={24} color="white" />
            </Box>
            <VStack px={5} flex={1}>
              <Text fontFamily="bold" >
                Cuide-se
              </Text>
              <Text>Dicas para cuidar da saúde</Text>
            </VStack>
            <Box flex={0.1}>
              <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
            </Box>
          </HStack>
          <VStack borderTopWidth={0.5} borderColor="gray.200" mt={3}></VStack>
        </TouchableOpacity>
      </VStack>

      <VStack mt={2}>
        <TouchableOpacity onPress={() => navigation.navigate('noticias1')}>
          <HStack alignItems="center" h={10}>
            <Box
              bg="blue.300"
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
              h={30}
              w={30}
            >
            <MaterialCommunityIcons name="stethoscope" size={24} color="white" />
            </Box>
            <VStack px={5} flex={1}>
              <Text fontFamily="bold" >
                COVID-19
              </Text>
              <Text>Novas datas de vacinação</Text>
            </VStack>
            <Box flex={0.1}>
            <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
            </Box>
          </HStack>
          <VStack borderTopWidth={0.5} borderColor="gray.200" mt={3}></VStack>
        </TouchableOpacity>
      </VStack>

      <VStack mt={2}>
        <TouchableOpacity onPress={() => console.log("clicou")}>
          <HStack alignItems="center" h={10}>
            <Box
              bg="blue.300"
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
              h={30}
              w={30}
            >
              <MaterialCommunityIcons name="hospital-building" size={24} color="white" />
            </Box>
            <VStack px={5} flex={1}>
              <Text fontFamily="bold" >
                Mais Hospitais
              </Text>
              <Text>novas unidades</Text>
            </VStack>
            <Box flex={0.1}>
              <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
            </Box>
          </HStack>
          <VStack borderTopWidth={0.5} borderColor="gray.200" mt={3}></VStack>
        </TouchableOpacity>
      </VStack>

    </VStack>
  );
}
