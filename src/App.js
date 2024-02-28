
import './App.css';
import { Navbar } from './Cpmponets/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/Cart';
import Footer from './Cpmponets/Footer/Footer';
import men_banner from './Cpmponets/assets/banner_mens.png'
import women_banner from './Cpmponets/assets/banner_women.png'
import kids_banner from './Cpmponets/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
          
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
