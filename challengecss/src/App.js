import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {
      id:1,
      marca: 'VW',
      modelo: 'Gol',
      cor: 'Preto',
      ano: 2011
    },
    {
      id:2,
      marca: 'VW',
      modelo: 'Voyage',
      cor: 'Prata',
      ano: 2018
    },
    {
      id:3,
      marca: 'Ford',
      modelo: 'Ka',
      cor: 'Branco',
      ano: 2020
    },
    {
      id:4,
      marca: 'VW',
      modelo: 'Fox',
      cor: 'Vermelho',
      ano: 2020
    },
    {
      id:5,
      marca: 'Nissan',
      modelo: 'Skyline',
      cor: 'Azul',
      ano: 2008
    }
  ]

  return (
    <div className="App">
      <div className="showCars">
      {cars.map((car)=>(
        <CarDetails key={car.id} marca={car.marca} modelo={car.modelo} cor={car.cor} ano={car.ano} />
      ))}
      </div>
    </div>
  );
}

export default App;
