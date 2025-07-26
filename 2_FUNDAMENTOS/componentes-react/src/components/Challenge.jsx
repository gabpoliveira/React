import { useState } from 'react'
const Challenge = () => {
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    const [resultado, setResultado] = useState(null)
    const soma = Number(valor1) + parseInt(valor2)

    return(
        <div className="challenge">
            
            <h2>Somador-Desafio 2</h2>
            
            <input
            type="number"
            value={valor1}
            onChange={e => setValor1(e.target.value)}
            placeholder="Primeiro valor"
            />

            <input
            type="number"
            value={valor2}
            onChange={e => setValor2(e.target.value)}
            placeholder="Segundo valor"
            style={{ marginLeft: '1rem' }}
            />
            
            <div style={{ marginTop: '1rem' }}>
                 <button onClick={()=> alert("A soma é " + soma)}>Soma</button>
            </div>

        </div>
    )
}

export default Challenge;