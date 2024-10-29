import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const handleClicker = () => {
    navigate("/Login");
  };
  return (
    <nav
      className="bg-black flex items-center  justify-between w-full h-[100px] overflow-hidden
     text-white text-xl"
    >
      <img
        className="object-contain h-[90%] ml-3 rounded-sm"
        src={logo}
        alt="logo"
      />
      <ul className=" flex gap-32  ">
        <li
          className="border-2 border-white p-3 rounded-md
          hover:bg-nicer hover:text-black hover:border-none cursor-pointer"
        >
          About Us
        </li>
        <li
          className="border-2 border-white p-3 rounded-md
        hover:bg-nicer hover:text-black hover:border-none cursor-pointer"
        >
          Contact
        </li>
        <li
          className="border-2 border-white p-3 rounded-md
        hover:bg-nicer hover:text-black hover:border-none cursor-pointer"
        >
          Contribute
        </li>
      </ul>
      <div className="flex gap-4 ">
        <button
          className="bg-nicer px-5  py-2 rounded-lg text-black hover:bg-green-300"
          onClick={handleClicker}
        >
          LogIn
        </button>
        <button
          className="bg-nicer px-5  py-2 rounded-lg text-black hover:bg-green-300"
          onClick={handleClicker}
        >
          SignUp
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
