import { useEffect, useState, useContext } from "react";
import Items from "../components/Items";
import Contexto from "../contexto/Contexto";
function Pokemones() {
  const { pokemones, traemePokemones } = useContext(Contexto);

  useEffect(() => {
    traemePokemones();
  }, []);

  let handleClick = () => {
    console.log("pokemones handle:", pokemones);
  };

  return (
    <>
      <h1>Elegí tu pokemon!</h1>

      <div className="divListPokemones">
        {pokemones.map((pokemon) => (
          <Items {...pokemon} key={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default Pokemones;
