import React from "react";
import './footer.css';

function Footer(props){

    return(
        <>
             <div class="footer">
        <div class="footer-container">
            <div class="section">
                <h4>Aide & Collect</h4>
                <ul class="list-footer">
                    <li>
                        <a href="#">Conditions générales</a>
                    </li>
                    <li>
                        <a href="#">Mentions légales</a>
                    </li>
                    <li>
                        <a href="#">Nous contacter</a>
                    </li>
                    <li>
                        <a href="#">Mode de paiement</a>
                    </li>
                    <li>
                        <a href="#">Modes de livraisons</a>
                    </li>
                </ul>
            </div>
            <div class="section">
                <h4>Emma Pierre</h4>
                <ul class="list-footer">
                    <li>
                        <a href="#">Notre Histoire</a>
                    </li>
                    <li>
                        <a href="#">Nos valeurs</a>
                    </li>
                    <li>
                        <a href="#">Nos services</a>
                    </li>
                    <li>
                        <a href="#">Nos bijouteries</a>
                    </li>
                </ul>
            </div>
            <div class="section third-section">
                <h4>Suivez-nous</h4>
                <ul class="list-footer">
                    <li>
                        <a href="#">
                            <img src="./images/insta_svg.png" alt="logo instagram" />
                            @EmmaPierreJewels</a>
                    </li>
                    <li>
                        <a href="#">Newsletter</a>
                    </li>
                    <input type="email" id="email"
                    pattern=".+@globex\.com" size="30" required />
                    <li>
                        <a href="#">s'abonner</a>
                    </li>
                </ul>
            </div>
        </div>
        <p class="copyright"> ©️ 2023 - EMMA PIERRE - Tous droits réservés </p>
    </div> 
        </>
    )
}

export default Footer