import styles from "./CarDetails.module.css"

const CarDetails = ({marca,modelo,cor,ano}) => {
  return (
    <div className = {styles.showCarDetails}>
        <h3> {modelo} </h3>
        <ul>
            <li>
                <h3>Marca:</h3> {marca}
            </li>
            <li>
                <h3>Cor:</h3> {cor}
            </li>
            <li>
                <h3>Ano:</h3> {ano}
            </li>
        </ul>        
    </div>
  )
}

export default CarDetails