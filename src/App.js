import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact  path="/" element={<ItemListContainer greeting="Tienda"/>}  />
        <Route exact path="/category/:id" element={<ItemListContainer greeting ="Tienda"/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
