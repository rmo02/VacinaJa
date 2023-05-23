import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Noticias } from "../components/Noticias";

export function HomePage() {
  return (
    <VStack flex={1} bg="fundo">
      <Header />
      <VStack px={5} mt={5}>
        <Text fontFamily="bold" fontSize={18}>
          Categorias
        </Text>

        <ScrollView mt={5}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            <Menu />
        </ScrollView>

        <VStack mt={5}>
            <Text fontSize={18} fontFamily='bold'>Notícias</Text>
            <ScrollView>
                <Noticias />
            </ScrollView>
        </VStack>
       
      </VStack>
    </VStack>
  );
}
