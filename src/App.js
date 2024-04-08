import logo from './logo.svg';
import './App.css';
import Header from './Header';
import GetListPokeApi from "./GetListPokeApi";
import GetAllStylePokeApiList from './GetAllStylePokeApiList';
import GetWaterPokeApiList from './GetWaterPokeApiList';
import GetFirePokeApiList from './GetFirePokeApiList';
import GetInsectePokeApiList from './GetPlantPokeApiList';

function App() {
  return (
    


    <>
      <Header />
      <GetListPokeApi />
      <GetAllStylePokeApiList />
      <GetWaterPokeApiList />
      <GetFirePokeApiList />
      <GetInsectePokeApiList />
      
    </>
  );
}




export default App;
