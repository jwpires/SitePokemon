// export type PokemonInformacoes = {
//     nome: string;
//     imagem: string;
// }

export interface PokemonInformacoes {
    id: number,
    nome: string;
    imagem: string;
}

export interface HabilidadesPokemon {
    cor?: string,
    grupoPokemon?: string[],
    descricaoPokemon?: string[],
    taxaCrescimento?: string,
    tipoDeHabitate?: string,
    forma?: string
}