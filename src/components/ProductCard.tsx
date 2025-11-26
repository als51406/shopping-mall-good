import { Link } from 'react-router-dom';
import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  discount?: number;
}

const ProductCard = ({ product, discount = 20 }: ProductCardProps) => {
  const originalPrice = product.price;
  const discountedPrice = Math.floor(originalPrice * (1 - discount / 100));

  return (
    <Link to={`/products/${product.id}`} className="product-card-large-link">
      <div className="product-card-large">
        <div className="pc-image-container">
          <img src={product.image || '/images/item1.jpeg'} alt={product.name} />
          <span className="pc-discount-badge">{discount}%</span>
        </div>
        <div className="pc-info">
          <h3 className="pc-title">{product.name}</h3>
          <p className="pc-description">{product.description || '맛있는 음식을 만나보세요'}</p>
          <div className="pc-price-wrapper">
            <span className="pc-price-sale">{discountedPrice.toLocaleString()}원</span>
            <span className="pc-price-original">{originalPrice.toLocaleString()}원</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
