import { VStack } from "native-base";
import { NoticiasDetails1 } from "../components/NoticiaDetails1";

export function Noticias1 () {
    return (
        <VStack bg='fundo' flex={1}>
            <NoticiasDetails1 />
        </VStack>
    );
}