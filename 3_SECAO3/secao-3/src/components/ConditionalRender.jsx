import { useState } from 'react'

const ConditionalRender = () => {
    
    const [y, setState] = useState(false);

    const [name, setName] = useState("Gabriel")

    return(
        <div>
            <div>
                <h2>Renderização Condicional</h2>
                <button onClick = {() => setState(true)}>Mostar parágrafo</button>
                <button onClick = {() => setState(false)}>Ocultar parágrafo</button>
                {y && <p>Y = TRUE, parágrafo exibido</p>}
            </div>
            <div>
                <h2>IF TERNÁRIO</h2>
                
                {name === "Gabriel" ? (
                    <div>
                        <p>Olá Gabriel!</p>
                    </div>
                ) : (
                    <div>
                        <p>Nome não encontrado</p>
                    </div>
                )}
                <div>
                    <button onClick={() => setName("João")}>Clique aqui</button>
                </div>
            </div>
        </div>
    )
};

export default ConditionalRender;