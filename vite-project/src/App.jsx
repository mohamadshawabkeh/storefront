import { Routes,Route } from 'react-router-dom';
import Header from './assets/components/Header/header';
import Footer from './assets/components/footer/footer';
import ProductDetails from './assets/components/productDetails/productDetails';
import Categories from './assets/components/categories/categories';
import Products from './assets/components/products/products';
import { Provider } from 'react-redux';
import store from './assets/store/index';
// import ShoppingCart from './assets/components/ShoppingCart/shoppingCart';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
          <Header />
          <div className="content">
            <Categories />
            <Products />
            <Routes>
              <Route path="/products/:productId" element={<ProductDetails />} />
              {/* <Route path="/cart" element={<ShoppingCart />} />  */}
            </Routes>
          </div>
          <Footer />
      </Provider>
    </div>
  );
}

export default App;
