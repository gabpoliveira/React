import {useState} from 'react';

const ListRender = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "Gabriel", age: 25},
        {id: 2, name: "João", age: 30},
        {id: 3, name: "Maria", age: 22},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers ((prevUsers) => {
            
            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    } //previous state

    return(
        <div>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
            <button onClick ={deleteRandom}>Deletar Usuário</button>
        </div>
    )
}

export default ListRender;