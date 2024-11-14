import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const pokedex = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            console.log(response.data.results)

            setPokemons(response.data.results)
        }
        pokedex()
    }, [])

    return(
        <>
            <ul><li><button><Link to={`/`}>Back</Link></button></li></ul>
            <h2>Pokemon Component</h2>
            {
                pokemons.map(pokemon => (
                    <>
                        <div className='pokemon' key={pokemon}>
                            <button><Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link></button>
                        </div>
                        
                    </>
                ))
            }
        </>
    )
}

export default Pokemons