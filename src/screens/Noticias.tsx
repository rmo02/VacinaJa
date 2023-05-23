import { VStack } from "native-base";
import { NoticiasDetails } from "../components/NoticiaDetails";

export function Noticias () {
    return (
        <VStack bg='fundo' flex={1}>
            <NoticiasDetails />
        </VStack>
    );
}