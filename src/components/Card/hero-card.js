import '../Header/mainHeader.css'
import Img1 from '../../images/topaze.webp'

// Redux import 
import { listeProduit } from '../../redux/actions/productAction';

// Hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"

function HeroCard(props) {
  // State
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState("forward");
  const [isNextData, setIsNextData] = useState(0);
  const dispatch = useDispatch();


  // New constantes 

  const produit = [
    {
      'id': 1,
      'title': 'Diamant', 
      'description': 'Un saphir est une pierre de la famille des corindons qui se décline dans de multiples coloris. Vous pourrez avec cette pierre précieuse répondre avec finesse à toutes les envies en matière de bijoux et de pierres de couleurs.',
      'image': 'https://www.vuillermoz.fr/bijoux-w280h280zc2q90/bague-or-blanc-750-saphir-ovale-9x7mm-et-diamants_34743-1.jpg',
      'imageUrl': 'https://emmapierre.netlify.app/images/images/photo9.jpeg'
    },
    {
      'id': 2,
      'title': 'Ambre', 
      'description': 'L’ambre est le résultat de la fossilisation de certaines résines végétales, généralement de conifères. Elle est composée d’isoprène, une molécule qui, avec le temps et sous certaines conditions, se polymérise. Grâce à ce phénomène naturel, la résine se transforme en ambre jaune solide.',
      'image': 'https://www.vuillermoz.fr/bijoux-w240h240zc2q90/bracelet-jonc-ambre-multicolore-et-argent-925_30018-1.jpg',
      'imageUrl': 'https://emmapierre.netlify.app/images/images/photo8.jpeg'
    },
    {
      'id': 3,
      'title': 'Quartz Rose', 
      'description': 'Un saphir est une pierre de la famille des corindons qui se décline dans de multiples coloris. Vous pourrez avec cette pierre précieuse répondre avec finesse à toutes les envies en matière de bijoux et de pierres de couleurs.',
      'image': 'https://www.vuillermoz.fr/bijoux-w150h150zc2q100/bague-argent-quartz-rose-coussin-12mm_14306-1.jpg',
      'imageUrl': 'https://www.vuillermoz.fr/uploads/cms/encyclopedie-des-pierres/quartz_rose.jpeg'
    },
    {
      'id': 4,
      'title': 'Nacre', 
      'description': 'Un saphir est une pierre de la famille des corindons qui se décline dans de multiples coloris. Vous pourrez avec cette pierre précieuse répondre avec finesse à toutes les envies en matière de bijoux et de pierres de couleurs.',
      'image': 'https://www.vuillermoz.fr/bijoux-w240h240zc2q100/bague-moderne-nacre-en-argent-925_10095-1.jpg',
      'imageUrl': 'https://emmapierre.netlify.app/images/images/photo7.jpeg'
    },
    {
      'id': 5,
      'title': 'Grenat', 
      'description': 'Un saphir est une pierre de la famille des corindons qui se décline dans de multiples coloris. Vous pourrez avec cette pierre précieuse répondre avec finesse à toutes les envies en matière de bijoux et de pierres de couleurs.',
      'image': 'https://www.vuillermoz.fr/bijoux-w240h240zc2q80/bague-argent-grenat-coussin-12mm_14297-1.jpg',
      'imageUrl': 'https://emmapierre.netlify.app/images/images/photo2.jpeg'
    },
]

    /*useEffect, onwindow load it load the data with axios
    useEffect(() => {
        dispatch(listeProduit());
    })
    */
  
  // When i click on the card if the index is equal to currentIndex show this div
  // else show the others div
  const card_hero = produit && produit.map(({ id, image, title, description, imageUrl }, index) =>
    index === currentIndex ? (
      <div key={id} className="hero-card center" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="overlay">
          <h2>{title.length > 14 ? title.substring(0,14) + '...' : title}</h2>
        </div>
      </div>
    ) : (
      <div
        key={id}
        onClick={(e) => showNextCard(e, index)}
        className={index < currentIndex ? "hero-card left" : "hero-card right"}
      >
        <div className="box-image" style={{backgroundImage: `url(${imageUrl})`}}>
          <img src={image} alt="star" />
        </div>
        <h2>{title.length > 14 ? title.substring(0,14) + '...' : title}</h2>
        <p>
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>
    )
  );

  const dot_point = produit.map(({ id, img, title, description }, index) =>
    index === currentIndex ? (
      <div key={id} className="dot_point_active"></div>
    ) : (
      <div onClick={(e) => getNextCard(e, index)} 
      key={id} className="dot_point"></div>
    )
  );

  // Function show next card on click
  function showNextCard(e, index) {
    if (index >= 0 && index < card_hero.length) {
      if (currentIndex > 0 && index < currentIndex) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(index);
      }

      // Evalue l'index cliqué, si celui-ci est sup à current ou inf à current
      if (index > currentIndex) {
        setIsNextData(index + 1);
      } else {
        setIsNextData(index - 1);
      }
    }
  }

  // Dot point function click
  function getNextCard(e, index){
    if (index >= 0 && index < card_hero.length) {
        setCurrentIndex(index);

    }
  }

  // hide index who are after or before isNextData if there is index.
  const filteredCards = card_hero.filter((card, index) => {
    if (direction === "forward") {
      if (currentIndex <= card_hero.length ) {
        if(index <= currentIndex + 1 && index >= currentIndex - 1 ){
          return true
        }
      }
    } else if(direction === "backward") {
      if (currentIndex >= 0 ) {
        if(index >= currentIndex - 1 && index <= currentIndex + 1 ){
          return true
        }
      }
    }
  });

  // SetInterval function
  function slideCard() {
    if (direction === "forward") {
      if (currentIndex < card_hero.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setDirection("backward");
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setDirection("forward");
      }
    }
  }
 

  useEffect(() => {
    const interval = setInterval(slideCard, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, direction]);

  function slideNextCard() {
      if(currentIndex < card_hero.length - 1){
        setCurrentIndex(currentIndex + 1);
      }else {
        setCurrentIndex(currentIndex)
      }
  }

  function slidePrevCard(){
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(currentIndex)
      }
  }

  return (
    <>
      {filteredCards}
      <div className="dot_point_container">{dot_point}</div>
      <button className={currentIndex === 0 ? '' : "prevBtn"} onClick={slidePrevCard}>
        <AiOutlineLeft />
      </button>
      <button className={currentIndex === card_hero.length - 1 ? '' : "nextBtn"} onClick={slideNextCard}>
        <AiOutlineRight />
      </button>
    </>
  );
}

export default HeroCard;

  
  
  
  