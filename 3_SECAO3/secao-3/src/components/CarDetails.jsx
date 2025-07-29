const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Destructuring em props</h2>
        <div>
            <h3> Detalhes do carro </h3>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Este carro é novo</p>}
            {!newCar && <p>Este carro é usado</p>}
        </div>
    </div>
  )
}

export default CarDetails 