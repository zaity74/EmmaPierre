import React from "react";
import '../sections/section.css';
import '../sections/TopProduct/top_product.css';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { listeProduit } from "../../redux/actions/productAction";




function TopProductCard(props) {
  const { produit } = props;
  const dispatch = useDispatch();
  const { error, loading } = produit;


  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : produit.error ? (
        <h2>{error}</h2>
      ) : (
        produit.map((produit) => {
          const {
            _id,
            title,
            description,
            imageUrl,
            price,
            slug,
            long_title,
          } = produit;
          return (
            <Link 
            to={`/boutique/${slug}`}>
              <div className="slide-card" key={_id}>
                <div
                  className="card-img card"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <h3>{title}</h3>
                <div className="text-container">
                  <p className="paragraphe">{long_title}</p>
                  <div class="product_action">
                    <p>{price}€</p>
                    <Link to={`/`} className="btn">
                      Ajouter au panier
                    </Link>
                    
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
}

export default TopProductCard;