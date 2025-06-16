import React, {useContext} from "react"
import { ThemeContext } from './ThemeContext'
const ThemeToggle = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("errorrr hehee");
    
    const { theme, toggleTheme } = context;

    return (
        <button onClick={toggleTheme}>
            current theme: {theme} (Click to change)
        </button>
    )
}
export default ThemeToggle