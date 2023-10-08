import '../sections/about/About.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SectionContent({title, text,btnVisible}){


    return(
    <>
        <div class="box-image-container">
            <div class="under-box-image"></div>
            <div class="box-image"></div>
        </div>
        <div class="text">
            <h2>{title}</h2>
            <p class="paragraphe">
                {text}
            </p>
            {btnVisible &&
                <Link className="btn" to="#">Voir plus</Link>
            }
        </div>
    </>
    )
}
export default SectionContent