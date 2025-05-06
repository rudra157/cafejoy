import './App.css';
//import Card from './components/productCard/Card';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoodPage from './pages/FoodPage';
import Menu from './pages/Menu';
import ContectUs from './pages/ContectUs';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>        
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='FoodPage' element={<FoodPage />} />
        <Route path='Menu' element={<Menu />} />
        <Route path='Contact' element={<ContectUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


      { /*<Card /> */}
    </div>
  );
}

export default App;