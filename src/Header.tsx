import { useTheme } from "./ThemeContext";
import Cart from "./Cart";
const Header = () => {

    const {theme, textColor, toggleTheme} = useTheme();

    return (
        <header style={{
            backgroundColor: theme,
            color: textColor
        }}>
            <h1>
                This is the project Header
            </h1>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <Cart/>
        </header>
    )
}
export default Header