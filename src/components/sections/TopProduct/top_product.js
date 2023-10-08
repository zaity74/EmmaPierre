import React from 'react';
import '../section.css';
import '../TopProduct/top_product.css'
import { Link } from 'react-router-dom';
import TopProductCard from "../../Card/top-product-card";
import GeneralSection from "../sections";

// Redux import 
import { listeProduit } from '../../../redux/actions/productAction';

// Hooks
import { useState, useEffect } from 'react';

import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai";

function TopProduct(props){
    // State 
    const [isSlide, setIsSlide] = useState(true);
    const [slideCount, setSlideCount] = useState(0);

    // New constante
    const max_length = 3;
    const produit = [
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

      // Page load
      useEffect(() => {
      }, []);

    //Function 
    const slideRight = () => {
            if(slideCount < max_length - 1){
                var newSlideCount = slideCount + 1;
                setSlideCount(newSlideCount)
            }else{
                setSlideCount(slideCount)
            }
    }

    const slideLeft = () => {
            if(slideCount > 0){
                var newSlideCount = slideCount - 1;
                setSlideCount(newSlideCount)
            }else{
                setSlideCount(slideCount)
            }
    }


    return(
        <>
            <GeneralSection 
                sectionSeparator={true} 
                tag={'Nouveaute'} 
                title={'Nos tops produits'} 
                text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}>
                <div className="slide">
                    <div className="slide-container" style={{right: (slideCount * 100) + '%'}}>
                        <TopProductCard produit={produit} />
                    </div>
                    <div className="arrows-container">
                        <AiOutlineLeft className="i arr_left" onClick={slideLeft} />
                        <AiOutlineRight className="i arr_right" onClick={slideRight}  />
                    </div>
                </div>
                <Link className="btnProduct" to="/boutique">Voir plus</Link>
            </GeneralSection>
        </>
    )

}

export default TopProduct;

