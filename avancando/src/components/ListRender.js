import {useState} from 'react'

const ListRender = () => {
    //usando useSate para atualizar o estado da variavel
    const [list] = useState(["Caique", "Valéria", "Caio", "Romeu"])
    //criando array de objetos 
    const [users, setUsers] = useState([
        {id: 1, name: "Caique", age:29},
        {id: 2, name: "Caio", age:24},
        {id: 3, name: "Rafel", age:22},
        {id: 4, name: "Rafaela", age:27},
    ]);

    //fazendo alterações na lista e alterando o estado 
    //Função para deletar item randomicamente
    const deleteRadom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        //setuser altera o estado da lista atual para a nova lista filtrada
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

  return (
    <div>
        <ul>
            {/*Usando .map para exibir uma lista de array */}
            {/*Passando indice como key do item */}
            {list.map((item,i) => (                
                <li key={i}>
                    <h1>{item}</h1>
                </li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <h1>Nome: {user.name} Idade: {user.age}</h1>
                </li>
            ))}
        </ul>
        <button onClick={deleteRadom}>Delete Random User</button>
    </div>
  )
}

export default ListRender