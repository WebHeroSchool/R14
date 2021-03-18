import logo from './logo.svg';
import './App.css';
import { count, length } from './numbers'

const number = 34;
const text = 'Keep on going';
const item = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
          color: 'blue'
        }}>
          Hello World!
        </p>
        <p>
          { count * length }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
