import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { PRODUCTS, FREE_GIFT, THRESHOLD } from "./data/products";
import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0);

      const subtotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      if (subtotal >= THRESHOLD && !updatedCart.some((item) => item.id === FREE_GIFT.id)) {
        return [...updatedCart, { ...FREE_GIFT, quantity: 1 }];
      } else if (subtotal < THRESHOLD) {
        return updatedCart.filter((item) => item.id !== FREE_GIFT.id);
      }
      return updatedCart;
    });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <Cart cart={cart} subtotal={subtotal} threshold={THRESHOLD} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;