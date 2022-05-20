import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDataByName, getPokemonProm } from './helpers/handleQuery.js'
import { NavBar } from './components/NavBar.js'
import { SearchBar } from './components/SearchBar.js'
import { PokecardDisplay } from './components/PokecardDisplay.js'
import { PokeInfoModal } from './components/PokeInfoModal.js'
import { useState, useEffect } from 'react'
import Loading from './components/Loading.js'
function App() {
  const [pokemonList, setPokemonList] = useState();
  const [defaultPokemonList, setDefaultPokemonList] = useState();

  const [loading, setLoading] = useState(true);
  const [searchMode, setSearchMode] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    // getPokemonData();
    getPokemonProm().then((promArr) => {
      Promise.all(promArr).then((results) => {
        setPokemonList(results);
        setDefaultPokemonList(results);
        console.log('pokemon data loaded.');
        setLoading(false);
      });
    });
  }, [searchMode]);
  const sendQueryToHome = (query) => {
    setSearchMode(true);
    if(query !== '' && !loading){
      const results = getDataByName(query, pokemonList);
      setPokemonList(results);
      setSearchMode(false);
    }
    else{
      setPokemonList(defaultPokemonList);
    }
  }
  const sendPokeDataToHome = (clickData) => {
    // fired when pokecard is clicked
    setModalShow(true);
    setSelectedPokemon(clickData);
  }
    return (
      <div className="App">
        {!loading && selectedPokemon && modalShow ? <>
        <PokeInfoModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            pokemondata={selectedPokemon}
          />
        </>
        : <></>}

        <Loading
        show={loading}
        />

        <NavBar/>

        <div className='search'>
          <SearchBar
          sendQueryToHome={sendQueryToHome}
          />
        </div>
  
        <div className='results'>
          <h2>Pokemon</h2>
          {
            loading ?
            <>
            </> :
            <PokecardDisplay
            pokemonList={pokemonList}
            sendPokeDataToHome={sendPokeDataToHome}
            /> 
          }
        </div>
      </div>
  );
}

export default App;
