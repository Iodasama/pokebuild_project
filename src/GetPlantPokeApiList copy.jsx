import {useEffect,useState} from "react";

const GetInsectePokeApiList= ()=> {

const [pokemons, setPokemons] = useState(null);

useEffect (() => { 
    
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Insecte")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
setPokemons(data);
    });

},[]); 

    return ( 
        <section> 
            <h2> Pokemons Insect Style Team</h2>
            {!pokemons ? (
            <p>Pokemons loading</p>
        ) : ( 
    <>    
    {pokemons.map ((pokemon)=>{ 
            return ( 
                    <article>


                        <h2> {pokemon.name}</h2>
                        <img src={pokemon.image} alt={pokemon.name}/>
                        
                        <h3>Stats :</h3> 
                        <ul>
                            <li>Life : {pokemon.stats.HP}</li>
                            <li>Attack : {pokemon.stats.attack}</li>
                            <li>Defense : {pokemon.stats.defense}</li>
                            <li>Special Attack : {pokemon.stats.special_attack}</li>
                            <li>Special Defense : {pokemon.stats.special_defense}</li>
                            <li>Speed  : {pokemon.stats.speed}</li>
                        </ul>
                        
                        <h3>Poke Type :</h3> 
                        
                        <ul> 
                            {pokemon.apiTypes.map((type)=>{
                                return (
                                    <li>{type.name}</li> 
                                )
                            })}
                        </ul>

                            
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
export default GetInsectePokeApiList;