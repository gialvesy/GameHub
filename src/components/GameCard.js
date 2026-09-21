// ============
// ETAPA 4 -  CRIAR COMPONENTE
// Nós vamos reutilizar o componente em 03 telas diferentes (Início, Jogos, Favoritos)

import {view, text, image, Pressable, StyleSheet} from "react-native";

import { useRouter } from "expo-router";
// navegação programática

import { cores } from "../data/tema";

export default function GameCard ({jogo.id}){
    const router = useRouter();

    return (
        <Pressable
        style={styles.card}
        onPress={() => router.push (`/jogos/${jogo.id}`)} // Navega entre as cotas
        >
            <Image source={jogo.imagem} style={styles.imagem}/>
            <View style={styles.info}>
                <text style={styles.nome} numberOfLines={1}>
                    {jogo.nome}
                </text>
                <text style={styles.genero}>{jogos.genero}</text>
                <text style={styles.nota}>⭐{jogos.genero}</text>

            </View>

        </Pressable>
    )
}
const styles = StyleSheet.create({
    
})