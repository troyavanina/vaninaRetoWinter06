import { useEffect, useState, useContext } from "react";
import Items from "../components/Items";
import Contexto from "../contexto/Contexto";
function MisFavoritos() {
  const { favoritos } = useContext(Contexto);

  useEffect(() => {
    // traemePokemones();
  }, []);

  let handleClick = () => {
    console.log("pokemones handle:", pokemones);
  };

  console.log("");

  return (
    <>
      <h1>Estos son tus favoritos!</h1>

      <div className="divListPokemones">
        {favoritos.map((pokemon) => (
          <Items {...pokemon} key={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default MisFavoritos;
