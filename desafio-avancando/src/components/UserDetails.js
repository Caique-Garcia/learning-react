

const UserDetails = ({name,age,prof}) => {
  return (
    <div>
        <ul>
            <li>Nome: {name} </li>
            <li>Idade: {age} </li>
            <li>Profissão: {prof} </li>
            {
                age >= 18 ? (<li>{name} já pode tirar carteira de motorista!</li>) : 
                (<li>{name} não pode tirar carteira de motorista!</li>)
            }
        </ul>
    </div>
  )
}

export default UserDetails