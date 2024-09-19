//TYPES (tipos de datos/acciones)
const LISTAME_POKEMONES = "LISTAME_POKEMONES";
const DAME_POKEMON = "DAME_POKEMON";
const GUARDAME_POKEMON = "GUARDAME_POKEMON";

//AGREGADO PARA LOCAL STORAGE

const RECUPERAR_FAVORITOS = "RECUPERAR_FAVORITOS";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_POKEMONES:
      return { ...state, pokemones: payload };

    case GUARDAME_POKEMON:
      return { ...state, favoritos: [...state.favoritos, payload] }; //aca el payload es el pokemon nuevo

    //AGREGADO PARA LOCAL STORAGE

    case RECUPERAR_FAVORITOS:
      return { ...state, favoritos: payload };
  }
}
