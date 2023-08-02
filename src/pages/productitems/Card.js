import React,{useState} from "react";
import CartaPage from "../Cartapage";

const Card = ({ title, img, desc, price,isVisible  }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCartClick = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true);
  };
  const handleCartClose = () => {
    setShowCart(false);
  };

  return (
    <div className={`card ${isVisible ? 'visible' : ''}`}>
      <img className="card-img" src={img} />
      <h3> {title}</h3>
      <span>${price}</span>
      <p>{desc}</p>
      <div className="card-btns">
        {" "}
        <button onClick={() => handleAddToCartClick({title, price })}>Add to Cart</button>
           </div>
           <CartaPage isVisible={showCart} onClose={handleCartClose} cartItems={cartItems} />   
    </div>
  );
};

export default Card;
