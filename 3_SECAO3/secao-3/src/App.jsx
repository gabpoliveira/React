import "./App.css";


import imagemAssests from "./assets/imagem-assets.jpg"; // Importando imagem de assets
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avançando no react</h1>
      <div className="imagens">{/* Imagem em public */}
        <h2>Imagem em public</h2>
        <img src="./public/imagem-public.jpg" alt="Galaxia" />
      </div>
      <div className="imagens"> {/* Imagem em assets */}
        <h2>Imagem em assets</h2>
        <img src={imagemAssests} alt="Universo" />
      </div>
      <ManageData /> {/* trabalhando useState */}
      <ListRender /> {/* Renderizando lista e Previous State*/ }
      <ConditionalRender />{/* Renderização condicional */ }
    </div>
  );
}

export default App;