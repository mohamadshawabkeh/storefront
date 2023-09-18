import Header from '../Header/header';
import Categories from '../categories/categories';
import Products from '../products/products';
import Footer from '../footer/footer'; 

const Storefront = () => {
  return (
    <div className="storefront">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Storefront;
