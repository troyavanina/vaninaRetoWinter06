import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"} className="customLink">
          Home{" "}
        </Link>
        {/* <Link to={"/somos"}>Somos </Link> */}
        {/* <Link to={"/contacto"}>Contacto </Link> */}
        <Link to={"/pokemones"} className="customLink">
          Pokemones{" "}
        </Link>
        <Link to={"/misfavoritos"} className="customLink">
          Mis Favoritos{" "}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
