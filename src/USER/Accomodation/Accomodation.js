import React, { useEffect } from 'react';
import './Accomodation.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

const AccomodationPage = () => {
  const navigate = useNavigate();

  const [planno, setPlanno] = useState(1);
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cardss"), {
      max: 25,
      speed: 400
    });
  }, []);

  const handleClick = (planId) => {
    //console.log("planId", planId);
    setPlanno(planId);
    navigate(`/event/registeraccomodation/${planId}`);
  }

  return (
    <div className='accomodation' style={{ minHeight: '90vh' }}>
      <div style={{ minHeight: '100px' }}></div>
      <h2 className="titl" style={{ textAlign: 'center', fontSize: '2.4rem', zIndex: 100 }}>
        Accommodation
      </h2>
      <div className="containeraco">
        {/* <h2 className="titl" style={{ textAlign: 'center', fontSize: '3.6rem', zIndex: 100 }}>
          We will reveal soon..
        </h2> */}
        <div className="gridaco">
          <div className="cardss">
            <h2 className="card_title">One Day Pack</h2>
            <p className="pricing">₹ 400<span className="small">/Per person</span></p>
            <hr />
            <ul className="features">
              <li>1 Meal Included</li>
              <li>Combined Rooms</li>
            </ul>
            <hr />
            {/* <p className="features"><b>Note: </b>Food Will Cost Extra.</p> */}
            <a className="cta_btn" onClick={() => handleClick(1)}>Buy Now</a>
          </div>

          <div className="cardss">
            <h2 className="card_title">Two Day Pack</h2>
            <p className="pricing">₹ 650<span className="small">/Per person</span></p>
            <hr />
            <ul className="features">
              <li>2 Meal Included</li>
              <li>Combined Rooms</li>
            </ul>
            <hr />
            {/* <p className="features"><b>Note: </b>Food Will Cost Extra.</p> */}
            <a className="cta_btn" onClick={() => handleClick(2)}>Buy Now</a>
          </div>

          <div className="cardss">
            <h2 className="card_title">Three Day Pack</h2>
            <p className="pricing">₹ 900<span className="small">/Per person</span></p>
            <hr />
            <ul className="features">
            <li>3 Meal Included</li>
              <li>Combined Rooms</li>
            </ul>
            <hr />
            {/* <p className="features"><b>Note: </b>Food Will Cost Extra.</p> */}
            <a className="cta_btn" onClick={() => handleClick(3)}>Buy Now</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AccomodationPage;
