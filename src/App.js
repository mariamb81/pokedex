import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { NavBar } from './components/navbar/NavBar.js'
import { SearchBar } from './components/searchbar/SearchBar.js'
import { PokecardDisplay } from './components/allPokemon/PokecardDisplay.js'
import { PokeInfoModal } from './components/infomodal/PokeInfoModal.js'
import Loading from './components/Loading.js'
import ScrollToTop from './components/scroll/ScrollToTop'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from './components/allPokemon/allPokemonSlice'
import { setInfoModalClosed, clearInfoModal } from './components/infomodal/infoModalSlice';

function App() {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector((state) => state.infoModal);
  const { isLoading, hasError } = useSelector((state) => state.allPokemon);
  //load data upon render 
  useEffect(() => {
    dispatch(loadData());
  }, []);

  const handleClose = () => {
    //close modal    
    //dispatch action to remove data from infomodal slice
    dispatch(clearInfoModal());
    dispatch(setInfoModalClosed());

  }
  return (
    <div className="App">
      
      {!isLoading && modalIsOpen ? <>
      <PokeInfoModal
          show={modalIsOpen}
          onHide={handleClose}
        />
      </>
      : <></>}

      <Loading
      show={isLoading}/>

      <NavBar/>

      <div className='search'>
        <SearchBar/>
      </div>
      <div className='results'>
        <h2>Pokemon</h2>
        {
          isLoading || hasError?
          <>
          </> :
          <PokecardDisplay/> 
        }
      </div>
    </div>
  );
}

export default App;
