import React from 'react';
import './pronight.css';
// import videoFile from './fast_clip_1.mp4'; // Import the video file
// import arrow from './arrow-down-double-line.svg';

class ProNightSection extends React.Component {
    handleClick = () => {
        // Navigate to /megaevent
        window.location.href = '/megaevent';
    }

    render() {
        return (
            <>
                {/* pro-night */}
                {/* <div id="pro-night"> */}
                <h2 className="titlp" >
                    Pro Nite
                </h2>
                <div className='containerpro' onClick={this.handleClick} style={{cursor:'pointer'}}>
                    {/* <video src={videoFile}  loop autoPlay muted /> */}
                    <video className="pro_video" loop autoPlay muted>
                        <source src="https://res.cloudinary.com/diiyq5fwx/video/upload/v1709737073/fast_clip_1_qdp3s9_hyokwp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <h1 className="pronighthome">ProNight</h1> */}

                    <button className='revelbutton1' disabled ><h5 className="main_pro main_text">Live Band</h5></button >
                    {/* <button className='revelbutton2' onClick={this.handleClick}><h5 className="main_pro main_text">Kavi <br></br> Sammelan</h5></button> */}
                    <button className='revelbutton3' disabled><h5 className="main_pro main_text">BDM Night</h5></button>
                    <button className='revelbutton4' disabled ><h5 className="main_pro main_text">Fashion Show</h5></button>
                    <button className='revelbutton5' disabled><h5 className="main_pro main_text">Star Night</h5></button>
                    {/* </div> */}
                    </div >
            </>
        );
    }
}

export default ProNightSection;
