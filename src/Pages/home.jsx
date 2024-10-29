import { useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar";
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Login");
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl font-mono font-bold bg-slate-400">
        CypherCrew
      </h1>
      <div className="flex justify-center items-center mt-10">
        <button
          className="bg-blue-400 text-white p-3 text-lg rounded-lg hover:bg-blue-950"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
