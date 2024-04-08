import {useState} from "react";
const GetListPokeAPI= ()=> {

const [pokemons, setPokemons] = useState(null);

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
setPokemons(data);
    });

    return ( 
        <section> 
            <h2> La liste des 100 premiers pokemons (mais les vrais savent toujours qu'il y en a que 151)</h2>
            {!pokemons ? (
            <p>Pokemons en cours de chargement</p>
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
export default GetListPokeAPI;