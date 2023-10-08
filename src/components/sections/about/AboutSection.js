import React from "react";
import '../about/About.css'
import SectionContent from "../SectionContent";

class AboutSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        const content = 'Le nom de ma société m’est venu naturellement en associant le diminutif de mon prénom à ma passion de toutes les pierres ornementales, qui, par leur multitude de couleurs et d’éclats, ne cessent de m’enchanter depuis l’enfance. Je me suis lancée dans la création de bijoux pour que chaque femme ait la possibilité d’accéder à des gemmes telles que le saphir, l’émeraude ou la tourmaline, belle méconnue se parant de mille teintes, mon unique objectif est que vous trouviez la pierre qui s’accordera à votre humeur du jour ou de toujours à un prix vous permettant de multiplier votre plaisir… Tous mes bijoux sont fabriqués à la main dans mon atelier lyonnais, en éditions limitées pour plus d’exclusivité, certains même en unique exemplaire, ils vous apporteront cette touche particulière qui vous rendra unique, chaque matière ayant été soigneusement sélectionnée.';
        return(
        <div class="about_section">
            <div className="container about-container">
                <p className="signature">Emma <br></br><span>Pierre</span> </p>
                <div className="text-container">
                    <SectionContent title={'A propos'} text={content} btnVisible={true} />
                </div>
            </div>
        </div>

        )
    }
}

export default AboutSection