import { Box, HStack, Image, Text } from "native-base";
import fichaMedico from "../../assets/fichaMedico.png";
import agenda from '../../assets/agenda.png';
import exames from '../../assets/exames.png';


export function Menu() {
  return (
    <HStack>
      <Box bg="white" borderRadius={12} alignItems="center" h={100} w={90}>
        <Image
          h={20}
          w={20}
          source={fichaMedico}
          alt="ficha medica"
          resizeMode="contain"
        />
        <Text pb={1} fontFamily="regular">Consultas</Text>
      </Box>

      <Box bg="white" borderRadius={12} alignItems="center" h={100} w={90} ml={5}>
        <Image
          h={20}
          w={20}
          source={exames}
          alt="ficha medica"
          resizeMode="contain"
        />
        <Text  pb={1} fontFamily="regular">Exames</Text>
      </Box>

      <Box bg="white" borderRadius={12} alignItems="center" h={100} w={100} ml={5}>
        <Image
          h={20}
          w={20}
          source={agenda}
          alt="ficha medica"
          resizeMode="contain"
        />
        <Text pb={1} fontFamily="regular">Agendamento</Text>
      </Box>

      <Box bg="white" borderRadius={12} alignItems="center" h={100} w={90} ml={5}>
        <Image
          h={20}
          w={20}
          source={fichaMedico}
          alt="ficha medica"
          resizeMode="contain"
        />
        <Text  pb={1} fontFamily="regular">Vacinas</Text>
      </Box>

    </HStack>
  );
}
