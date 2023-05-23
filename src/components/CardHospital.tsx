import { Box, HStack, Text, VStack } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";



export function CardHospital () {
    return (
        <VStack pt={10} paddingX={10}>
          <Text fontFamily='bold' fontSize={16}>Locais Proximos:</Text>
        <Box
        mt={5}
        p={5}
          rounded="lg"
          bg={{
              linearGradient: {
                colors: ["primary.400", "primary.500"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
        >
          <HStack >
          <FontAwesome5 name="hospital" size={40} color="white" />
          <VStack ml={2}>
          <Text fontFamily='bold' fontSize={16} color="white">Centro de Saúde do Turu</Text>
          <Text fontFamily='regular' fontSize={14} color="white">Av. Sete, S/N - Conj. Hab. Turu</Text>
          </VStack>
          </HStack>
        </Box>

        <Box
        mt={5}
        p={5}
          rounded="lg"
          bg={{
              linearGradient: {
                colors: ["primary.400", "primary.500"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
        >
          <HStack >
          <FontAwesome5 name="hospital" size={40} color="white" />
          <VStack ml={2}>
          <Text fontFamily='bold' fontSize={16} color="white">Centro de Saúde Djalma Mar..</Text>
          <Text fontFamily='regular' fontSize={14} color="white">Turu, São Luis - MA</Text>
          </VStack>
          </HStack>
        </Box>

        <Box
        mt={5}
        p={5}
          rounded="md"
          bg={{
              linearGradient: {
                colors: ["primary.400", "primary.500"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
        >
          <HStack >
          <FontAwesome5 name="hospital" size={40} color="white" />
          <VStack ml={2}>
          <Text fontFamily='bold' fontSize={16} color="white">Centro de Saúde Cohab Anil</Text>
          <Text fontFamily='regular' fontSize={14} color="white">R. 4, S/n - COHAB Anil I</Text>
          </VStack>
          </HStack>
        </Box>

        <Box
        mt={5}
        p={5}
          rounded="md"
          bg={{
              linearGradient: {
                colors: ["primary.400", "primary.500"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
        >
          <HStack>
          <FontAwesome5 name="hospital" size={40} color="white" />
          <VStack ml={2}>
          <Text fontFamily='bold' fontSize={16} color="white">Espaço Saúde Integrada</Text>
          <Text fontFamily='regular' fontSize={14} color="white">R. Vinte, 34 - Cohaserma I</Text>
          </VStack>
          </HStack>
        </Box>
      </VStack>
    );
}