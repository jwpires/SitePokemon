import React, { ChangeEvent, useEffect, useState } from "react";
import '../styles/style.css'
import { PokeCard } from "../components/pokecard";
import { PokemonInformacoes } from "../types/interfacePokemons";
// import PokeInfo from "../components/pokeInfo";
// import ModalPoke from "../components/modal";
import MyModal from "../components/modal";



export const Home = () => {

    // https://www.youtube.com/watch?v=wfHEwC_znzc
    const [show, setShow] = useState(false);
    const [pokemons, setPokemons] = useState<PokemonInformacoes[]>([]);
    const [pokemonsCopy, setPokemonsCopy] = useState<PokemonInformacoes[]>([]);
    const [pesquisaPokemon, setPesquisaPokemon] = useState('');

    //Função que irá puxar os dados dos Pokemons na API
    const arrayPokemons = async () => {
        const endpoints = [];
        let pokemon: PokemonInformacoes[] = [];
        try {
            for (let i = 1; i < 51; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            };

            // Fazer requisições HTTP assíncronas para cada URL em "endpoints"
            const responses = await Promise.all(endpoints.map(endpoint => fetch(endpoint)));

            // Converte as respostas da API em JSON
            const data = await Promise.all(responses.map(async r => r.json()));

            // Mapeia os dados JSON para objetos "PokemonInformacoes" e armazena em "pokemon"
            pokemon.push(...data.map((rs, index) => ({
                id: (index + 1),
                nome: rs.name, // Nome do Pokémon
                imagem: rs.sprites.front_default, // URL da imagem frontal do Pokémon
            })));
        } catch (error) {
            console.log(error);
        } finally {
            // console.log(pokemon);
            setPokemons(pokemon);
            setPokemonsCopy(pokemon);

            return pokemons;
            // console.log(pokemons);
        }
    }

    const consultaPokemon = (e: ChangeEvent<HTMLInputElement>) => {
        // arrayPokemons();
        console.log(e.target.value);
        setPesquisaPokemon(e.target.value);
        console.log('pesquisa:')
        console.log(pesquisaPokemon);

        if (e.target.value != '') {
            const filtro = pokemons.filter(pokemon => pokemon.nome.toLowerCase().startsWith(e.target.value));
            console.log('array:')
            console.log(filtro);
            setPokemonsCopy(filtro);
        } else {
            setPokemonsCopy(pokemons)
        }

    }

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        //   exibirHabilitadePokemon(prop.id);
    };


    useEffect(() => {
        arrayPokemons();
    }, []);


    return (
        
        <div className="flex-container-geral">
            <MyModal></MyModal>
            <div className="topoHome">
                {/* Imagem do topo pokemon */}
                <img src="../src/image/pokemon-img-fundo-tela-01.jpg" alt="imagem-fundo-topo-pokemon" />
            </div>

            <input type="text" name="" placeholder="Pesquisar Nome" value={pesquisaPokemon} id="" onChange={consultaPokemon} />
            {/* <PokeInfo></PokeInfo> */}
            <div className="flex-container-pokemons">
                {pokemonsCopy.map((p) => ( // Mapeia o array "pokemons" para renderizar cada Pokémon

                    <div className="quadroPokemon" key={p.nome}> {/* Adiciona uma chave única para cada item */}
                        <PokeCard id={p.id} pokeNome={p.nome} pokeImagem={p.imagem} cardHeight={230} cardWidth={200} ></PokeCard>

                    </div>
                ))}
            </div>
        </div>

    )
}