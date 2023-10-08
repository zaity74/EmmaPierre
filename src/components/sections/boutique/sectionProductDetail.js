import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// REDUX IMPORT
import { addToCart } from '../../../redux/actions/cartActions';
import { listFavoris } from '../../../redux/actions/productAction';


function SectionProductDetails(props) {
// PROPS
const { 
    image, 
    productName, 
    price, 
    description, 
    id, 
    slug,
    photos,
    rating,
    numReviews, 
    qty, 
    setQty
    } = props

// STATE
const [isLiked, setIsLiked] = useState(false);

// NEW VARIABLES
const dispatch = useDispatch();

// LOAD PAGE
useEffect(() => {
    setIsLiked(true);
  }, [slug]);



return (
<>
    <div class="box-image-container">
        <img src={image} />
        <div className='addImg'>
            {
                (
                    photos && photos.map((x) => {
                      const {
                        src
                      } = x;
                      return (
                        <img className='addImgBox' src={src} alt='bijoux de luxe' />
                      );
                    })
                  )
            }
        </div>
    </div>
    <div class="text">
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>Note user : {rating}</p>
        <p>Nombre de review : {numReviews}</p>
        <div className="add-to-cart">
            <button className="btn-add-to-cart" >
                Ajouter au panier
            </button>
            <select
                value={qty}
                onChange={setQty}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                {/* Ajoutez d'autres options selon vos besoins */}
            </select>
            <button 
            className="Like" 
            style={isLiked ? { backgroundColor: 'red' } : {}}>
                Like
            </button>
        </div>
    </div>
</>
);
}

export default SectionProductDetails;