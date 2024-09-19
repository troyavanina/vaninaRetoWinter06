import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import UsarContexto from "../contexto/UsarContexto";
import Pokemon from "../containers/Pokemon";
function Items(props) {
  const { name, url, pokemon } = props;

  const { guardamePokemon, pokemonIsFav } = useContext(Contexto);
  //split es un método de JavaScript que divide una cadena de texto (en este caso, la url) en un array, utilizando el carácter o cadena pasada como argumento como separador. En este caso, se está utilizando la barra / como separador.
  //Esto significa que la url que recibes en los props se divide en múltiples segmentos dondequiera que haya una barra /, y estos segmentos se almacenan en un array llamado urlCortada.

  let urlCortada = url.split("/");

  let imagenMini =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    urlCortada[6] +
    ".png";

  /*Después de aplicar split, urlCortada es el array resultante que contiene todos los fragmentos de la url.
El código luego accede al índice 6 de este array (urlCortada[6]) para construir la ruta del enlace. Se está utilizando ese fragmento de la URL como parte dinámica de la ruta.*/

  let isFav = pokemonIsFav(name);

  const handleGuardar = () => {
    guardamePokemon({ name: name, url: url });
    console.log(name, url);
  };

  let buttonDisplay;
  if (isFav) {
    buttonDisplay = "buttonSaveFavNone";
  } else {
    buttonDisplay = "buttonSaveFav";
  }

  return (
    <>
      <div className="divItemPokemon">
        <img className="imgMini" src={imagenMini} alt="Pokemon ARtwork" />
        <Link to={"/pokemones/" + urlCortada[6]} className="customLink">
          <h3>
            {isFav}
            {name}
          </h3>
        </Link>

        <button className={buttonDisplay} onClick={handleGuardar}>
          <svg
            className="iconHeart"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <title />
            <g data-name="Layer 54" id="Layer_54">
              <path
                // class="cls-1"
                d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
              />
            </g>
          </svg>
          <p>Guardar favorito</p>
        </button>
      </div>
    </>
  );
}

export default Items;
