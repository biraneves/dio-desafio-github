import './App.css';
import Button from './Button';

function sum(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className="App">
      <Button name="Botão" onClick={() => sum(10, 20)} />
    </div>
  );
}

export default App;
