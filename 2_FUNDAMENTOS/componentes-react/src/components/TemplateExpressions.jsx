const TemplateExpressions = () => {
    const name = "Gabriel";
    const data = {
        age: 22,
        job: "Estudante"
    }
    
    return(
        <div>
            <h1>Olá, {name}!</h1>
            <p>Vocé é {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;