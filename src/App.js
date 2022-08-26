import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Tienda" />
    </div>
  );
}

export default App;
