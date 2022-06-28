import Banner from "./components/Banner";
import NavbarCmp from "./components/Navbar";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <NavbarCmp />
        <Banner />
        <Cards />
      </BrowserRouter>
    </>
  );
}

export default App;
