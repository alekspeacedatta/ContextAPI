import {createContext, useState, ReactNode, useContext} from "react";
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
}
interface ProductContextType {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    cartCount: number;
    totalAmount: number;
}
export const ProducContext = createContext<ProductContextType | undefined>(undefined);
export const ProductProvider = ({children}: {children:ReactNode}) => {

    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product: Product) => {    
        setCartCount(prev => prev + 1);
        setTotalAmount(prev => prev + product.price)
    } 

    const removeFromCart = (product: Product) => {
        setCartCount(prev => prev - 1);
        setTotalAmount(prev => prev - product.price)
    }
    
    return (
        <ProducContext.Provider value={{totalAmount, cartCount, addToCart, removeFromCart}}>
            {children}
        </ProducContext.Provider>
    )
}
export const useProduct = () => {
    const context = useContext(ProducContext);
    if(!context) throw new Error("error, context is not created");
    
    return context;
}