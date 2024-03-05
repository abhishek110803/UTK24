import React, { useState } from 'react';
// import './css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
// Import all stylesheets

import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
const Dance = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('step-one');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5d596a5858e414584423a',
        minParticipants: 1,
        maxParticipants: 1,
        amount: 200,
        eventTitle: 'Beat The Street',

    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-one") {
            setEventdetails({
                eventId: '65d5d596a5858e414584423a',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 200,
                eventTitle: 'Beat The Street',

            });
        }
        if (tabId === "step-two") {
            setEventdetails({
                eventId: '65d5d69fa5858e4145844242',
                minParticipants: 2,
                maxParticipants: 2,
                amount: 200,
                eventTitle: 'Duet Dance',

            });
        }
        if (tabId === "step-three") {
            setEventdetails({
                eventId: '65d5d56ea5858e4145844237',
                minParticipants: 5,
                maxParticipants: 100,
                amount: 120,
                eventTitle: `Shut Up 'N' Dance`,

            });
        }


    };
    const handleClick = () => {
        //console.log("clicked", eventdetails);
        navigate("/event/registerinevent", { state: { ...eventdetails } });
    };


    return (
        <div className='ALLEVENT'>
            {/* <div className="cd-overlay-nav">
                <span></span>
            </div> */}

            {/* <div className="cd-overlay-content">
                <span></span>
            </div> */}

            {/* <a href="dance.html#0" className="cd-nav-trigger">Menu<span className="cd-icon"></span></a> */}


            <section className="our-schedule-area">
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Dance Club</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${activeTab === 'step-one' ? 'active' : ''}`}
                                            id="tab-onr"
                                            onClick={() => handleTabClick('step-one')}
                                        >
                                            Beat The Street
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${activeTab === 'step-two' ? 'active' : ''}`}
                                            id="tab-two"
                                            onClick={() => handleTabClick('step-two')}
                                        >
                                            Duet Dance
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${activeTab === 'step-three' ? 'active' : ''}`}
                                            id="tab-three"
                                            onClick={() => handleTabClick('step-three')}
                                        >
                                            Shut Up 'N' Dance
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content" id="conferScheduleTabContent">

                                {activeTab === 'step-one' && (
                                    <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">

                                        <div className="single-tab-content">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                        <div className="single-schedule-tumb-info d-flex align-items-center">
                                                            <div className="single-schedule-info">
                                                                <h3>BEAT THE STREET - Solo Face Off </h3>
                                                                <p>
                                                                    A solo dance face-off is a dance competition where individual dancers compete against each other to showcase their skills, technique, and performance abilities.<br /><br />
                                                                </p>
                                                                <p>
                                                                    <b>Time Limit:</b><br />
                                                                    • First round: 1 min<br />
                                                                    <b>Team size</b> : Solo<br /><br />
                                                                </p>
                                                                <h6 style={{ color: 'white' }}>Rules:</h6>
                                                                <p>
                                                                    1. There are three rounds for this competition as listed below:<br />
                                                                    2. Elimination round:<br />
                                                                    • First Round: Contestants will have to perform for a time duration of 1 min on the track of their own choice.<br />
                                                                    • Semi-final round: A face-off round, your opponent will be selected by the judges randomly and you have to perform on a random track.<br />
                                                                    • Final Round: The winners of the previous round will battle each other for winning the title, again a face-off round.<br />
                                                                    3. The track of the semi-finals and final round will be played on the spot.<br />
                                                                    4. Rules will be the same as Finals.<br />
                                                                    <b>Finals:</b><br />
                                                                    1. Participants can incorporate styles like Hip-hop, Tutting, Flooring, Breaking or B-Boying, Krumping, Popping, Locking, Bollywood, and freestyle. Styles other than these are not encouraged.<br />
                                                                    2. Participants need to bring their soundtrack.<br />
                                                                    • Participants may use multiple songs.<br />
                                                                    • Pre-recorded music should be brought in a CD/DVD or a pen drive in .cad or .mp3 format only (Other formats may not be supported on the computer. Use them at your own risk).<br />
                                                                    • Submit your track through the app at least 15-30 minutes before the start of the event.<br />
                                                                    • The track should be in .mp3 format.<br />
                                                                    3. Teams must follow the Time Limits. The teams which fail to do so will be penalized by the judges.<br />
                                                                    4. Props can be used. They need to be brought by the team itself. However, the organizing team holds the discretion of not allowing it on the stage.<br />
                                                                    5. Any kind of fluids, heavy objects, and flame are prohibited on stage.<br />
                                                                    6. Obscenity of any kind is not allowed and will lead to immediate disqualification.<br />
                                                                    7. The decision of the judges and the organizing team shall be final and binding.<br /><br />

                                                                    <br />

                                                                    <span style={{ color: 'white' }}><b>Prize Pool: INR 7,000/-</b></span><br /><br />

                                                                    <span style={{ color: 'white' }}>
                                                                        Date: 9<sup>th</sup> March<br />
                                                                        Note: Reach 1 day prior to the venue.<br />
                                                                        Registration date: On spot registration. <br />
                                                                        Entry Fee: 200/- per person   <br />
                                                                    </span>

                                                                    <br />
                                                                    <span style={{ color: 'white' }}>
                                                                        *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                        *Exclusively relevant to events with single participants
                                                                    </span> <br /><br />
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <a onClick={handleClick} className="btn confer-btn">Register </a>

                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>)
                                }


                                {activeTab === 'step-two' && (
                                    <div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">

                                        <div className="single-tab-content">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                        <div className="single-schedule-tumb-info align-items-center">
                                                            <div className="single-schedule-info">
                                                                <h3>DUET DANCE - Jugalbandi </h3>
                                                                <p>
                                                                    A duet dance competition is a showcase of choreographed routines performed by two dancers featuring a variety of dance styles such as Bollywood, contemporary, etc.<br /><br />
                                                                </p>
                                                                <p>
                                                                    <b>Time limit</b> : 2-4 minutes. <br />
                                                                    <b>Team size</b> : 2 members. <br />
                                                                    <b>Maximum entries per team</b> : 2 duets <br /> <br />
                                                                </p>
                                                                <h6 style={{ color: 'white' }}>Rules:</h6>
                                                                <p>
                                                                    <b>Prelims:</b>
                                                                    1. The conduct of prelims would be decided by the organizing team based on the number of participants.<br />
                                                                    2. Rules will be the same as Finals.<br />

                                                                    <b>Finals:</b>
                                                                    1. All forms of dance are allowed.<br />
                                                                    2. Participants need to bring their soundtrack. <br />
                                                                    • Participants may use multiple songs.<br />
                                                                    • Pre-recorded music should be brought in a CD/DVD or a pen drive in .cda or .mp3 format only (Other formats may not be supported on the computer. Use them at your own risk).<br />
                                                                    • Submit your track through the app at least 15-30 minutes before the start of the event.<br />
                                                                    • The track should be in .mp3 format.<br />
                                                                    3. Teams must follow the Time Limits. The teams which fail to do so will be penalized by the judges.<br />
                                                                    4. Props can be used. They need to be brought by the team itself. However, the organizing team holds the discretion of not allowing it on the stage.
                                                                    Any kind of fluids, heavy objects, and flame is prohibited on stage.<br />
                                                                    5. The obscenity of any kind is not allowed and will lead to immediate disqualification.<br />
                                                                    6. The decision of the judges and the organizing team shall be final and binding.<br /><br />

                                                                    <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                                    • Synchronization. <br />
                                                                    • Stage Utilisation.<br />
                                                                    • Creativity. <br />
                                                                    • Choreography.<br />
                                                                    • Co-ordination. <br />
                                                                    • Energy Level.<br />
                                                                    • Expression. <br />
                                                                    • Costumes and Props.<br />
                                                                    • Innovation and Presentation The overall impact on the Crowd.<br /><br />

                                                                    <b style={{ color: 'white' }}>Note:</b><br />
                                                                    Teams will be awarded extra points for:<br />
                                                                    • Including props.<br />
                                                                    • Making their performance unconventional. (e.g., boys doing belly dance)<br /><br />
                                                                </p>

                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 7,000/-</b></span><br /><br />

                                                                <span style={{ color: 'white' }}>
                                                                    Date: 10<sup>th</sup> March<br />
                                                                    Note: Reach 1 day prior to the venue.<br />
                                                                    Registration date: On spot registration. <br />
                                                                    Entry Fee: 200/- per person  <br />
                                                                </span>
                                                                <br />
                                                                <span style={{ color: 'white' }}>
                                                                    *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                    *Exclusively relevant to events with single participants
                                                                </span> <br /><br />
                                                                {/* <p><br />On Spot Registration!</p> */}
                                                                <a className="btn confer-btn" onClick={handleClick}>Register </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }

                                {activeTab === 'step-three' && (
                                    <div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">

                                        <div className="single-tab-content">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                        <div className="single-schedule-tumb-info d-flex align-items-center">
                                                            <div className="single-schedule-info">
                                                                <h3>SHUT UP ‘N’ DANCE - Group Dance </h3>
                                                                <p>
                                                                    A group dance competition involves different groups of dancers competing against each other. Group dance can be performed in various styles, such as Bollywood, hip hop, jazz dances, etc. <br /><br />
                                                                </p>
                                                                <p>
                                                                    <b>Time Limit:</b><br />
                                                                    • Prelims: 3-4 minutes<br />
                                                                    • Finals: 7-12 minutes <br />
                                                                    <b>Team size</b>: 5-50<br /><br />
                                                                </p>
                                                                <h6 style={{ color: 'white' }}>Rules:</h6>
                                                                <p>
                                                                    <b>Prelims:</b><br />
                                                                    1. The conduct of prelims would be decided by the organizing team based on the number of participants.<br />
                                                                    2. Rules will be the same as Finals.<br />

                                                                    <b>Finals:</b><br />
                                                                    1. Only group performances are allowed.<br />
                                                                    2. All forms of dance are allowed.<br />
                                                                    3. Participants need to bring their soundtrack.<br />
                                                                    • Participants may use multiple songs.<br />
                                                                    • Pre-recorded music should be brought in a CD/DVD or a pen drive in .cda or .mp3 format only (Other formats may not be supported on the computer. Use them at your own risk).<br />
                                                                    • Submit your track through the app at least one day before the start of the event.<br />
                                                                    • The track should be in .mp3 format.<br />
                                                                    4. Teams must follow the Time Limits. The teams which fail to do so will be penalized by the judges.<br />
                                                                    5. Props can be used. They need to be brought by the team itself. However, the organizing team holds the discretion of not allowing it on the stage.<br />
                                                                    6. Any kind of fluids, heavy objects, and the flame are prohibited on stage.<br />
                                                                    7. The obscenity of any kind is not allowed and will lead to immediate disqualification.<br />
                                                                    8. At any given time, a minimum of 5 members should be on the stage.<br />
                                                                    9. The decision of the judges and the organizing team shall be final and binding.<br /><br />

                                                                    <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                                    • Synchronization. <br />
                                                                    • Stage Utilization.<br />
                                                                    • Creativity. <br />
                                                                    • Choreography.<br />
                                                                    • Co-ordination. <br />
                                                                    • Energy Level.<br />
                                                                    • Expression. <br />
                                                                    • Costumes and Props.<br />
                                                                    • Innovation and Presentation The overall impact on the Crowd.<br /><br />

                                                                    <b style={{ color: 'white' }}>Note:</b><br />
                                                                    Teams will be awarded extra points for:<br />
                                                                    • Including props.<br />
                                                                    • Making their performance unconventional. (e.g., boys doing belly dance)<br /><br />

                                                                </p>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 18,000/-</b></span><br /><br />
                                                                Date: 8<sup>th</sup> March<br />
                                                                Entry Fee: 120/- per person  <br />
                                                                Note: Reach 1 day prior to the venue.<br /><br />
                                                                <span style={{ color: 'white' }}>
                                                                    *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                    *Exclusively relevant to events with single participants
                                                                </span> <br /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" onClick={handleClick} >Register </a>
                                                </div>
                                            </div>
                                            {/* Single Schedule Area */}
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex justify-content-around mb-3">
                {/* Contact information */}
            </div>
        </div>


    );
}

export default Dance;
