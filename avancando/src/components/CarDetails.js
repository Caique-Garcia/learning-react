

const CarDetails = ({id,brand, km, color}) => {
  return (
    <div>
      <h1>Detalhes do Carro</h1>
      <ul>
        <li key={id}>Marca: {brand} <br /> 
                     Km: {km} <br /> 
                     Cor: {color} <br />       
        </li>        
      </ul>
    </div>
  )
}

export default CarDetails