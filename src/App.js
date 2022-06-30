import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbaar from './components/Navbaar';
import Register from './components/Register';



function App() {
  return (
    <div className="App">
      <Navbaar />
      <Register />
    </div>
  );
}

export default App;
