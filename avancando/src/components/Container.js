
const Container = ({children,myValue}) => {
  return (
    <div>
        <h2>Este é o componente Container.</h2>
        {children}
        <p>O valor da props é: {myValue}</p>
    </div>
  )
}

export default Container