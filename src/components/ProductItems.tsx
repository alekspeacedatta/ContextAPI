import Product from "./Product"
import { useTheme } from "../contexts/ThemeContext";
const products = [
    {
        id: 1,
        name: 'laptop',
        description: 'good laptop by lenovo',
        price: 3200,
        image: "./images/photo1.jpeg"
    },
    {
        id: 2,
        name: 'smartphone',
        description: 'new choise from apple',
        price: 2999,
        image: "./images/photo2.jpeg"
    },
    {
        id: 3,
        name: 'fridge',
        description: 'LG frigde freezs everything',
        price: 5000,
        image: "./images/photo3.jpeg"
    },
]
const ProductItems = () => {
    const {textColor} = useTheme();
    return (
        <div className="products-container" style={{borderColor: textColor}}>    
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default ProductItems