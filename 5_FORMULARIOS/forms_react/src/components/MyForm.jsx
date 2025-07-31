import {useState} from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    //Controlled inputs

    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState()
    const [role, setRole] = useState()
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulário")
        console.log("Nome: "+ name, "E-mail: "+ email, "Bio: "+ bio, "Função: "+ role)

        //limpar form
        setName("")
        setEmail("")
        setBio("")
    }

  return (
    <div>
        {/* Criação do form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName}
                value={name} />
            </div>
            {/* Label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* Simplificando a manipulação de state */}
                <input type="email" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value) }
                value={email} />
            </label>
            {/* textarea */}
            <label htmlFor="">
                <span>Bio:</span>
                <textarea 
                name="bio" 
                placeholder='Descrição do usuário' 
                onChange={(e) => setBio(e.target.value)} 
                value={bio}>

                </textarea>
            </label>
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm