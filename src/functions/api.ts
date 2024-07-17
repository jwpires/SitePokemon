import { useState } from "react";

export const api = {
    
    listarPokemons: async() => {
        // let [dadosPokemon, setDadosPokemon] = useState([]);
        // const endpoints = [];
        // try {
        //     for (let i = 1; i < 51; i++) {
        //         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        //     };
        //     await Promise.all(endpoints.map(endpoint => fetch(endpoint)))
        //     .then(resp => Promise.all(resp.map( async r => r.json())))
        //     .then(res => {
        //         setDadosPokemon(res);
        //     })
        // } catch (error) {
        //     console.log(error);
        //     return [{"error":"Erro"}]
        // }finally{
        //     return dadosPokemon;
        // }
    },

    exibirHabilitadePokemon: async(id:number)=>{
        const [dadosPokemon, setDadosPokemon] = useState([]);
        try{
            const endpoint = await fetch("https://pokeapi.co/api/v2/ability/1");
            const json = await endpoint.json();
            return json;
        }catch(error){
            return error;
        }
    }
}
