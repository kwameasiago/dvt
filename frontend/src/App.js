import {useEffect} from 'react'
import logo from './logo.svg';
import api from './Api'
import './App.css';

function App() {
  useEffect(() => {
    api.get('/artist/27')
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edits <code>src/App.js</code> and save to reloadsss
        </p>
      </header>
    </div>
  );
}

export default App;
