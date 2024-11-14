import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios' 

const PokemonDetails = () => {

    const { pokemon } = useParams()

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const pokedex = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            console.log(response.data.results)

            setPokemons(response.data.results)
        }
        pokedex()
    }, [])

    const pokemonName = pokemons.find(pokemon => pokemon.name === pokemon)

    return(
        <>
            <h2>Pokemon Details Component</h2>
            <div>{pokemonName}</div>
            <div>{pokemon}</div>
        </>
    )
}

export default PokemonDetails