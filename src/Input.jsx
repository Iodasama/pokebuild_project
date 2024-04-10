import { useState } from "react";



function Form() {
    const [pokemon, setPokemon] = useState(null);
   
    function handleSubmit(e) {
        e.preventDefault();
      
        console.log('You clicked submit!!');

     
        const pokemonToSearch = e.target.search.value;
      
        fetch(" https://pokebuildapi.fr/api/v1/pokemon/" + pokemonToSearch)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemon(data);
            })
        

    }


  
    return (
        <section> 
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            <label>
            <input type="text" name="search"/>
            </label>
        </form> 

        <h2> Search Your Pokemon </h2>
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


        </section>
    );
}; 





  export default Form;

  