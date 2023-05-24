import {
  Center,
  Heading,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";
import { Alert } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import doctors from "../../assets/doctors.png";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.route";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export function Cadastro() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {},
  });

  const handleCadastro = (data: FormDataProps) => {
    console.log(data);
    // Verificar se algum input está vazio
    if (Object.values(data).some((value) => value === "" && undefined)) {
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Todos os inputs estão preenchidos, continuar com o cadastro
    navigation.navigate("login");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
    >
      <VStack
        flex={1}
        bg={{
          linearGradient: {
            colors: ["roxo.300", "roxo.500"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        justifyContent="space-between"
      >
        <VStack bg="red" h={250} pb={52} px={8} alignItems="center">
          <VStack mt={70}>
            <Center>
              <Heading color="white" fontFamily="regular" fontSize={30}>
                Vacina Já
              </Heading>
            </Center>

            <Image source={doctors} alt="logo" mt={5} h={140} />
          </VStack>
        </VStack>

        <VStack
          bg="white"
          h="70%"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
        >
          <Center mt={10}>
            <Heading color="trueGray.600">Cadastre-se</Heading>
            <Text mt={1} fontFamily="regular">
              Criei seu usuário para usar a plataforma
            </Text>
          </Center>

          <VStack px={8} mt={10}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  mt={2}
                  bg="blueGray.200"
                  borderWidth={0}
                  h={12}
                  placeholder="Nome"
                  maxW="100%"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  mt={5}
                  bg="blueGray.200"
                  borderWidth={0}
                  h={12}
                  placeholder="Email"
                  maxW="100%"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  keyboardType="number-pad"
                  secureTextEntry
                  mt={5}
                  bg="blueGray.200"
                  borderWidth={0}
                  h={12}
                  placeholder="Senha"
                  maxW="100%"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange, value } }) => (
                <Input
                  keyboardType="number-pad"
                  secureTextEntry
                  mt={5}
                  bg="blueGray.200"
                  borderWidth={0}
                  h={12}
                  placeholder="Confirme a senha"
                  maxW="100%"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Button
              borderRadius={10}
              title="Cadastrar"
              mt={4}
              onPress={handleSubmit(handleCadastro)}
            />

            <Center mt={10}></Center>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
