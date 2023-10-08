import React from "react";
import '../Header/mainHeader.css'
import Shape from "../../images/shapeEmma2.png"
import HeroCard from "../Card/hero-card";

class MainHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
        <div class="banner">
            <img className="collier" src={Shape} alt="shape" />
            <div className="container hero-container">
                <div className="relative-box">
                <div className="banner-info">
                    <h1>Bijoux</h1>
                    <p>Made in France 🇫🇷</p>
                </div>
                <div className="hero-box">
                    <HeroCard />
                </div>
                </div>
            </div>
        </div>

        )
    }
}

export default MainHeader