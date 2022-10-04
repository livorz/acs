import './App.css';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Header from './components/header/Header.jsx'
import UttLogo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Posts from './components/dashboard/Posts'


function App() {

  return (
    <div className="App">

        <Dashboard/>
        <div className="container">
          <Posts />
        </div>
    </div>
  );
}

export default App;
