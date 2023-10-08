import React from "react";
import './section.css';

function GeneralSection({sectionSeparator,color,title,text,changeColor,tag,children,textColor}){

    return(
        <div className="section" style={{backgroundColor: changeColor ? color : ''}}>
            {sectionSeparator &&
                <div className="separator"></div>
            }
            <div className="container section-container">
                <div className="title-container">
                    <p className="tag">{tag}</p>
                    <h2 style={{color: changeColor ? textColor : ''}}>{title}</h2>
                    <p class="paragraphe">
                        {text}
                    </p>
                </div>
                {children}

            </div>
        </div>

    )
}

export default GeneralSection