import { useContext, useState, type ReactNode, createContext } from "react"

type Theme = 'white' | '#1b1b1b';
interface ThemeContextType {
    isSlided: number;
    textColor: Theme;
    theme: Theme;
    toggleTheme: () => void;
    cartClick: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children} : {children:ReactNode}) => {
    const [isSlided, setIsSlided] = useState(-325);
    const [theme, setTheme] = useState<Theme>('white');
    const [textColor, setTextColor] = useState<Theme>('#1b1b1b');
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'white' ? '#1b1b1b' : 'white'));
        setTextColor((prev) => (prev === '#1b1b1b' ? 'white' : '#1b1b1b'));
    }
    const cartClick = () => {
        setIsSlided((prev) => (prev === -325 ? 0 : -325));
    }
    return (
        <ThemeContext.Provider value={{isSlided, theme, textColor, toggleTheme, cartClick}}>
            {children}
        </ThemeContext.Provider>
    )
    
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("error, context is not created");
    
    return context;
}