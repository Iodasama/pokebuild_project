import {useEffect, useState} from "react";

const GetFirePokeApiList= ()=> {

const [pokemons, setPokemons] = useState(null);

useEffect(()=>{fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
setPokemons(data);
    });
}, []);

    return ( 
        <section> 
            <h2> Pokemons Fire Style Team</h2>
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
export default GetFirePokeApiList;