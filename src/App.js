//css
import "./img.scss";
import "./body.scss";
//imagenes
import logo from "./img/people-logo.png";
import lupa from "./img/vidrio-de-aumento.png";

export default function App() {
  return (
    <div className="App">
      <div className="buscador_logos">
        <h1 className="nombre_pag">Buscador de personas</h1>
        <img src={logo} className="logo_img" />
      </div>
      <div className="buscador_inputs">
        <input type="text" className="input" />
        <img src={lupa} className="lupa_img" />
      </div>
    </div>
  );
}
