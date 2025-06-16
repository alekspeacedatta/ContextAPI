import { useTheme } from "../contexts/ThemeContext"
import ProductItems from "./ProductItems";
const MainSec = () => {
    const { theme, textColor } = useTheme();
    return (
        <main style={{
            background: theme,
            color: textColor
        }}>
            <ProductItems/>
        </main>
    )
}
export default MainSec