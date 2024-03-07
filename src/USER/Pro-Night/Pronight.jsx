import React, { useEffect } from 'react';
import './pronight.css';
import p1 from './f1.jpg'

export default function Pronight() {

    useEffect(() => {
        var heading = document.querySelector('.pronight_title_pro');
        var card = document.querySelector('.pronight_card');

        heading.addEventListener('mousewheel', () => {
            heading.style.transform = ' translate(-50%, -50%) scale(1.5) ';
            heading.style.top = '10% ';
            heading.style.opacity = '0';
        });

        heading.addEventListener('mousewheel', () => {
            card.style.transform = ' translate(-50%, -50%) scale(1.2) ';
            card.style.top = '40% ';
        });

        card.addEventListener('mousewheel', () => {
            card.style.top = '100%';
            card.style.transform = ' translate(-50%, -50%) scale(0) ';
            heading.style.opacity = '1';
            heading.style.top = '40%';
            heading.style.left = '50%';
            heading.style.transform = 'translate(-50%, -50%) scale(3)';
        });

        heading.addEventListener('click', () => {
            heading.style.transform = ' translate(-50%, -50%) scale(1.5) ';
            heading.style.top = '10% ';
            heading.style.opacity = '0';
        });

        heading.addEventListener('click', () => {
            card.style.transform = ' translate(-50%, -50%) scale(1.2) ';
            card.style.top = '40% ';
        });

        card.addEventListener('click', () => {
            card.style.top = '100%';
            card.style.transform = ' translate(-50%, -50%) scale(0) ';
            heading.style.opacity = '1';
            heading.style.top = '40%';
            heading.style.left = '50%';
            heading.style.transform = 'translate(-50%, -50%) scale(3)';
        });
    }, []);

    return (
        <div>
            <section className="pronight_pro_night prn" style={{ backgroundColor: 'black'}}>
                <div id="pro-night">
                    <video className="pronight_pro_video prnv" loop autoPlay muted>
                        <source src="https://res.cloudinary.com/diiyq5fwx/video/upload/v1709737073/fast_clip_1_qdp3s9_hyokwp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="pronight_title_pro">Pro-Nite</h1>
                    <div className="pronight_card prnc" >
                       
                       
                            <img src={p1} alt=""  />
                     
                    </div>

                </div>
            </section>
        </div>
    );
}
