import React, { useEffect } from 'react';

import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './member.css';

const Developers = () => {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".card4545"), {
            max: 7,
            speed: 1000
        });
    }, []);

    return (
        <div className='developers'>




            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Developers</h2>
                <div className="cont">
                    <div className="card4545 card1">
                        <h3>Tanya Pahuja</h3>
                        <h3>ICE 4th Year</h3>
                        <h4>Web Dev Head</h4>
                    

                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708777849/B612_20231006_194738_445_rjzo20.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/i.tanya._?igsh=MWZ0endhaXIzbmt5Zg==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/tanya-pahuja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>


                </div>
                <div className="cont">
                    <div className="card4545 card1">
                       
                        <h3>Abhishek Kumar</h3>
                        <h3>CSE 3rd Year</h3>
                        <h4>Web Dev Lead</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708774429/1708333534327_gzayyd.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>02</h2>
                            <div>
                                <a href="https://www.instagram.com/abhishek1108032022/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/abhishek-kumar-992757211/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="card4545 card1">
                        <h3>Kunal Kumar</h3>
                        <h3>CSE 3rd Year</h3>
                        <h4>Web Dev Lead</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708775392/kunal_cqwsaj.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                                <a href="https://www.instagram.com/candy_br09/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/kunal23kmr/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cont">

                    <div className="card4545 card1">
                        <h3>Sheetal Mehan</h3>
                        <h3>ECE 2nd Year</h3>
                        <h4>Member</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709060017/WhatsApp_Image_2024-02-28_at_12.21.34_AM_uniyrp.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>04</h2>
                            <div>
                                <a href="https://www.instagram.com/mehansheetal?igsh=MWhqYzN5MHBvNm14cg%3D%3D&utm_source=qr" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/sheetal-mehan-12296624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="card4545 card1">
                        <h3>Devansh Sharma</h3>
                        <h3>CHE 2nd Year</h3>
                        <h4>Member</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708775255/devansh_nmilzd.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>05</h2>
                            <div>
                                <a href="https://www.instagram.com/heyy_davy_?igsh=Y3B5bGx5c2lycG51" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/devansh-sharma-82551b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank"> 
                                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }}/></a>
                                <a href="https://www.linkedin.com/home" target="_blank"> 
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }}/>
                                </a>
                                <a href="https://github.com/" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank"> 
                                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }}/></a>
                                <a href="https://www.linkedin.com/home" target="_blank"> 
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }}/>
                                </a>
                                <a href="https://github.com/" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }}/>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    {/* Repeat the above card4545 structure for other team members */}
                </div>
            </div>
        </div>
    );
}

export default Developers;
