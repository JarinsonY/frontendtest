import React, { useState, useEffect } from 'react';
import SquareLeft from "../../assets/images/SquareLeft.png";
import SquareRigth from "../../assets/images/SquareRigth.png";
import SquareMid from "../../assets/images/SquareMid.png";
import ProductClient from "../../assets/images/ProductClient.png";
import './Banner.css'

const Banner = () => {
    const [img1, setImage] = useState(true);
    const [img2, setImageTwo] = useState(false);

    const showImage = () => {
        if (window.innerWidth <= 797) {
            setImage(false);
            setImageTwo(true);
        } else {
            setImage(true);
            setImageTwo(false);
        }
    };

    useEffect(() => {
        showImage();
    }, []);

    window.addEventListener('resize', showImage);

    return (
        <div className="comp-banner">
            <div className="bgBanner">
                <img src={SquareLeft} alt="rectangulos" className="banner-rectangles"></img>
                {img1 && <img src={SquareRigth} alt="rectangulos" className="banner-rectangles"></img>}
                {img2 && <img src={SquareMid} alt="rectangulos" className="banner-rectangles"></img>}
            </div>
            <div className="banner-content">
                <img src={ProductClient} alt="Product Client" className="client-img"></img>
                <div className="text-block-Banner" id="content">
                    <span>Trabajamos para</span>
                    <span><strong>Convertir ideas</strong> en</span>
                    <span><strong>Productos.</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Banner