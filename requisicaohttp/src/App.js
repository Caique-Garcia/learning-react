
import './App.css';
import {useState, useEffect} from 'react';

 //url da API
 const url = "http://localhost:3000/products";

function App() {

  //variavel que vai receber os produtos da requisição
  const [products, setProducts] = useState([]) ;

  //Variaveis para adição de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

 
  //resgatando dados por meio de chamada assincrona usando useEffect
  useEffect(() => {

    async function fetchData () {
    
    //resposta
    const res = await fetch(url);

    //transformando resposta de json em objeto js
    const data = await res.json();

    //passando dados para variavel
    setProducts(data);
    };

    //executando função asincrona
    fetchData();

  }, []);

  //adição de dados
  const handleSubmit = async (e) => {
    //cancelando animação de redenrização 
    e.preventDefault();

    //criando objeto que vai receber os dados que serão enviados
    /*
    quando o nome do atributo é o mesmo da variavel que ele vai receber o 
    valor eu posso emitir o atributo
    */
    const product = {
      name,
      price
    }

    console.log(product);

    const res = await fetch(url, {
      method:"POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    });


  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} > {product.name} - R$ {product.price} </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Salvar"/>
        </form>
      </div>
    </div>
  );
}

export default App;
