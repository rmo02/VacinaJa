import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import vacinaNew from "../../assets/vacinaNew.png";


export function NoticiasDetails() {

  return (
    <VStack flex={1}>
      <ScrollView>
        <Image source={vacinaNew} h={150} w="full" alt="vacina" />

        <VStack mt={5}>
          <Center>
            <Heading>Novo Canledário de Vacinação</Heading>
          </Center>

          <VStack mt={5} px={5}>
            <Text textAlign='justify'>
              Não podemos deixar de buscar as vacinas disponíveis nas salas de
              vacinação, nas Unidades Básicas de Saúde (UBS). São mais de 20
              vacinas, disponibilizadas nas salas de vacinação do SUS, com
              recomendações e orientações específicas para crianças,
              adolescentes, adultos, gestantes, idosos e indígenas. Vacinar é um
              ato de amor! Não vamos deixar que doenças já erradicadas no Brasil
              voltem a assombrar as nossas crianças! Lembrem-se que a saúde é
              uma responsabilidade de todos nós. Mantenham o cartão de vacinas
              atualizado!
            </Text>
            <Text mt={2} textAlign='justify'>
              1. BCG, 2. Hepatite B, 3. Penta, 4. Pólio inativada, 5. Pólio
              oral, 6. Rotavírus, 7. Pneumo 10, 8. Meningo C, 9. Febre amarela,
              10. Tríplice viral (sarampo, caxumba e rubéola) 11. Tetra viral
              (sarampo, caxumba e rubéola e varicela), 12. DTP, 13. Hepatite A,
              14. Varicela, 15. Difteria e tétano adulto (dT), 16. Meningocócica
              ACWY, 17. HPV quadrivalente, 18. dTpa, 19. Influenza (esta
              ofertada durante Campanha anual) e 20. Pneumocócica 23-valente
              (Pneumo 23)
            </Text>
          </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
