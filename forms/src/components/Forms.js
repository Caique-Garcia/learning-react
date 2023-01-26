import './Forms.css'
import {useState} from 'react'

const Forms = ({user}) => {
/*
No useState(user ? user.name : '') o progrmaa verificara se existe o
parametro "user" se sim ele utiliza o user.name se não ele sera vazio
*/
const [name, setName] = useState(user ? user.name : '')
const [email, setEmail] = useState(user ? user.email : '')
const [bio, setBio] = useState("")
const [role,setRole] = useState(user ? user.role : '')
/*
Função que pega o carctere digitado cada vez que à uma mudança no input
Parametro e recebe o objeto implicito event e o método targt seleceiona o campo
enquanto o value tras o valor do campo 
*/

const handleName = (e) => 
{
    setName(e.target.value)
};


 //Função que vai enviar o formulario
const handleSubmit = (e) =>
{
    //Cancela o efeito de recarregamento da maquina
    e.preventDefault();
    console.log('Eniando formulario...')
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)

    //Limpando formulario
    setName("")
    setEmail("")
};
  return (
    <div>
        <h1>Formulários</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">
                    Nome:
                </label>
                <input type="text" name="name" placeholder="Digite seu nome." onChange={handleName} value={name} />
            </div>
            {/*Label envolvendo input */}
            <label>
                <span>Função</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="usuario">Usuário</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu e-mail." onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Bio:</span>
                <textarea name="bio" cols="30" rows="10" placeholder="Escreva uma bio:" onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Forms