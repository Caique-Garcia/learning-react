//importando Hook useState
import {useState} from 'react'

const ManageData = () => {
    let someData = 10;

    //usando hook useSate
    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor = {someData}</p>
            <button onClick={() => (someData = 15)}>Alterar</button>
        </div>
        <div>
            <p>Valor = {number}</p>
            <button onClick={() => (setNumber(25))}>Alterar</button>
        </div>
    </div>
  )
}

export default ManageData;