import React, { useEffect } from 'react';
import './member.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FacultyCoordinators = () => {
    // useEffect(() => {
    //     VanillaTilt.init(document.querySelectorAll(".card4545"), {
    //         max: 11,
    //         speed: 1200
    //     });
    // }, []);

    return (
        <div className='members'>

            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Members</h2>
                <div className="cont">
                   
                    <div className="card4545 card1">
                        <h3>Aditya Chopra</h3>
                        <h4>Convener</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798011/IMG_8756_ov3u9c.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/adityachopra01?igsh=dHZwdzM2M2YweWY3&utm_source=qr" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/aditya-chopra-49820624a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                              
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Abhishek Garg</h3>
                        <h4>Convener</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708799192/abhisheksir_kq9k4k.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>02</h2>
                            <div>
                                <a href="https://www.instagram.com/ab_garg22?igsh=MWNhbm51cG1jeDZlaA%3D%3D&utm_source=qr" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/abgarg22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             

                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Manav Jindal</h3>
                        <h4>Convener</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708953193/manav5_njgbm6.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                                <a href="https://www.instagram.com/jindal_manav?igsh=MWt0aG1mczk5M2tlbw==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/manav-jindal-242a29219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                              
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Isha </h3>
                        <h4>Cultural Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708803559/isha.._j4iagf.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>04</h2>
                            <div>
                                <a href="https://www.instagram.com/ishabatra786?igsh=MXFqOHltd2xzeDF1bw==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="http://www.linkedin.com/in/17isha" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Sameep Tegwal </h3>
                        <h4>Cultural Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708803901/sameepsir_f26kqg.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>05</h2>
                            <div>
                                <a href="https://www.instagram.com/tegwal10?igsh=MTRhZmRqajl4YWNvdQ==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/sameep-tegwal-117015223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             
                            </div>
                        </div>
                    </div>
                 
                    <div className="card4545 card1">
                        <h3>Tanushree Gupta</h3>
                        <h4> Finance Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798005/IMG_20240222_145612_hstzjy.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>06</h2>
                            <div>
                                <a href="https://www.instagram.com/gupta_tanu_4?igsh=ODdvOGl3Z284bXQ4" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/tanushree-gupta-879562224/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                               
                            </div>
                        </div>
                    </div>
                   
                    <div className="card4545 card1">
                        <h3>Surendra Palriya</h3>
                        <h4>Public Relation Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1709059873/Screenshot_2024-02-28_002045_btd63y.png" alt="" />
                        </span>
                        <div className="content">
                            <h2>07</h2>
                            <div>
                                <a href="https://www.instagram.com/surendra_palriya?igsh=N3NyaDJweGg1bnc=" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/surendra-palariya-428378226" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                           
                            </div>
                        </div>
                    </div>
                     
                    <div className="card4545 card1">
                        <h3>Mandeep Singh</h3>
                        <h4>Marketing Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708954200/20240120_113755_zlo74a.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>08</h2>
                            <div>
                                <a href="https://www.instagram.com/mandeep__dhinjan?igsh=Y2JrZm1xZGo3dHdt" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/mandeep-singh-131811221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             
                            </div>
                        </div>
                    </div>
                   
                    <div className="card4545 card1">
                        <h3>Abhishek Aggarwal</h3>
                        <h4>Social Media Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708953193/Abhishek_Agrawal_Sir_jbftqf.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>09</h2>
                            <div>
                                <a href="https://www.instagram.com/_.abhi.a?igsh=bXY3ejk4eHF0OTJl&utm_source=qr" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/abhishek-aggarwal-b6a996224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                           
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Tanya </h3>
                        <h4>Web Dev Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798005/B612_20231006_194738_445_gsqxbd.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>10</h2>
                            <div>
                            <a href="https://www.instagram.com/i.tanya._?igsh=MWZ0endhaXIzbmt5Zg==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/tanya-pahuja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                  
                    <div className="card4545 card1">
                        <h3>Prajwal Wankhade</h3>
                        <h4>Digital Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798002/DSC_0248_copy_1_hcenvs.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>11</h2>
                            <div>
                                <a href="https://www.instagram.com/pj.com_18/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/prajwal-wankhade-7201a8214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                           
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Purushottam </h3>
                        <h4>Purchase Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708804101/IMG_20240223_235529_z9kbom.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>12</h2>
                            <div>
                                <a href="https://www.instagram.com/purushottam__verma?igsh=bGpkMWp1dnMxN3U3" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/purushottam-verma-949429237" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                           1
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Harmanp</h3>
                        <h4>Deccoration Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1709058583/IMG_5012_rfskgc.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>13</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/harmanpreet-kaur-b5b234253/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                           
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Jashandeep Dhaliwal </h3>
                        <h4>Hospitality Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1709059834/Screenshot_2024-02-28_001953_dy3onn.png" alt="" />
                        </span>
                        <div className="content">
                            <h2>14</h2>
                            <div>
                                <a href="https://www.instagram.com/jashanndhaliwal?igsh=MTA5d2Q4NTFpNWN6ag%3D%3D&utm_source=qr" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/jashandeep-singh-239b84262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                            
                            </div>
                        </div>
                    </div>
                   
                
                   
                
               
                 
                    <div className="card4545 card1">
                        <h3>Kohil Godara</h3>
                        <h4>Discipline Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708953194/Kohilsir_de4vvy.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>15</h2>
                            <div>
                                <a href="https://www.instagram.com/kohil_godara?igsh=MWtiNXliNzRvMDlpag==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/kohil-godara-187921257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                               
                            </div>
                        </div>
                    </div> 

                    <div className="card4545 card1">
                        <h3>Gurkirat Singh</h3>
                        <h4>Discipline Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797996/224557_hnarj4.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>16</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Hardik Singla</h3>
                        <h4>Management Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797996/IMG_20230416_000133_zk07mn.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>17</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                          
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Sushant Pandav</h3>
                        <h4>Refreshment Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798010/IMG_20211209_231540_eobagn.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>18</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                      
                            </div>
                        </div>
                    </div>
                       
                    <div className="card4545 card1">
                        <h3>Ankit Agrawal</h3>
                        <h4>Registration Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798006/20231114_173618_jggxhh.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>19</h2>
                            <div>
                                <a href="https://www.instagram.com/ankii_g?igsh=MXBydHl1eXlrdHVvZA==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/ankit-agarwal-a282a9244" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                               
                            </div>
                        </div>
                    </div>
                   
                 
                    
                </div>
            </div>
           
          
          
        </div>
    );
}

export default FacultyCoordinators;
