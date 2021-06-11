import { useRef } from 'react';

import './App.css';
import { sum } from './helpers/calculator';

function App() {
  const number1 = useRef(null);
  const number2 = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log('submit');
    sum(number1, number2);
    // console.log('submit');
  }

  return (
    <div className="App">
      <form onSubmit={(event) => submitHandler(event)}> 
        <div>
          <label htmlFor="number1">Número 1</label>
          <input type="number" name="number1" id="number1" placeholder="Insira o primeiro número" ref={number1} required />
        </div>
        <div>
          <label htmlFor="number2">Número 2</label>
          <input type="number" name="number2" id="number2" placeholder="Insira o segundo número" ref={number2} required />
        </div>
        <div>
          <button>Somar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
