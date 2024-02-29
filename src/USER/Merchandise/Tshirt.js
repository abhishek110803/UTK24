import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Tshirt.css';
import t6 from './t6.png';
import t2 from './t2.png';

const Merchandise = () => {
    return (
        <div className='outer' style={{ minHeight: '90vh' }}>
            <h1 className="Merchandise">Merchandise</h1>
            <div className="ram ">
                <div className="columnY">
                    <figure className="featured-image align-center ">
                        <img src={t2} width="200px" style={{ height: "250px" }} alt="Utkansh Tshirt Black" />
                    </figure>
                    <h3 className="text-center" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Utkansh Oversized<br></br> T-shirt </h3>
                    <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 315/- Till 2nd March 2024</h5>
                    <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 350/- After 2nd March 2024</h5>

                    <h2 style={{ fontWeight: 'bold', color: 'blue' }} className="text-center">
                        <Link to="/merchandise/tshirtdetails/1" style={{ color: 'blue', textDecoration: 'none' }}>Order Now</Link>
                    </h2>
                </div>
                <div className="columnY">
                    <figure className="featured-image ">
                        <img src={t6} width="200px" style={{ height: "250px" }} alt="Utkansh Tshirt Gray" />
                    </figure>
                    <h3 className="text-center" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Utkansh Oversized<br></br> T-shirt </h3>
                    <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 315/- Till 2nd March 2024</h5>
                    <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 350/- After 2nd March 2024</h5>

                    <h2 style={{ fontWeight: 'bold', color: 'blue' }} className="text-center">
                        <Link to="/merchandise/tshirtdetails/2" style={{ color: 'blue', textDecoration: 'none' }}>Order Now</Link>
                    </h2>
                </div>


            </div>
            <h6 className="Merchandise"> For inquiries:<br></br>
            Ayush - 9915292152 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             Sameep - 7217532444 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             Harmanpreet Kaur - 7814027117</h6>
        </div>
    );
};

export default Merchandise;
