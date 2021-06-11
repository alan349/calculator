// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="number1">Número 1</label>
          <input type="number" name="number1" id="number1" placeholder="Insira o primeiro número" required />
        </div>
        <div>
          <label htmlFor="number2">Número 2</label>
          <input type="number" name="number2" id="number2" placeholder="Insira o segundo número" required />
        </div>
        <div>
          <button>Somar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
