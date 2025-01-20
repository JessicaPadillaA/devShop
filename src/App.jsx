
import './App.css'
import { UserProvider } from './Common/UserContext'
import { Route, Routes } from 'react-router-dom'
import HeaderPage from './Common/Header'
import LoginPage from './Login/Login'
import ProductsPage from './Products/Products'
import DressPage from './Products/Dress'
import ShirtPage from './Products/Shirt'
import CartPage from './Cart/CartPage'
import SkirtPage from './Products/Skirt'
import PantsPage from './Products/Pants'
import PedidosPage from './Pedidos/Pedidos'
import { ProductProvider } from './Products/ProductContext'
import FooterPage from './Common/Footer'


function App() {
  return (
    <UserProvider>
      <ProductProvider>

      
      <div>
        <HeaderPage />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/dress' element={<DressPage />} />
          <Route path='/shirt' element={<ShirtPage />} />
          <Route path='/skirt' element={<SkirtPage />} />
          <Route path='/pants' element={<PantsPage />} />
          <Route path='/pedidos' element={<PedidosPage/>}/>
        </Routes>
        <FooterPage />
      </div>
      </ProductProvider>
    </UserProvider>
  )
}
export default App
