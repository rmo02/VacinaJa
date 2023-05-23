import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserPhoto } from "./UserPhoto";

export function Header() {
  return (
    <HStack 
    bg={{
        linearGradient: {
          colors: ["roxo.300", "roxo.500"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    pt={16} pb={52} px={8} alignItems="center">
      <UserPhoto
        source={
             { uri: 'https://avatars.githubusercontent.com/u/52467086?v=4'}
        }
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Ramon M.
        </Heading>
      </VStack>
      <TouchableOpacity onPress={() => console.log('saiu')}>
        <Icon as={MaterialIcons} name="logout" color="white" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
