import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../components/Card/panier.css'

// Redux Import

function Favoris(props) {
  
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

  const { favorisItem } = useSelector((state) => state.listeFavoris);
  const dispatch = useDispatch();

  

  return (
    <div className="panier_section">
      <div className='panier_container container'>
      {favorisItem.length === 0 ? (
        <h1>Votre panier est vide</h1>
      ) :  (
        <>
          {favorisItem.map((item) => (
            <div className='cart_element' key={item.id}>
              <img src={item.image} alt='bijoux' />
              <h1>{item.name}</h1>
              <p className='el_price'>Prix : {item.price}€</p>
            </div>
          ))}
        </>
      )}
      </div>
    </div>
  );
}
  
  export default Favoris