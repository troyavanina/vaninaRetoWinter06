import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokemones");
  };
  return (
    <>
      <div className="divHome">
        <img
          className="imgPokeball"
          src="/public/images/pokeball-png-45332.png"
          alt=""
        />
        <h1>PokeApp</h1>
        <button className="buttonFind" onClick={handleClick}>
          Encontrá tu pokemon!
        </button>
      </div>
    </>
  );
}

export default Home;
