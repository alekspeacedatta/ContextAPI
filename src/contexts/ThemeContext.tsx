import { useContext, useState, ReactNode, createContext } from "react"

type Theme = 'white' | 'black';
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
    const [textColor, setTextColor] = useState<Theme>('black');
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'white' ? 'black' : 'white'));
        setTextColor((prev) => (prev === 'black' ? 'white' : 'black'));
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