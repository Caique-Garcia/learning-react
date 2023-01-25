import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const pessoas = [
    {
      id:1,
      name:"Caique",
      age:29,
      prof:"Suporte"
    },
    {
      id:2,
      name:"Caio",
      age:23,
      prof:"Enfermeiro"
    },
    {
      id:3,
      name:"João",
      age:17,
      prof:"Assaltante"
    },
    {
      id:4,
      name:"Lurdes",
      age:67,
      prof:"Caminhoneira"
    }
  ]

  return (
    <div className="App">
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} name={pessoa.name} age={pessoa.age} prof={pessoa.prof} />
      ))}
    </div>
  );
}

export default App;
