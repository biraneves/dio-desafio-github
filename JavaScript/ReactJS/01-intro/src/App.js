import './App.css';

function sum(a, b) {
  return a + b;
}

function primeiroJSX() {
  return (
    <h1>Ubirajara Neves - {sum(2, 3)}</h1>
  );
}

function App() {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  );
}

export default App;
