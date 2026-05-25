import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import DragonDetail from "./pages/DragonDetail";
import Favorites from "./pages/Favorites";

function App() {
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon/:name" element={<DragonDetail/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </>
  );
}
export default App;