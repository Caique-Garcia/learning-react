import './Forms.css'
import {useState} from 'react'

const Forms = ({user}) => {
/*
No useState(user ? user.name : '') o progrmaa verificara se existe o
parametro "user" se sim ele utiliza o user.name se não ele sera vazio
*/
const [name, setName] = useState(user ? user.name : '')
const [email, setEmail] = useState(user ? user.email : '')
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
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu e-mail." onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Forms