import { useProduct } from "../contexts/ProductContext";
import { useTheme } from "../contexts/ThemeContext";
const Product = ({product}) => {

    const {cartItems, addToCart, removeFromCart} = useProduct();
    const {textColor} = useTheme();

    const isInCart = cartItems.some(item => item.id === product.id)

    const handleCartAction = () => {
        if(isInCart){
            removeFromCart(product);
        } else {
            addToCart(product);
        }   
    }
    return (
        <div className="product" style={{borderColor: textColor}}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>price: ${product.price}</span>
            <button
                onClick={handleCartAction}
                style={{
                    background: isInCart ? "red" : 'green'
                }}
            >
                {isInCart  ? "remove from cart" : "add to cart"}
            </button>
        </div>
    )
}
export default Product