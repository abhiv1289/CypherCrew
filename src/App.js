import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Home from "./Pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
