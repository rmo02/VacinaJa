import { Center, Heading, Input, ScrollView, Text, VStack } from "native-base";

import { UserPhoto } from "../components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Button } from "../components/Button";

import { Controller, useForm } from "react-hook-form";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};




export function Perfil() {
  const {
    control,handleSubmit, formState:{errors}} = useForm<FormDataProps>({
      defaultValues:{
        name: 'Ramon Maia',
        email:'ramon@email.com'
      }
    });

  async function handleProfileUpdate(data: FormDataProps) {
    console.log(data);
  }

  return (
    <VStack flex={1} bg="fundo">
      <Center
        bg={{
          linearGradient: {
            colors: ["roxo.300", "roxo.500"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        pb={6}
        pt={16}
      >
        <Heading color="white">Perfil</Heading>
      </Center>

      <ScrollView>
        <Center mt={2}>
          <UserPhoto
            source={{
              uri: "https://avatars.githubusercontent.com/u/52467086?v=4",
            }}
            alt="foto de perfil"
            size={33}
          />

          <TouchableOpacity onPress={() => console.log("trocar foto")}>
            <Text
              color="gray.400"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>

        <VStack px={5} marginBottom={5}>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                mt={2}
                bg="gray.50"
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
            render={({ field: {  onChange, value } }) => (
              <Input
                isDisabled
                mt={2}
                bg="gray.50"
                borderWidth={0}
                h={12}
                placeholder="ramon@email.com"
                maxW="100%"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="old_password"
            rules={{
              required:'Informe a senha'
            }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha antiga"
                mt={2}
                bg="gray.50"
                borderWidth={0}
                h={12}
                maxW="100%"
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />
          <Center>
          <Text color='gray.600'>{errors.old_password?.message}</Text>
          </Center>

          <Controller
            control={control}
            name="password"
            rules={{
              required:'Informe a sua nova senha'
            }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nova senha"
                mt={2}
                bg="gray.50"
                borderWidth={0}
                h={12}
                maxW="100%"
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />

          <Center>
            <Text color='gray.600'>{errors.password?.message}</Text>
          </Center>

          <Controller
            control={control}
            name="confirm_password"
            rules={{
              required:'Confirme a sua nova senha'
            }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nova senha"
                mt={2}
                bg="gray.50"
                borderWidth={0}
                h={12}
                maxW="100%"
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />

          <Center>
            <Text color='gray.600'>{errors.confirm_password?.message}</Text>
          </Center>

          <Button
            title="Atualizar"
            mt={4}
            onPress={handleSubmit(handleProfileUpdate)}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
