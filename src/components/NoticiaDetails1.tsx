import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import vacinaNew from "../../assets/vacinaNew.png";

export function NoticiasDetails1() {
  return (
    <VStack flex={1}>
      <ScrollView>
        <Image source={vacinaNew} h={150} w="full" alt="vacina" />

        <VStack mt={5}>
          <Center px={3}>
            <Heading textAlign="justify">
              Ministério da Saúde divulga cronograma do Programa Nacional de
              Vacinação de 2023
            </Heading>
          </Center>

          <VStack mt={5} px={5}>
            <Text textAlign="justify">
              O Ministério da Saúde divulgou, nesta terça-feira (31), o
              cronograma do Programa Nacional de Vacinação 2023. As ações devem
              começar a partir de 27 de fevereiro, com a vacinação com doses de
              reforço bivalentes contra a Covid-19 em pessoas com maior risco de
              desenvolver formas graves da doença, como idosos acima de 60 anos
              e pessoas com deficiência. Aumentar as coberturas vacinais, que
              apresentaram índices alarmantes nos últimos anos, é prioridade do
              Governo Federal.
            </Text>
            <Text mt={2} textAlign="justify">
              Também está prevista a intensificação na campanha de Influenza, em
              abril, antes da chegada do inverno, quando as baixas temperaturas
              levam ao aumento nos casos de doenças respiratórias. Haverá,
              ainda, ação de multivacinação de poliomielite e sarampo nas
              escolas.
            </Text>
            <Text mt={2} textAlign="justify">
              “Estamos diante de um cenário de baixas coberturas. Foi atacada a
              confiança da nossa população nas nossas vacinas. É fundamental
              retomar a rotina de vacinação para evitarmos epidemias de doenças,
              inclusive, já controladas”, destaca a ministra da Saúde, Nísia
              Trindade.
            </Text>
            <Text mt={2} textAlign="justify">Veja o cronograma de cinco etapas:</Text>
            <Text mt={2} textAlign="justify">
              Etapa 1 - a partir de fevereiro {'\n'}
              Vacinação contra Covid-19 (reforço com a vacina bivalente)
              (estimativa populacional: 52 milhões) Público-alvo: pessoas com
              maior risco de formas graves de Covid-19; • Pessoas com mais de 60
              anos; • Gestantes e puérperas; • Pacientes imunocomprometidos; •
              Pessoas com deficiência; • Pessoas vivendo em Instituições de
              Longa Permanência (ILP); • Povos indígenas, ribeirinhos e
              quilombolas; • Trabalhadores e trabalhadoras da saúde. {'\n'} {'\n'}
              Etapa 2 - a partir de março Intensificação da vacinação contra Covid-19 {'\n'}
              Público alvo: • Toda a população com mais de 12 anos. {'\n'} {'\n'}
               Etapa 3 – a partir de março Intensificação da vacinação de Covid-19 entre
              crianças e adolescentes Público alvo: {'\n'}
              • Crianças de 6 meses a 17
              anos. Estratégias e ações: • Mobilizar a comunidade escolar, desde
              a Educação Infantil até o Ensino Médio com duas semanas de
              atividades de mobilização e orientação; comunicar estudantes, pais
              e responsáveis sobre a necessidade de levar a Caderneta de
              Vacinação para avaliação; {'\n'} {'\n'}
              Etapa 4 – a partir de abril Vacinação de
              Influenza Público-alvo: {'\n'}
              • Pessoas com mais de 60 anos; •
              Adolescentes em medidas socioeducativas; • Caminhoneiros e
              caminhoneiras; • Crianças de 6 meses a menores de 6 anos de idade
              (5 anos, 11 meses e 29 dias); • Forças Armadas; • Forças de
              Segurança e Salvamento; • Gestantes e puérperas; • Pessoas com
              deficiência; • Pessoas com comorbidades; • População privada de
              liberdade; • Povos indígenas, ribeirinhos e quilombolas; •
              Professoras e professores; • Profissionais de transporte coletivo;
              • Profissionais portuários; • Profissionais do Sistema de Privação
              de Liberdade; • Trabalhadoras e trabalhadores da saúde. Etapa 5 -
              a partir de maio Multivacinação de poliomielite e sarampo nas
              escolas
            </Text>
          </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
