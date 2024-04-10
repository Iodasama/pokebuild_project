
import {useEffect, useState} from "react";

const GetWaterPokeApiList= ()=> {

const [pokemons, setPokemons] = useState(null);

useEffect(()=>{
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
setPokemons(data);
    });
},[]);
    return ( 
        <section> 
            <h2> Pokemons Water Style Team</h2>
            {!pokemons ? (
            <p>Pokemons loading</p>
        ) : ( 
    <>    
    {pokemons.map ((pokemon)=>{ 
            return ( 
                    <article>
                    <h2> {pokemon.name}</h2>
                    </article>
                    );
                }
            )
    }
    </>
            )}
        </section>
        );
}; 
export default GetWaterPokeApiList;