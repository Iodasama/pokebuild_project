import {useEffect, useState} from "react";
const GetAllStylePokeApiList= ()=> {

const [pokemons, setPokemons] = useState(null);

useEffect(()=>{fetch("https://pokebuildapi.fr/api/v1/types")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
setPokemons(data);
    });
},[]);

    return ( 
        <section> 
            <h2> Pokemons All Style Team</h2>
            {!pokemons ? (
            <p>Pokemons loading … </p>
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
export default GetAllStylePokeApiList;