const Header = () => {

    const projectTitle = "Pokemon Build Project X"
    
    return (
    <div> 
        <header className="App-header">
        
            
        <p>{projectTitle}</p>
        <img src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" className="App-logo" alt="logo" />
        <nav>
            <ul>
                <li> Accueil </li>
                <li> Get Your Poke </li>
                <li> Contact </li>
                
            </ul>

        </nav>
        
        </header> 


    </div>
    )}
    
    export default Header;
