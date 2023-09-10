import Header from './assets/components/Header/header';
import Footer from './assets/components/footer/footer';
import Categories from './assets/components/categories/catergories';
import Products from './assets/components/products/products';
import { Provider } from 'react-redux';
import store from './assets/store/index';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Provider store={store}>
        <div className="content">
          <Categories />
          <Products />
        </div>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
