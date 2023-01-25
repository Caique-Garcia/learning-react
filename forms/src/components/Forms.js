import './Forms.css'

const Forms = () => {
  return (
    <div>
        <h1>Formulários</h1>
        <form>
            <div>
                <label htmlFor="nome">
                    Nome:
                </label>
                <input type="text" name="name" placeholder="Digite seu nome." />
            </div>
            {/*Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu e-mail." />
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Forms