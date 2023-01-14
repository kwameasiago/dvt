import { Fragment } from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Fragment>
      <div className="container-wrapper">
        <Navbar />
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
