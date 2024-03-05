import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Rajbhasha() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('step-1');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5d8d0a5858e4145844260',
        minParticipants: 1,
        maxParticipants: 1,
        amount: 100,
        eventTitle: 'MEHFIL',


    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-1") {
            setEventdetails({
                eventId: '65d5d8d0a5858e4145844260',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 100,
                eventTitle: 'MEHFIL',

            });
        }
        if (tabId === "step-2") {
            setEventdetails({
                eventId: '65d5d90da5858e4145844263',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 0,
                eventTitle: 'PRAGHYANSH',

            });
        }
        if (tabId === "step-3") {
            setEventdetails({
                eventId: '65d5e46ad6dab049c797fe56',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 100,
                eventTitle: 'PATROKAR BABU',

            });
        }
        if (tabId === "step-4") {
            setEventdetails({
                eventId: '65d5d922a5858e4145844266',
                minParticipants: 1,
                maxParticipants: 3,
                amount: 0,
                eventTitle: 'FILMY SANGRAM',

            });
        }
        if (tabId === "step-5") {
            setEventdetails({
                eventId: '65d5e4dfd6dab049c797fe59',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 0,
                eventTitle: 'JASHN-E-UTKANSH',

            });
        }


    };
    const handleClick = () => {
        //console.log("clicked", eventdetails);
        navigate("/event/registerinevent", { state: { ...eventdetails } });
    };

    return (
        <div className='ALLEVENT'>
            {/* Our Schedule Area Start */}
            <section className="our-schedule-area">
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Rajbhasha Samiti</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-onr" data-toggle="tab"  role="tab" aria-controls="step-one" aria-expanded="true"> MEHFIL </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab"  role="tab" aria-controls="step-two" aria-expanded="true">PRAGHYANSH </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab"  role="tab" aria-controls="step-three" aria-expanded="true">PATROKAR BABU</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-4')}

                                            className={`nav-link ${activeTab === 'step-4' ? 'active' : ''}`} id="tab-four" data-toggle="tab"  role="tab" aria-controls="step-three" aria-expanded="true">FILMY SANGRAM</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-5')}

                                            className={`nav-link ${activeTab === 'step-5' ? 'active' : ''}`} id="tab-five" data-toggle="tab"  role="tab" aria-controls="step-three" aria-expanded="true">JASHN-E-UTKANSH</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-6')}

                                            className={`nav-link ${activeTab === 'step-6' ? 'active' : ''}`} id="tab-six" data-toggle="tab" href="#step-six" role="tab" aria-controls="step-three" aria-expanded="true">KAVYA KALA</a>
                                    </li> */}
                                </ul>
                            </div>
                            {/* Tab Content */}
                            <div className="tab-content" id="conferScheduleTabContent">
                                {activeTab === 'step-1' && <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> MEHFIL </h3>
                                                            <p>This event is basically an open mic event in which each of the
                                                                participants will have to recite their self-written content. The
                                                                content must be in Hindi. It will lay down the benefits for new
                                                                emerging college student poet. Its an open mic competition where
                                                                students get chance to present whatever they vouch for in Hindi
                                                                language.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />

                                                                <br /> 1.There is individual participation.
                                                                <br /> 2. Students can present any poem, stand-up comedy, rap,
                                                                Shayari or song etc. in Hindi language.
                                                                <br /> 3. There will be one round only.
                                                                <br /> 4. There will be total 3 winners at 3 positions.
                                                                <br /> 5. The judgement of judges will be final.
                                                                <br /> 6. The content of each participant should be of minimum 2
                                                                minutes and maximum 3 minutes .
                                                                <br /> 7. The content presented is to be self written.
                                                                <br /> 8. The content should be decent, and it should not be
                                                                delivering any offensive message.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 6,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 100 INR/- per person </span> <br /><br />
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
                                                    <a onClick={handleClick} className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-2' && <div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> PRAGHYANSH </h3>
                                                            <p>This event is an extempore in which the participants will be
                                                                given any random topic. Each participant will have to speak on
                                                                the topic given to him in Hindi. The time limit will be told
                                                                before commencement of competition.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <h5>This event is for NIT JALANDHAR students only.</h5>
                                                                <br />1. There is individual participation.
                                                                <br />2. Each participant will be given a topic and they will have
                                                                to speak on that topic(extempore).
                                                                <br />3. The time limit is 1.5 minutes.
                                                                <br />4. There will be one round only.
                                                                <br />5. There will be total 3 winners at 3 positions.
                                                                <br />6. The judgement of judges will be final.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 4,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>
                                                                {/* Entry Fee: 150 INR/- per student(for
                                                                external
                                                                participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                per student(for NITJ student) */}
                                                                Entry Fee: Free.
                                                            </span> <br /><br />
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
                                                    <a onClick={handleClick} className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-3' && <div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> PATROKAR BABU </h3>
                                                            <p>This event is basically the modification of TV Debates or Common
                                                                man’s views as we see everyday. It will consist of various
                                                                participants and they will have to speak for or against the
                                                                topic provided to them in Hindi. It will enhance individual’s
                                                                speaking and communicational skills.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br /> 1. There is individual participation.
                                                                <br /> 2. Each participant will be given a topic before the
                                                                competition, and they will have to speak in for and against the
                                                                motion of topic (debate).
                                                                <br /> 3. There will be two rounds only.
                                                                <br /> 4. There will be total 3 winners at 3 positions.
                                                                <br /> 5. The judgement of judges will be final.
                                                                <br /> 6. Time limit will be asserted before commencement of
                                                                competition.
                                                                <br /> 7. During debate, first students have to present their
                                                                topic and then they will be given time for cross- questioning.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 6,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 9<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 100 INR/- per student </span> <br /><br />
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
                                                    <a onClick={handleClick} className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-4' && <div className="tab-pane fade show active" id="step-four" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> FILMY SANGRAM </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b> <br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            <li>There will be multiple teams.</li>
                                                            <li>Each team consists of maximum 3 participants.</li>
                                                            <li>There will be total 3 rounds and at end the teams with highest points will win.</li>
                                                            <li>There will be total 3 winning teams at 3 positions.</li>
                                                            <li>The judgement of judges will be final.</li>
                                                            {/* <span style="color:white">Reach 1 day prior to your event. </span><br><br>  */}
                                                        </div>
                                                        <br></br><br></br>
                                                        <span style={{ color: 'white' }}>
                                                            *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                            *Exclusively relevant to events with single participants
                                                        </span> <br /><br />
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" onClick={handleClick}>Register</a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-5' && <div className="tab-pane fade show active" id="step-five" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> JASHN-E-UTKANSH </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                            </p><p style={{ textAlign: 'left' }}>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines </font>
                                                                </b><br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            <li>There is individual participation.</li>
                                                            <li>Each participant will have to submit self written shayari/gazal that will be in hindi or urdu that will be posted on Instagram in form of reel.</li>
                                                            <li>The Participants should restrict their content through reels of duration 1 to 1.5 minutes.</li>
                                                            <li>There will be total 3 winners.</li>
                                                            <li>The judgement will be based on content to likes ratio 7:3.</li>
                                                            <li>The judgment of judges will be final.</li>
                                                            {/* <span style="color:white">Reach 1 day prior to your event. </span><br><br>  */}
                                                        </div>
                                                        <br></br><br></br>
                                                        <span style={{ color: 'white' }}>
                                                            *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                            *Exclusively relevant to events with single participants
                                                        </span> <br /><br />
                                                    </div>
                                                    <a className="btn confer-btn" onClick={handleClick}>Register</a>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="JASHN-E-UTKANSH" id="ra5"
                                     className="btn confer-btn">Register </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Schedule Area End */}
            <div className="d-flex justify-content-around mb-3">
            </div>
        </div>

    )
}
