import type { Product } from '../types';
import './ProductCardNormal.css'

interface ProductCardProps {
  product: Product;
}

const ProductCardNormal = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card-normal">
      <img className='pcn-img-box' src={product.image || 'images/item1.jpg'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCardNormal;
