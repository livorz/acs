import './App.css';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Header from './components/header/Header.jsx'
import UttLogo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LineChart from './components/dashboard/LineChart';


function App() {

  return (
    <div className="App">
        
        <Dashboard/>
    </div>
  );
}

export default App;
