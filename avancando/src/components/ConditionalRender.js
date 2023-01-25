import {useState} from 'react'

const ConditionalRender = () => {

  const [name] = useState('Caique')

 /*Usando operador ternario para condicionar rederização ou não de um elemento*/
  return (
    <div>
        {name === 'João' ? (
            <h1>Olá {name}. Seja bem vindo!</h1>
        ) : (
            <h1>Você não é o João!</h1>
        )};
    </div>
  )
}

export default ConditionalRender