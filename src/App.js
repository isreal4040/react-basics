
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Jacob" />
      <Greet name="Afua"/>
      <Greet name="Kofi"/>
      <Welcome /> 
    </div>
  );
}

export default App;
