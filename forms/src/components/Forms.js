import './Forms.css'

const Forms = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="nome">
                    Nome:
                </label>
                <input type="text" name="name" placeholder="Digite seu nome." />
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Forms