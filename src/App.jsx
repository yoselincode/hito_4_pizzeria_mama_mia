import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nabvar from "./componentes/Nabvar";
import Footer from "./componentes/Footer";
import Home from "./pagina/Home";
import LoginPage from "./pagina/LoginPage";
import RegisterPage from "./pagina/RegisterPage";
import Cart from "./pagina/Cart";
import Pizza from "./pagina/Pizza";

function App() {
  return (
    <div className="contenedor">
      {
        // Barra de navegacion
      }
      <Nabvar />
      {
        // pagina
      }
      {/*<Home />*/}
      {/*<LoginPage />*/}
      {/*<RegisterPage />*/}
      {/*<Cart />*/}
      {<Pizza />}
      {
        //pie de pagina
      }
      <Footer />
    </div>
  );
}

export default App;
