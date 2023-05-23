import { Box, Center, Divider, HStack, ScrollView, Text, VStack } from "native-base";
import { Header } from "../components/Header";

export function Vacinas() {
  return (
    <VStack flex={1} bg="fundo">
        <Header />
      <ScrollView marginTop={5} px={5} >
        <Text fontFamily="bold" fontSize={20}>
          Minhas Vacinas
        </Text>

        <Box borderRadius="md" bg="gray.100" mt={2}>
        <VStack space="4">
          <Box px="4" pt="4">
            <HStack justifyContent='space-between'>
            <Text fontFamily='bold'>Vacina Covid-19</Text>
            <Text fontFamily='bold'>02/06/2021</Text>
            </HStack>
          </Box>
          <Box px="4">
            <Text>ASTRAZENECA/FIOCRUZ - COVISHIELD, recombinante</Text>
          </Box>
          <Box px="4" pb="4">
            1ª Dose
          </Box>
        </VStack>
        </Box>

        <Box borderRadius="md" bg="gray.100" mt={2}>
        <VStack space="4">
          <Box px="4" pt="4">
          <HStack justifyContent='space-between'>
            <Text fontFamily='bold'>Vacina Covid-19</Text>
            <Text fontFamily='bold'>31/08/2021</Text>
            </HStack>
          </Box>
          <Box px="4">
            <Text>ASTRAZENECA/FIOCRUZ - COVISHIELD, recombinante</Text>
          </Box>
          <Box px="4" pb="4">
            2ª Dose
          </Box>
        </VStack>
        </Box>

        <Box borderRadius="md" bg="gray.100" mt={2} mb={2}>
        <VStack space="4">
          <Box px="4" pt="4">
          <HStack justifyContent='space-between'>
            <Text fontFamily='bold'>Vacina Difteria e Tétano</Text>
            <Text fontFamily='bold'>31/07/2022</Text>
            </HStack>
          </Box>
          <Box px="4">
            <Text></Text>
          </Box>
          <Box px="4" pb="4">
            Reforço
          </Box>
        </VStack>
        </Box>



      </ScrollView>

    </VStack>
  );
}
