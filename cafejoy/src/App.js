import './App.css';
//import Card from './components/productCard/Card';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoodPage from './pages/FoodPage';
import Menu from './pages/Menu';
import ContectUs from './pages/ContectUs';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='FoodPage' element={<FoodPage />} />
        <Route path='Menu' element={<Menu />} />
        <Route path='Contact' element={<ContectUs />} />
      </Routes>


      {/* <Card /> */}
    </div>
  );
}

export default App;