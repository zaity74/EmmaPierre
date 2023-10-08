import './boutique.css';
import TopProductCard from "../../components/Card/top-product-card";
import Pagination from '../../components/Pagination/pagination';

// Redux import 
import { listeProduit } from "../../redux/actions/productAction";
import { listeCategorie } from '../../redux/actions/categorieActions';
import { filterProductByCategorie } from '../../redux/actions/categorieActions';
import { orderByLowerPrice } from '../../redux/actions/productAction';
import { listViewedProduct } from '../../redux/actions/productAction';

// Hooks
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function Boutique(props) {
    // State
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isOrder, setIsOrder] = useState('ORDER');
    // New constantes

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
    const categorie  = [
      {
        'id': 0, 
        'image': 'https://i.etsystatic.com/26337118/r/il/19c397/2757101963/il_640xN.2757101963_rwdn.jpg', 
        'name': 'Ras de cou', 
        'slug': 'ras-de-cou'
      },
      {
        'id': 1, 
        'image': 'https://emmapierre.netlify.app/images/images/photo9.jpeg', 
        'name': "Boucle d'oreille", 
        'slug': "Boucle d'oreille "
      },
      {
        'id': 2, 
        'image': 'https://i.etsystatic.com/26337118/r/il/fe79ec/2761128425/il_640xN.2761128425_fke9.jpg', 
        'name': 'Sautoir', 
        'slug': 'Sautoir'
      },
      {
        'id': 3, 
        'image': 'https://i.etsystatic.com/26337118/r/il/074feb/2723246824/il_640xN.2723246824_ii76.jpg', 
        'name': 'Bracelet', 
        'slug': 'Bracelet'
      }
    ]
    const { error, loading } = categorie;
    const history = createBrowserHistory();
    const searchParams = new URLSearchParams(history.location.search);
    const pages = searchParams.get('page');
    const category = searchParams.get('categories');
    
  
    // Page load
    useEffect(() => {
        setFilteredProducts(produit);
      }, [dispatch, pages]);
      
  
    // Events
    const filterByCategory = (id, slug) => {
        // search params
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set('categories', slug, id);
        history.push({ search: searchParams.toString() });
      
        let filteredProds = produit.filter((prod) => prod.categories === id);
      
        switch (isOrder) {
          case 'ORDER_LOWER_PRICE':
            filteredProds = filteredProds.sort((a, b) => b.price - a.price);
            break;
          case 'ORDER_HIGHER_PRICE':
            filteredProds = filteredProds.sort((a, b) => a.price - b.price);
            break;
          default:
            break;
        }
      
        setFilteredProducts(filteredProds);
      };      
  
  
    // Variables
  
    const filter = (
        <>
            <li className="filtre-ligne" >Ras de cou</li>
            <li li className="filtre-ligne" >Boucle d'oreille</li>
            <li li className="filtre-ligne" >Sautoir</li>
            <li li className="filtre-ligne" >Bracelet</li>
        </>
    );

    const all_categories = categorie.map((cat) => {
        const { id, image, name, description, slug } = cat;
        return (
          <div
            className="image-box c1"
            style={{ backgroundImage: `url(${image})` }}
          >
            <p
              onClick={() => filterByCategory(id, slug)}
              className="title-categorie"
            >
              {name}
            </p>
          </div>
        );
      });
  
  
    return (
      <>
        <main>
          <div class="banner">
            <p class="signature-blog">Emma <br></br> <span>Pierre</span></p>
            <h1>BOUTIQUE</h1>
          </div>
          <section id="product-container">
            <div className="filtre">
              <h2>Items</h2>
              <ul className="filtre-container">
                {filter}
              </ul>
            </div>
  
            <div className="produit">
              <h2>Catégorie</h2>
              <div className="image-container">
                {loading ? (
                  <h2>Loading...</h2>
                ) : produit.error ? (
                  <h2>{error}</h2>
                ) : (
                  all_categories
                )}
              </div>
  
              <h2>{category ? category : 'Tous nos produits'}</h2>
              <div className="card-container">
                {filteredProducts.length > 0 ? (
                  <TopProductCard 
                  produit={filteredProducts} 
                  />
                ) : (
                  <TopProductCard 
                  produit={produit} 
                  />
                )}
              </div>
              <Pagination total_pages={1} />
            </div>
          </section>
        </main>
      </>
    );
  }
  
  export default Boutique;
  
  


