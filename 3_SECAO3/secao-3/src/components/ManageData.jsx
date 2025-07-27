import { useState } from 'react';

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(0);

    return(
        <div>
            <p>Valor: {number}</p>
            <button onClick ={() => setNumber(15)}>Mudar Variável</button>
        </div>
    )
}

export default ManageData;