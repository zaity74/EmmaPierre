import React from "react";
import '../section.css';
import '../collections/collection.css'
import GeneralSection from "../sections";

function Collections(props){

    return(
        <>
            <GeneralSection title={'Nos Collections'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}>
                <div class="shape-box">
                    <div class="shape figure1">
                        <div class="title-shape">
                            Ras de cou
                        </div>
                    </div>
                    <div class="shape figure2">
                        <div class="title-shape">
                            Boucle d'oreille
                        </div>
                    </div>
                    <div class="shape figure3">
                        <div class="title-shape">
                            Sautoir
                        </div>
                    </div>
                    <div class="shape figure4">
                        <div class="title-shape">
                            Bracelet
                        </div>
                    </div>
                </div>
            </GeneralSection>
        </>
    )
}

export default Collections