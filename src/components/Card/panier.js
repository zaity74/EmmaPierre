import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { removeCart } from '../../redux/actions/cartActions';
import './panier.css'

function Panier(props) {
  
/*  const { slug } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const qty = searchParams.get("qty") ? Number(searchParams.get("qty")) : 1; // Ajout de la valeur 
  const dispatch = useDispatch();
  const existingQty = localStorage.getItem(slug);
  useEffect(() => {
    if(slug ){
      dispatch(addToCart(slug, existingQty ? Number(existingQty) : qty ));
    }
}, [dispatch, slug, qty] )*/

  // STATE 
  const [quantities, setQuantities] = useState({});

  // NEW VARIABLES
  const cartItems = useSelector((state) => state.addToCart.cartItems);
  const dispatch = useDispatch();
  
  
  const removeItemFromCart = (id) => {
    dispatch(removeCart(id));
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
  };
  

  const checkoutHandler = () => {
    window.location.href = '/Connexion?redirect=shipping';
  };

  return (
    <div className="panier_section">
      <div className='panier_container container'>
      {cartItems.length === 0 ? (
        <h1>Votre panier est vide</h1>
      ) :  (
        <>
          {cartItems.map((item) => (
            <div className='cart_element' key={item.id}>
              <img src={item.image} alt='bijoux' />
              <h1>{item.name}</h1>
              <p className='el_price'>Prix : {item.price}€</p>
              <p className='el_qty'>Quantité :
                <select
                  value={quantities[item.id] || item.qty}
                  onChange={(e) => {
                    const updatedQuantities = { ...quantities, [item.id]: parseInt(e.target.value) };
                    setQuantities(updatedQuantities);
                  }}
                >
                  {Array.from({ length: 10 }, (_, index) => index + 1).map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>
              </p>
              <button className='el_btn' onClick={() => removeItemFromCart(item.id)}>Remove Item</button>
            </div>
          ))}
          <h2>Total Price : € {cartItems.reduce((acc, item) => acc + (quantities[item.id] || item.qty) * item.price, 0 ).toFixed(2)}</h2>

          <button type='button' disabled={cartItems.length === 0} onClick={checkoutHandler}>Proceed Checkout</button>
        </>
      )}
      </div>
    </div>
  );
}
  
  export default Panier