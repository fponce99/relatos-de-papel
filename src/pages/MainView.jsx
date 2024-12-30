import { Header } from '../components/header'
import { Content } from '../components/Content'
import { Cart } from '../components/Cart'
import '../styles/MainView.css'
import { SearchProvider } from '../utils/context/SearchContext'
import { CartProvider } from '../utils/context/CartContext';
import { ProductSelectedProvider } from '../utils/context/ProductSelectedContext';

function MainView() {
  return (
    <>
      <SearchProvider>
        <CartProvider>
          <ProductSelectedProvider>
            <Header />
            <div className='content-container'>
              <Content />
              <Cart />
            </div>
          </ProductSelectedProvider>
        </CartProvider>
      </SearchProvider>
    </>
  )
}

export default MainView;
