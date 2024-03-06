import React, { useState } from 'react';
// const navigate = usenavigate();
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import all stylesheets

import '../css/event.css';
import '../css/bootstrap.min.css';
import '../css/fontawesome-all.min.css';
import '../css/swiper.min.css';
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Fas() {
    const navigate = useNavigate();


    const [activeTab, setActiveTab] = useState('step-one');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65cf977c762805baf9ec2e1c',
        minParticipants: 1,
        maxParticipants: 2,
        amount: 0,
        eventTitle: 'ART EXHIBITION',


    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-one") {
            setEventdetails({
                eventId: '65cf977c762805baf9ec2e1c',
                minParticipants: 1,
                maxParticipants: 2,
                amount: 0,
                eventTitle: 'ART EXHIBITION',

            });
        }
        if (tabId === "step-two") {
            setEventdetails({
                eventId: '65d5affcf0fa8ef075fb78ae',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 50,
                eventTitle: 'DO-ART',

            });
        }
        if (tabId === "step-three") {
            setEventdetails({
                eventId: '65d5b11666590253933c777f',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 50,
                eventTitle: 'CINEART ODYSSEY',

            });
        }
        if (tabId === "step-four") {
            setEventdetails({
                eventId: '65d5b27d66590253933c778e',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 50,
                eventTitle: 'LETTART',

            });
        }
        if (tabId === "step-five") {
            setEventdetails({
                eventId: '65d5adc8a74298259eff0cc6',
                minParticipants: 1,
                maxParticipants: 3,
                amount: 100,
                perTeam: true,
                eventTitle: 'RELAY ART CHALLENGE',

            });
        }
        if (tabId === "step-six") {
            setEventdetails({
                eventId: '65d5b17066590253933c7782',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 50,
                eventTitle: 'PEBBLE PAINTING EXTRAVAGANZA',

            });
        }
        if (tabId === "step-seven") {
            setEventdetails({
                eventId: '65d5b1ec66590253933c7788',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 50,
                eventTitle: '10-MIN CHALLENGE',

            });
        }
        if (tabId === "step-eight") {
            setEventdetails({
                eventId: '65d5b1bc66590253933c7785',
                minParticipants: 2,
                maxParticipants: 2,
                amount: 100,
                eventTitle: 'ART BEYOND SIGHT',

            });
        }
        if (tabId === "step-nine") {
            setEventdetails({
                eventId: '65d5b23166590253933c778b',
                minParticipants: 1,
                maxParticipants: 2,
                amount: 100,
                eventTitle: 'HAND PAINTING',

            });
        }
        if (tabId === "step-ten") {
            setEventdetails({
                eventId: '65d5b29766590253933c7791',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 50,
                eventTitle: 'DOODODDLE DELIGHT',

            });
        }

    };
    const handleClick = () => {
        //console.log("clicked", eventdetails);
        navigate("/event/registerinevent", { state: { ...eventdetails } });
    };

    return (
        <div className='ALLEVENT'>

            <section className="our-schedule-area">
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">FAS</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">

                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            onClick={() => handleTabClick('step-one')}

                                            className={`nav-link ${activeTab === 'step-one' ? 'active' : ''}`} id="tab-onr" data-toggle="tab" role="tab" aria-controls="step-one" aria-expanded="true">ART EXHIBITION</a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            onClick={() => handleTabClick('step-two')}

                                            className={`nav-link ${activeTab === 'step-two' ? 'active' : ''}`} id="tab-two" data-toggle="tab" role="tab" aria-controls="step-two" aria-expanded="true">DO-ART</a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            onClick={() => handleTabClick('step-three')}

                                            className={`nav-link ${activeTab === 'step-three' ? 'active' : ''}`} id="tab-three" data-toggle="tab" role="tab" aria-controls="step-three" aria-expanded="true">CINEART ODYSSEY</a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            onClick={() => handleTabClick('step-four')}

                                            className={`nav-link ${activeTab === 'step-four' ? 'active' : ''}`}
                                            id="tab-four" data-toggle="tab" role="tab" aria-controls="step-four" aria-expanded="true">LETTART</a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item" >
                                        <a
                                            onClick={() => handleTabClick('step-five')}

                                            className={`nav-link ${activeTab === 'step-five' ? 'active' : ''}`} id="tab-five" data-toggle="tab" role="tab" aria-controls="step-five" aria-expanded="true">RELAY ART CHALLENGE</a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            onClick={() => handleTabClick('step-six')}

                                            className={`nav-link ${activeTab === 'step-six' ? 'active' : ''}`} id="tab-6" data-toggle="tab" role="tab" aria-controls="step-6" aria-expanded="true">PEBBLE PAINTING EXTRAVAGANZA</a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            onClick={() => handleTabClick('step-seven')}

                                            className={`nav-link ${activeTab === 'step-seven' ? 'active' : ''}`} id="tab-8" data-toggle="tab" role="tab" aria-controls="step-8" aria-expanded="true">10-MIN CHALLENGE</a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            onClick={() => handleTabClick('step-eight')}

                                            className={`nav-link ${activeTab === 'step-eight' ? 'active' : ''}`} id="tab-9" data-toggle="tab" role="tab" aria-controls="step-9" aria-expanded="true">ART BEYOND SIGHT</a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            onClick={() => handleTabClick('step-nine')}

                                            className={`nav-link ${activeTab === 'step-nine' ? 'active' : ''}`} id="tab-10" data-toggle="tab" role="tab" aria-controls="step-10" aria-expanded="true"> HAND PAINTING</a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            onClick={() => handleTabClick('step-ten')}

                                            className={`nav-link ${activeTab === 'step-ten' ? 'active' : ''}`} id="tab-11" data-toggle="tab" role="tab" aria-controls="step-11" aria-expanded="true">DOODODDLE DELIGHT</a>
                                    </li>

                                </ul>
                            </div>
                            {/* Tab Content */}
                            <div className="tab-content" id="conferScheduleTabContent">
                                {activeTab === 'step-one' && <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> ART EXHIBITION </h3>
                                                            <p>We are inviting you all for our art exhibition. That will not
                                                                only have your artworks on display but also showcase items them
                                                                sale! Artworks created by you will be on display at the
                                                                exhibition. The stall will offer face painting, hand painting,
                                                                wall hangings, customized artifacts, and many more.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br /> 1. Participants can participate in the exhibition by
                                                                submitting their artwork.
                                                                <br /> 2. Artworks will be collected and showcased in the
                                                                exhibition.
                                                                <br /> 3. Artworks for sale will be exhibited separately and 20%
                                                                of profit will be kept by the fine arts society.
                                                                <br /> 4. Decisions of Judges will be considered final.
                                                                <br /> 5. Participants can not use mobile phones.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}>Date: 8-10<sup>th</sup> March.</span><br />
                                                            {/* <span style={{ color: 'white' }}>Entry Fee: Not disclosed. </span> <br /><br /> */}
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.

                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="ART EXHIBITION" id="fas0" className="btn confer-btn" onClick={handleClick}>Register </a> */}
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-two' && <div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> DO-ART </h3>
                                                            <p>Participants need to create artwork using only dots with the
                                                                provided art medium.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 1.5 hours
                                                                <br />Team size: 1 member<br /><br />
                                                                <br />1. Black Pen will be provided to each participant using
                                                                which they have to create the art.
                                                                <br />2. The paper sheet will be provided.
                                                                <br />3. Participants need to create artwork using only dots with
                                                                the provided art medium.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 8<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50/-  (Free for NITJ students.)</span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="DO-ART" id="fas1" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-three' && <div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> CINEART ODYSSEY </h3>
                                                            <p>We are sure you wanna paint your own phone case! Isn't that COOL?
                                                                With an added theme of freestyle art. Each student will be
                                                                provided with a mobile case that they can paint freely in their
                                                                own art.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 1 hours
                                                                <br />Team size: 1 member<br /><br />
                                                                <br />1. Each participant will be provided with acrylic color and
                                                                a mobile case that they can paint freely in their art style.
                                                                <br />2. Participants should complete their art
                                                                (Draw+paint+Dry)within a time limit.
                                                                <br />3. Participants cannot use their mobile phones for any
                                                                reference
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 8<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50-/ Per person (Free for NITJ students.)     </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="PHONEY-CASES" id="fas2" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-four' && <div className="tab-pane fade show active" id="step-four" role="tabpanel" aria-labelledby="thursday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> LETTART </h3>
                                                            <p>In this event, participants will create art by arranging words in
                                                                different fonts, styles, and sizes with various spacing.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 45 minutes
                                                                <br />Team size: 1 member<br /><br />
                                                                <br />1. Color will be provided to each participant.
                                                                <br />2. The paper sheet will be provided.
                                                                <br />3. In this event, participants will create art by arranging
                                                                words in different fonts, styles, and sizes with various
                                                                spacing.
                                                                <br />4. Mobile phone usage is not allowed.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50/- per person (Free for NITJ students.)   </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="LETTART" id="fas3" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-five' && <div className="tab-pane fade show active" id="step-five" role="tabpanel" aria-labelledby="friday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> RELAY ART CHALLENGE </h3>
                                                            <p>UTKANSH’23 brings to you RELAY ART CHALLENGE, an art event to
                                                                showcase your creativity and artistic talent. Participants would
                                                                choose a chit and draw the specified item.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 60 minutes
                                                                <br />Team size: 1-3 member<br /><br />

                                                                <li> Team would choose a chit and draw according to the given idea.</li>
                                                                <li> Create a relay art challenge where each artist contributes to a shared artwork, passing it along for others to continue and build upon.</li>
                                                                <li> Each artist will have a 20 minute time limit to contribute to the relay art challenge ,adding their creative touch before passing it on.</li>
                                                                <li> A3 sheet , colors and pencils will be provided.</li>
                                                                <li> Participants can not use mobile phones.</li>
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 6,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 8<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 100/- (Free for NITJ students.)  <br />      </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="RANDOM-ART-CHALLENGE" id="fas4" className="btn confer-btn" onClick={handleClick}>Register
                                                    </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-six' && <div className="tab-pane fade show active" id="step-6" role="tabpanel" aria-labelledby="friday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> PEBBLE PAINTING EXTRAVAGANZA </h3>
                                                            <p>In this event, participants will create art or draw by their
                                                                choice on a given leaf.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 60 minutes
                                                                <br />Team size: 1 member<br /><br />
                                                                <br />1. Colors will be provided.
                                                                <br />2. In this event one has to paint their ideas on the leaf
                                                                provided.
                                                                <br />3. Only a single leaf will be provided to each participant.
                                                                <br />4. Decisions of the Judges will be considered final.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 9<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50/- per person     (Free for NITJ students.)<br />     </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="PEBBLE PAINTING EXTRAVAGANZA" id="fas5" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-seven' && <div className="tab-pane fade show active" id="step-7" role="tabpanel" aria-labelledby="friday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> 10-MIN CHALLENGE </h3>
                                                            <p>In this event, participants will create art or draw by their
                                                                choice in 10 minutes.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 10 minutes
                                                                <br />Team size: 1 member<br /><br />
                                                                <br />1. Participants would draw by their choice in 10 minutes.
                                                                <br />2. A3 sheet, pencil, and colors will be provided.
                                                                <br />3. Participants can not use mobile phones.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 9<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50/- per person     (Free for NITJ students.) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="10-MIN CHALLENGE" id="fas6" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-eight' && <div className="tab-pane fade show active" id="step-8" role="tabpanel" aria-labelledby="friday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> ART BEYOND SIGHT </h3>
                                                            <p>Madhubani folk art, also known as Mithila painting, is a
                                                                traditional art form that originated in the Mithila region of
                                                                Bihar, India. Madhubani art is known for its intricate and
                                                                colorful designs, which often feature geometric patterns, nature
                                                                scenes, and religious themes.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 120 minutes
                                                                <br />Team size: 2 members<br /><br />
                                                                <br />1. Color Combo and the Paper sheet will be provided to each
                                                                participant.
                                                                <br />2. Participants will be painting a Madhubani (which is
                                                                Indian folk art) / mandala/another Indian form of art.
                                                                <br />3. Participants can use their mobile phones.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 6,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 9<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 100/- Per person (Free for NITJ students.) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="ART BEYOND SIGHT" id="fas7" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-nine' && <div className="tab-pane fade show active" id="step-9" role="tabpanel" aria-labelledby="friday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> HAND PAINTING </h3>
                                                            <p>Paint on hand refers to the act of applying paint to the skin on
                                                                the other hand or on his/her partner’s hand which symbolizes any
                                                                realistic figure.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />Time limit: 90 minutes
                                                                <br />Team size: 1-2 members<br /><br />
                                                                <br />1. Acrylic colors will be provided.
                                                                <br />2. One person paints on the other hand or on his/her
                                                                partner’s hand which symbolizes any realistic figure.
                                                                <br />3. At a particular angle, the figure should be depicted.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 6,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 100/- per person  (Free for NITJ students.)  </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="HAND PAINTING" id="fas8" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-ten' && <div className="tab-pane fade show active" id="step-10" role="tabpanel" aria-labelledby="friday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> DOODLE DELIGHT </h3>
                                                            <p>This will require students to design their emoji. The art needs
                                                                to reflect their expression through painting facial emotions,
                                                                places, types of animals, etc.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />
                                                                <h5>Time limit: 60 minutes</h5>
                                                                <h5>Team Size: 1 member</h5>
                                                                <li>Paper sheet will be provided.</li>
                                                                <li>Pencil,Pen,Eraser,Sharpener,Sketch color will be provided.</li>
                                                                <li>Theme: Culture of different countries.</li>
                                                                <li>Each participant will randomly select a chit , and based on the country name ,they have to create a doodle art that reflects the cultural elements of that specific country.</li>
                                                                <li>Participants can not use mobile phones.</li>


                                                            </p >
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50/- per person  (Free for NITJ students.) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                *Exclusively relevant to events with single participants
                                                            </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="DOODLE DELIGHT" id="fas9" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className=" row col-lg-12  col-sm-3">
                </div>
            </div>
        </div>
    );
}


