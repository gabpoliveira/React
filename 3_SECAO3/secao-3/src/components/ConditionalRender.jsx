import { useState } from 'react'

const ConditionalRender = () => {
    
    const [y, setState] = useState(false);

    return(
        <div>
            <h2>Renderização Condicional</h2>
            <button onClick = {() => setState(true)}>Mostar parágrafo</button>
            <button onClick = {() => setState(false)}>Ocultar parágrafo</button>
            {y && <p>Y = TRUE, parágrafo exibido</p>}
        </div>
    )
};

export default ConditionalRender;