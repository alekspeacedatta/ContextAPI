import {createContext, useState, type ReactNode, useContext} from "react";
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
}
interface ProductContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    removeAll: () => void;
    cartCount: number;
    totalAmount: number;
}
export const ProducContext = createContext<ProductContextType | undefined>(undefined);
export const ProductProvider = ({children}: {children:ReactNode}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product: Product) => {    
        setCartItems(prevItems => [...prevItems, product]);
        setCartCount(prev => prev + 1);
        setTotalAmount(prev => prev + product.price)
    } 

    const removeFromCart = (product: Product) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
        setCartCount(prev => prev - 1);
        setTotalAmount(prev => prev - product.price)
    }
    const removeAll = () => {
        setCartItems([]);
        setCartCount(0);
        setTotalAmount(0);
    }
    return (
        <ProducContext.Provider value={{cartItems, totalAmount, cartCount, addToCart, removeFromCart, removeAll}}>
            {children}
        </ProducContext.Provider>
    )
}
export const useProduct = () => {
    
    const context = useContext(ProducContext);
    if(!context) throw new Error("error, context is not created");
    
    return context;
}