
import './App.css';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Forms user={{name: "Caique Ferreira", email: "caique.garciatst@gmail.com", role:"admin"}} />
    </div>
  );
}

export default App;
