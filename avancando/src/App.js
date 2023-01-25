import Fragment from './components/Fragment';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = 'Caique';

  const cars = [
    {id:1, brand:'Ferrari', color:'Amarelo', km:0},
    {id:2, brand:'Ford', color:'Prata',  km:80000},
    {id:3, brand:'Nissan', color:'Azul', km:0}    
  ]

  function showMsg () {
    console.log('Evento do componente pai!')
  };

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props - Passando Objeto name para o componente*/}
      <ShowUserName name={name}/>
      {/*Desestruturando Props*/}
      <CarDetails brand='VW' km={80000} color='Branco'/>
      {/*Reaproveitando dados */}
      <CarDetails  brand='Fiat' color='Preto' km ={0}/>
      <CarDetails brand='Ford' color='vermelho' km ={30000}/>
      {/*Loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km ={car.km}/>
      ))}
      {/*Fragment*/}
      <Fragment/>

      {/*Children*/}      
      <Container myValue='Testando Props'>
        <p>E este é o conteudo!</p>
      </Container>

      {/*Executar função */}
      <ExecuteFunction myFunction={showMsg}/>

      {/*State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />


    </div>
  );
}

export default App;
