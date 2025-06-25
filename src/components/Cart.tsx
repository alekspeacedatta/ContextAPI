import { type ReactNode } from "react"
import { useProduct } from "../contexts/ProductContext"
import { useTheme } from "../contexts/ThemeContext";
const Cart = () => {
    
    const {cartCount} = useProduct();
    const { cartClick } = useTheme();
    const handleCartClick = () => {
        cartClick();
    }
    return (
        <div className="cart" onClick={handleCartClick}>Cart {cartCount as ReactNode}</div>
    )
}
export default Cart