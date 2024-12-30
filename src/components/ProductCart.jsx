import { Button, Image } from 'react-bootstrap'
import '../styles/ProductCard.css'
import { useCartContext } from '../utils/context/CartContext';

const ProductCart = ({id, image, title, price}) => {
    const { removeFromCart } = useCartContext();

    const removeProduct = () => {
        removeFromCart(id)
    }
    return (
        <div className='product-card'>
            <Image src={image} />
            <h3>{title}</h3>
            <h4>{price}</h4>
            <Button onClick={removeProduct}>Delete</Button>
        </div>
    );
}

export default ProductCart