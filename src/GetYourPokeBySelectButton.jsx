import { useEffect, useState } from "react";
const GetPokeBySelectButton = () => { 
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes]= useState([]);

    const handleSubmit = (e) => { 

        e.preventDefault();
        //console.log('You clicked submit WELL DONE!!')

        const PokeToSelect = e.target.type.value;
       


        fetch ("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + PokeToSelect)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
              
            setPokemons(data);
            })

    }

    //console.log(pokemons)

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                setTypes(data)
            })


    }, []);

    return ( 
        <section>
            <h2> Trouvez les Poke resistant a un type </h2>
            <form onSubmit ={handleSubmit}>
             <select name ="type">
            
             { types.map((type) => {
                                return (
                                    <option value={type.name}>{type.name}</option>
                                )
                            })
                        }
                {/*<option value="Acier">Acier</option>
                <option value="Feu">Feu</option>
                <option value="Eau">Eau</option>
    <option value="Plante">Plante</option>*/}

            </select>
            <input type = "submit" />
            </form>

            { pokemons.map((pokemon)=>{ 
                return (
                        <article>
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.image} alt={pokemon.name}/>
                        </article>
                    )
                })
            }
    
        </section>
    
    )



};

export default GetPokeBySelectButton;


/*<h2> Search Your Pokemon </h2>
            {!pokemon ? (
                <p> Pokemon loading </p>
            ) : ( 
        
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
            )}
*/
