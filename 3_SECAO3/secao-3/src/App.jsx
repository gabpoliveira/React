import "./App.css";


import imagemAssests from "./assets/imagem-assets.jpg"; // Importando imagem de assets
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import MessageState from "./components/MessageState";
import ChangeMessageState from "./components/ChangeMessageState";
import { useState } from "react";

function App() {

  const cars = [
   {id: 1, brand: "toyota", color: "prata", km: 0, newCar: true },
   {id: 2, brand: "kia", color: "branco", km: 0, newCar: true },
   {id: 3, brand: "chevrolet", color: "preto", km: 0, newCar: true },
  ]

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  function showMessage() {
    window.alert("Evento componente pai")
  }

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
      <ShowUserName name = "Gabriel"/> {/* props */}
      <CarDetails brand ="VW" km={100000} color="azul" newCar={false} />{/* Destructuring em props */}
      <CarDetails brand ="Fiat" km={0} color="preto" newCar={true} />{/* Reaproveitando componentes */}
      <CarDetails brand ="Ford" km={0} color="branco" newCar={true} />{/* Reaproveitando componentes */}
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
        key = {car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}
      <Fragment />
      {/* Children prop */}
      <Container></Container>
      {/*Função como prop */}
      <ExecuteFunction myFunction={showMessage} />
          {/* state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;