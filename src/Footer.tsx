import { useTheme } from "./ThemeContext"
import { useProduct } from "./ProductContext";
const Footer = () => {
    
    const {totalAmount} = useProduct();
    const { theme, textColor} = useTheme();
    return (
        <footer style={{
            background: theme,
            color: textColor
        }}>
            <h2>
                hi this is the footer 
            </h2>
            <h2>total price: ${totalAmount}</h2>
        </footer>
    )
}
export default Footer