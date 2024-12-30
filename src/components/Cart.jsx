import { useCartContext } from '../utils/context/CartContext';
import ProductCart from './ProductCart';
import '../styles/Cart.css'

const Cart = () => {
    const { cart, getTotalPrice } = useCartContext();

    return (
        <div className='cart'>
            <h2>Carrito </h2>
            {
                cart.map((product, index) => {
                    return (
                        <ProductCart
                            key={index}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    )
                })
            }
            <h3>Total: ${getTotalPrice()}</h3>
        </div>
    );
};

export {Cart}