const ShowUserName = (props) => {
  return (
    <div>
        <h2>Props</h2>
        <h3>O nome do usuário é: {props.name} </h3> {/*Props. Do componente pai para o filho */}
    </div>
  )
}

export default ShowUserName