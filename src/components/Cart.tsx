import { useContext, type ReactNode } from "react"
import { useProduct } from "../contexts/ProductContext"
const Cart = () => {
    
    const {cartCount} = useProduct();
    return (
    <div className="cart">Cart {cartCount as ReactNode}</div>
    )
}
export default Cart