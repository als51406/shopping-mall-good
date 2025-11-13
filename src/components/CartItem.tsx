const CartItem = () => {
  return (
    <div className="cart-item">
      <img src="placeholder.jpg" alt="Product" />
      <h3>Product Name</h3>
      <p>$10.00</p>
      <input type="number" defaultValue={1} />
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
