import { useState } from "react"
import { useProduct } from "./ProductContext";
import { useTheme } from "./ThemeContext";
const Product = ({product}) => {

    const {addToCart, removeFromCart} = useProduct();
    const {textColor} = useTheme();
    const [isInCart, setIsInCart] = useState(false);

    const handleCartAction = () => {
        if(isInCart){
            removeFromCart(product);
            setIsInCart(false);
        } else {
            addToCart(product);
            setIsInCart(true);
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
                {isInCart ? "remove from cart" : "add to cart"}
            </button>
        </div>
    )
}
export default Product