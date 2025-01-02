import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
    //  const API = "https://pokeapi.co/api/v2/pokemon";
//   const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if(!pokemon){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
  }


  return (
     <section className="container">
        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>
        <ul className="card-demo">
            <li className="pokemon-card">
                <figure>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="pokemon-image" />
                </figure>
                <h1>{pokemon.name}</h1>
            </li>

        </ul>

     </section>
  );


};
