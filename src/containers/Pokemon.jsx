import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import Items from "../components/Items";
import Contexto from "../contexto/Contexto";
import Pokemones from "./Pokemones";
function Pokemon(props) {
  const location = useLocation();
  const [pokemon, setPokemon] = useState();
  const pedazos = location.pathname.split("/");
  const { guardamePokemon } = useContext(Contexto);
  const { name, url } = props;
  console.log("lo que tiene pedazos[2]=>", pedazos[2]);
  console.log(
    "lo que tiene location.pathname: ",
    location.pathname,
    "lo que tiene location.pathname.split: ",
    location.pathname.split("/")
  );
  const traemePokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2];
    const res = await axios.get(url);
    setPokemon(res.data);
  };

  useEffect(() => {
    traemePokemon();
  }, []);

  const handleGuardar = () => {
    guardamePokemon({ name: name, url: url });
    console.log("guardame pokemon: ", guardamePokemon);
  };
  const navigate = useNavigate();
  const handleVolver = () => {
    navigate("/pokemones");
  };

  return (
    <>
      <h1>{pokemon?.name}</h1>
      <div className="divPokemon">
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <div className="divButtons">
        <button className="buttonGoBack" onClick={handleVolver}>
          Volver
        </button>
        {/* <button className="buttonSaveFav" onClick={handleGuardar}>
          <svg
            className="iconHeart"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <title />
            <g data-name="Layer 54" id="Layer_54">
              <path
                class="cls-1"
                d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
              />
            </g>
          </svg>
          <p>Guardar Favorito</p>
        </button> */}
      </div>
    </>
  );
}

export default Pokemon;
