import { useProduct } from "../contexts/ProductContext"
import { useTheme } from "../contexts/ThemeContext";
const SideCartPanel = () => {
    const { cartItems, removeAll }  = useProduct();
    const { isSlided, textColor, theme } = useTheme();
    return (
        <div className="cart-side-panel" style={{marginLeft: `${isSlided}px`, background: theme, color: textColor, borderColor: textColor}}>
            <h2>
                side cart panel
            </h2>
            <div className="added-products-container" style={{borderColor: textColor}}>
                {cartItems.map(item => (
                    <div className="cart-product">
                        <h4>name: {item.name}</h4>
                        <p>{item.description}</p>
                        <span>${item.price}</span>
                    </div>
                ))}
            </div>
            <button onClick={removeAll}>Remove All</button>
        </div>
    )
}
export default SideCartPanel