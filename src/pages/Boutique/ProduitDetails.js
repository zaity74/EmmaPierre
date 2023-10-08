import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import '../Boutique/ProduitDetails.css'

// REDUX IMPORT
import { produitDetails } from "../../redux/actions/productAction";
import { listViewedProduct } from "../../redux/actions/productAction";
import SectionProductDetails from "../../components/sections/boutique/sectionProductDetail";
import { userLogin } from "../../redux/actions/userAction";
import { userProductReview } from "../../redux/actions/reviewAction";
import { removeUserProductReview } from "../../redux/actions/reviewAction";

function ProductDetails() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  // STATE
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [numReviews, setNumReviews] = useState(0);

  //New VARIABLES
  const productDetails = [
    {
        '_id': 0,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/5a5cb4/2771005107/il_1588xN.2771005107_hewp.jpg',
        'price': '65,00',
        'slug': 'pierre-naturel',
        'long_title': 'Bracelet pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 1,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/25b9d7/2723294772/il_640xN.2723294772_c8pj.jpg',
        'price': '65,00',
        'slug': 'pierre-precieuse',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
        
    },
    {
        '_id': 2,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/e5917e/2723324266/il_640xN.2723324266_mzqf.jpg',
        'price': '65,00',
        'slug': 'pierre-rare',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 3,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/ae56d0/2771041573/il_640xN.2771041573_giau.jpg',
        'price': '65,00',
        'slug': 'pierre-bleu',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 4,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/1f955b/2723392400/il_640xN.2723392400_mfen.jpg',
        'price': '65,00',
        'slug': 'pierre-rouge',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 5,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/522e94/2761162499/il_640xN.2761162499_29ed.jpg',
        'price': '65,00',
        'slug': 'pierre-ecarlate',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 6,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/5cd8fb/2771045409/il_640xN.2771045409_fowu.jpg',
        'price': '65,00',
        'slug': 'pierre-brune',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 7,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/45c7b3/2749323885/il_640xN.2749323885_ns71.jpg',
        'price': '65,00',
        'slug': 'pierre-rose',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
    {
        '_id': 8,
        'title': 'Bijoux pierre naturel',
        'description': "Série Lotus d'Or : vous trouverez certainement la pièce qui vous accompagnera pendant très longtempsModèle Bali : Un ravissant ras-de-cou en perles d'opale rose et 1 de quartz (diamètre 6 mm) sur perles Miyuki dorées, les autres composants en plaqué or 24 carats, longueur environ de 34 à 42 cm, vous apportera douceur et sérénité.",
        'imageUrl': 'https://i.etsystatic.com/26337118/r/il/57e3c4/2713472946/il_640xN.2713472946_nibp.jpg',
        'price': '65,00',
        'slug': 'pierre-diamant',
        'long_title': 'Bijoux pierre naturel',
        'photos': [
          {
            'id': 0,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 1,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
          {
            'id': 2,
            'src': 'https://emma-pierre-demo.netlify.app/images/contact_banner.jpg'
          },
        ]
    },
  ]
  const { error, loading } = productDetails;
  const details = productDetails.find(product => product.slug === slug);
  
  

  useEffect(() => {

  }, [slug]);


  return (
    <>
      {
          details ? (
            <div class="detail_section">
              <div className="container detail-container">
                <div className="details">
                  <SectionProductDetails
                    image={details.imageUrl}
                    productName={details.title}
                    price={details.price}
                    description={details.description}
                    slug={slug}
                    qty={quantity}
                    setQty={(e) => setQuantity(parseInt(e.target.value))}
                    photos={details.photos}
                    rating={rating}  /* Vous devez remplacer rating avec la véritable valeur */
                    numReviews={numReviews}  /* Vous devez remplacer numReviews avec la véritable valeur */
                  />
                </div>
                <form  >
                <h2>Add a Review</h2>
                <>
                  <p>Please login
                  <Link to={'/connexion'}>
                    Login
                  </Link>
                  to write a review
                  </p>
                </>
        </form>
              </div>
            </div>
          ) : null
      }
    </>
  );
}

export default ProductDetails;

