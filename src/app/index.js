// ETAPA 1 - INCIO DO PROJETO: TELA INICIAL

//O que fazemos aqui?
// Esta é a tela inicial do app (rota "/")

import { View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
// view: Container bascios
// text: para exibir texto
// ScrollView: permite rolagem vertical
// Flatlist: lista otimizada com rolagem
// Pressable: botão de feedback de toque
// StyleSheet: define estilos

import { useRouter } from "expo-router";
// acesso ao objeto router, tem a função de navegação baseada em arquivos (biblioteca).

import GameCard from "../components/GameCard"
// Reutilizar componentes, isso evita duolicação codigo e mantem a consistencia visual.

import { jogos } from "../data/jogos";
// Importante uma array de objetos do arquivo data/jogos.js

import { cores } from "../data/tema";
//  importa a paleta de cores do app do arquivo data/tema.js

//========================================
export default function Inicio(){
    const router = useRouter();
    // obtemos o objeto de navegação
    const destaques = jogos.filter((jogo) => jogo.destaque)
    // precorre o array jogos e cria um novo array estaques contendo apenas os objetos cuja o campo "destaque" seja true.
    const populares = [...jogos].sort((a,b) => b.nota - a.nota).slice(0,5);
    // ...jogos -> cria uma copíia do array original
    // sort((a, b) => b.nota) ordena a copia de maior nota para a menor
    // .slice(0,5): extrai apenas os 5 primeiros elementos do array

    //--------------------------------------
    // BLOCO 2 - ESTRUTURA DA TELA
    // -------------------------------------
    return (
        // Inicio do JSX retornando pelo componente: define o que será renderizado na tela
        <ScrollView style={style.container} contentContainerStyle={StyleSheet.conteudo}>
            {/* scrollview: Container com rolagem vertical */}
            <text style={styles.titulo}>GameHub</text>
            {/* Exibe o texto "GameHub" com titulo, usando o estilo "titulo"*/}
            <text style={styles.subtitulo}>Seu universo de jogos em um só lugar</text>

        //--------------------------------------
        // BLOCO 2.1 - SEÇÃO JOGOS
        // -------------------------------------

        {/* Faça o commit */}
        <text style={styles.secaoTitulo}>Jogos em destque</text>
        {/* Exibe o título desta seção, usando o estilo "secaotitulo" */}
        <FlatList
        data={destaques}
        // define a fonte de dados da lista - array "destaques"
        keyExtractor={(item) => item.id}
        // Função que retorna uma chave única
        horizontal
        // faz a lista rolar
        showsVerticalScrollIndicator={false}
        // Oculta a barrinha de rolagem horizontal, deixando a interface mais limpa
        renderItem={({item}) => <GameCard jogo={item}/>}
        // Função chamada para cada elemento do array "data"
        />

        //--------------------------------------
        // BLOCO 2.2 - SEÇÃO "MAIS POPULARES"
        // -------------------------------------    

        
        
        </ScrollView>

    )

}