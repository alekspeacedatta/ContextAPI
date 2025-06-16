import { useContext, useState, ReactNode, createContext } from "react"

type Theme = 'white' | 'black';
interface ThemeContextType {
    textColor: Theme;
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children} : {children:ReactNode}) => {

    const [theme, setTheme] = useState<Theme>('white');
    const [textColor, setTextColor] = useState<Theme>('black');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'white' ? 'black' : 'white'));
        setTextColor((prev) => (prev === 'black' ? 'white' : 'black'));
    }

    return (
        <ThemeContext.Provider value={{theme, textColor, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("error, context is not created");
    
    return context;
}