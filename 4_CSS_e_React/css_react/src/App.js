import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS no React</h1>
      {/* CSS de Componente */}
      <MyComponent />
      {/* Inline CSS */}
      <p style={{ color: "white", backgroundColor: "black"}}>CSS INLINE</p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? {color:"purple" , backgroundColor: "#3a404b"} : {color: "pink", backgroundColor: "#3a404b"}}>CSS inline dinâmico</h2>
      <h2 style={n > 10 ? {color:"purple", backgroundColor: "#3a404b"} : {color: "pink", backgroundColor: "#3a404b"}}>CSS inline dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Título com classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
