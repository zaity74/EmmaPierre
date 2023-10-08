import React from "react";
import './blog.css';
import { Link } from "react-router-dom";
import GeneralSection from "../sections";

function BlogSection({btnVisible = true}){

    return(
        <>
            <div class="news">
                <div class="news-container">
                    <h2 className="title">Nos actualités<br></br></h2>
                    <p className="sub-blog">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    <div class="card-container">
                        <div class="card news_card1">
                            <div class="text-container">
                                <h4 class="article-title">Ras de cou - KIANA </h4>
                                <p class="paragraphe">
                                    Le ras de cou Kiana est un bijou élégant et sophistiqué, conçu pour être porté autour du cou. Il est fabriqué à partir de perles d'eau douce et de pierres semi-précieuses.
                                </p>
                            </div>
                        </div>
                        <div class="card news_card2">
                            <div class="text-container">
                                <h4 class="article-title">Ras de cou - sahar </h4>
                                <p class="paragraphe">
                                    Le ras de cou Sahar est un bijou délicat et raffiné, conçu pour être porté autour du cou. Il est fabriqué à partir de perles d'eau douce et de pierres semi-précieuses.
                                </p>
                            </div>
                        </div>
                        <div class="card news_card3">
                            <div class="text-container">
                                <h4 class="article-title">Bracelet - Maral</h4>
                                <p class="paragraphe">
                                    Le bracelet Maral est un bijou élégant et tendance, conçu pour être porté autour du poignet. Il est fabriqué à partir de perles d'eau douce et de pierres semi-précieuses
                                </p>
                            </div>
                        </div>
                    </div>
                    {
                        btnVisible && 
                        <Link className="btnProduct" to="/blog">Voir plus</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default BlogSection