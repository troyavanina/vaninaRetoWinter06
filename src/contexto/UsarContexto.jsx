import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer, useEffect } from "react";
import axios from "axios";
function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    //necesito que tenga un estado inicial de datos
    pokemones: [],
    favoritos: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  //AGREGADO PARA LOCAL STORAGE

  // Guardar en localStorage
  const saveInLocalStorage = (favoritos) => {
    localStorage.setItem("localSaved", JSON.stringify(favoritos));
  };

  // Recuperar favoritos del localStorage cuando el componente se monta
  useEffect(() => {
    const dataRecovered = localStorage.getItem("localSaved");
    console.log("recupera?", dataRecovered);
    if (dataRecovered) {
      const favoritosRecuperados = JSON.parse(dataRecovered);
      if (favoritosRecuperados.length > 0) {
        dispatch({
          type: "RECUPERAR_FAVORITOS",
          payload: favoritosRecuperados,
        });
      }
    }
  }, []);

  // Guardar automáticamente en localStorage cada vez que cambie 'favoritos'
  useEffect(() => {
    saveInLocalStorage(state.favoritos);
  }, [state.favoritos]);

  const traemePokemones = async () => {
    console.log("traemePokemones");
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    dispatch({
      type: "LISTAME_POKEMONES",
      payload: res.data.results,
    }); //EL STRING SOLO FUNCIONA SI LO DECLARE EN UNA FUNCION ANTES.
  };

  const guardamePokemon = (item) => {
    console.log("guardamePokemon");
    if (!pokemonIsFav(item.name)) {
      dispatch({ type: "GUARDAME_POKEMON", payload: item });
    }
    console.log("favoritos:", state.favoritos);
    saveInLocalStorage(state.favoritos);
  };

  const pokemonIsFav = (name) => {
    for (let i = 0; i < state.favoritos.length; i++) {
      if (state.favoritos[i].name == name) {
        return true;
      }
    }
    return false;
  };

  return (
    <Contexto.Provider
      value={{
        traemePokemones,
        guardamePokemon,
        pokemonIsFav,
        saveInLocalStorage,

        pokemones: state.pokemones,
        favoritos: state.favoritos,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default UsarContexto;
