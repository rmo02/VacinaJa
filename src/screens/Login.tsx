import { Center, Heading, Image, Input, ScrollView, Text, VStack, useToast } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { TouchableOpacity, BackHandler } from "react-native";
import doctors from '../../assets/doctors.png';
import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import { AppRoutes } from "../routes/app.route";


type FormDataProps = {
  email: string;
  password: string;
};

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>{
      return true
    })
  }, [])

  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {},
  });

  const handleLogin = (data: FormDataProps) => {
    // Verificar os dados de login fornecidos pelo usuário
    if (data.email === "ramon@email.com" && data.password === "123456") {
      setIsLoggedIn(true);
    } else {
      const title = 'Usuário inválido, verifique suas credenciais.';
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      });
    }
  };
  
  if (isLoggedIn) {
    // Se o usuário estiver logado, redirecione para as rotas do aplicativo
    return <AppRoutes />;
  }
  


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
      <VStack bg='red' h={250} pb={52} px={8} alignItems="center">
        <VStack mt={70}>
            <Center>
            <Heading color='white' fontFamily='regular' fontSize={30}>Vacina Já</Heading>
            </Center>

            <Image 
            source={doctors}
            alt="logo"
            mt={5}
            h={140}
            />
        </VStack>
      </VStack>

      <VStack
        bg="white"
        h="70%"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        <Center mt={10}>
          <Heading color="trueGray.600">Bem-Vindo</Heading>
          <Text mt={1} fontFamily="regular">
            Entre com suas credenciais
          </Text>
        </Center>

        <VStack px={8} mt={10}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Informe o email" }}
            render={({ field: { onChange, value } }) => (
              <Input
                mt={2}
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
            rules={{ required: "Informe a senha" }}
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

          <Button
            borderRadius={10}
            title="Entrar"
            mt={4}
            onPress={handleSubmit(handleLogin)}
          />

          <Center mt={10}>
            <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
              <Text>Não tem acesso? Clique aqui</Text>
            </TouchableOpacity>
          </Center>
        </VStack>
      </VStack>
    </VStack>
    </ScrollView>

  );
}
