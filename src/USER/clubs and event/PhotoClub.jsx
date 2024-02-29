import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function PhotoClub() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('step-1');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5b834a8d0fcbeb3c7c1ca',
        minParticipants: 1,
        maxParticipants: 2,
        amount: 0,
        eventTitle: 'DRISHYA',

    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-1") {
            setEventdetails({
                eventId: '65d5b834a8d0fcbeb3c7c1ca',
                minParticipants: 1,
                maxParticipants: 2,
                amount: 0,
                eventTitle: 'DRISHYA',

            });
        }
        if (tabId === "step-2") {
            setEventdetails({
                eventId: '65d5b7b9a8d0fcbeb3c7c1c4',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 0,
                eventTitle: 'NAZARIYA',

            });
        }
        if (tabId === "step-3") {
            setEventdetails({
                eventId: '65d5b736a8d0fcbeb3c7c1c0',
                minParticipants: 3,
                maxParticipants: 5,
                amount: 0,
                eventTitle: 'SNAP TREASURE',

            });
        }
        if (tabId === "step-four") {
            setEventdetails({
                eventId: '65d5b27d66590253933c778e',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 0,
                eventTitle: 'CINEPULSE',

            });
        }
        if (tabId === "step-5") {
            setEventdetails({
                eventId: '65d5b7eea8d0fcbeb3c7c1c7',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 49,
                eventTitle: 'CINEPULSE',

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
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Netra-Photography Club </h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-onr" data-toggle="tab"  role="tab" aria-controls="step-one" aria-expanded="true">DRISHYA
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab"  role="tab" aria-controls="step-two" aria-expanded="true"> NAZARIYA
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab"  role="tab" aria-controls="step-three" aria-expanded="true">SNAP TREASURE
                                        </a>
                                    </li>
                                    {/* Nav Item */}

                                    <li className="nav-item ">
                                        <a onClick={() => handleTabClick('step-5')}

                                            className={`nav-link ${activeTab === 'step-5' ? 'active' : ''}`} id="tab-five" data-toggle="tab"  role="tab" aria-controls="step-five" aria-expanded="true"> Weekend Dairy (CINEPULSE)
                                        </a>
                                    </li>
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
                                                            <h3> DRISHYA </h3>
                                                            <p>It is an exquisite photography exhibition – a collection of beautiful photographs from all over the nation. Moreover, it’s not just an exhibition, it’s a photography competition as well as the best photographs will be awarded.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b><font size={4}> Event rules and guidelines</font> </b><br />
                                                                <li>All the entries must have subject as DRISHYA_NAME.</li>
                                                                <li>All the entries in the google form should be filled properly.</li>
                                                                <li>Each entry should consist of a maximum of 2 photographs.</li>
                                                                <li>Picture size should be greater than 5MP.</li>
                                                                <li>Mobile clicks are also allowed (picture resolution should be of greater than or equal to 5 MP).</li>
                                                                <li>Submit before 3 MARCH, 11:59 PM.</li>
                                                                <li>The decision taken by the judges shall be final and binding. In case of any disputes NIT Jalandhar reserves the rights in its sole discretion.</li>
                                                                <li>Registration: <a href='https://forms.gle/xDN1TLCiGS6fZ7Pf7' target='_blank'> Link</a></li>

                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 4,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 8-10<sup>th</sup> March.</span><br />
                                                            {/* <span style={{ color: 'white' }}>Entry Fee: 50 INR/- per participation<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/- per student(for NITJ student) </span> <br /><br /> */}
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
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
                                {activeTab === 'step-2' && <div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">
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
                                                            <h3> NAZARIYA </h3>
                                                            <p>Use your creativity to click theme based photos. Send us an entry from the theme given.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b><font size={4}> Event rules and guidelines</font> </b><br />
                                                                <li>This is an individual event.</li>
                                                                <li>All the entries must have FILE NAME as NAZARIYA_NAME_THEME</li>
                                                                <li>All the entries in the google form should be filled properly.</li>
                                                                <li>Story must be depicted through 3 - 6 photographs.</li>
                                                                <li>Picture size should be greater than 5 MP and mobile clicks are also allowed.</li>
                                                                <li>Submit before 7 MARCH, 11:59 PM NIT Jalandhar</li>
                                                                <li>Image EXIF data should be present and should be shown if demanded.</li>
                                                                <li>Participants should showcase their story telling skills using pictures only.</li>
                                                                <li>The decision taken by the judges shall be final and binding. In case of any disputes NIT Jalandhar reserves the rights in its sole discretion.</li>
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 4,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: All day (Online)</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: Free</span> <br /><br />
                                                            <span style={{ color: 'white' }}>Registration : <a href='https://forms.gle/1CuXDg6tY8sTKugXA' target='_blank'> Link</a></span> <br /><br />

                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
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
                                {activeTab === 'step-3' && <div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
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
                                                            <h3>SNAP TREASURE</h3>
                                                            <p>
                                                                <b> RULES:</b><br />
                                                            </p>
                                                            <li>Teams must assemble at BASKETBALL COURT at 10 AM(10 MARCH). Each team must consist of 3-5 members only.</li>
                                                            <li>The event will consist of 3 rounds, where each round is further split into levels.</li>
                                                            <li>Photos of different locations inside the campus will be uploaded as Insta stories on the official page of NETRA as hints.</li>
                                                            <li>Teams have to guess and reach the locations and click pictures as specified for each round.</li>
                                                            <li>Round 1 is a qualifying round where only the first 10 teams to complete the given tasks will be selected for Round 2.</li>
                                                            <li>The 10 teams will compete in Round 2 and only 5 teams with the best pictures will be selected for Round 3.</li>
                                                            <li>Teams will be judged on their creativity and quality of photos in Round 2 & 3 which will decide the final result.</li>
                                                            <li>The result will not be based on Round 1.</li>
                                                            <li>Teams must reach the venue on time as rules will be disclosed in further detail at the venue.</li>
                                                            <p />
                                                            <br />
                                                            REGISTRATION: FORM: <a href='https://forms.gle/7CFLdsyEeAvrcMmC9' target='_blank'>Link</a>

                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 4,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: Free </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" onClick={handleClick}>Register</a>

                                                    {/* <a name="SNAP TREASURE" id="ne4" className="btn confer-btn">Register </a> */}
                                                </div>
                                                {/* Single Schedule Area */}
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
                                                            <h3>CINEPULSE(Weekend Dairy) </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                "There is only you and your camera. The limitations in your
                                                                photography are
                                                                in yourself, for what we see is what we are.” The event indulges you
                                                                to click
                                                                amazing pictures this Utkansh and send them to us and let the world
                                                                see what
                                                                the fest means to you .The best entries , clicked during three days
                                                                of the fest , shall be awarded.<br />
                                                                <b>Prize:</b> Prizes worth ₹4000.<br />
                                                                <b>RULES:</b><br />
                                                            </p>
                                                            <li>All the entries must have file name as WEEKEND_NAME.</li>
                                                            <li>All the entries in the google form should be filled properly.</li>
                                                            <li>2 entries per person is allowed.</li>
                                                            <li>Clips should be in high quality 9:16 (horizontal).</li>
                                                            <li>Submit till 11 March, 06:00 PM.</li>
                                                            <li>Photos and Videos must be captured during Utkansh'24.</li>
                                                            <li>The decision taken by the judges shall be final and binding. In case of any disputes NIT Jalandhar reserves the rights in its sole discretion.</li>
                                                            <li>Registration : <a href='https://forms.gle/K8VAft3S3nvyUov49' target='_blank'>Link</a></li>

                                                            <p /><br />

                                                            <span style={{ color: 'white' }}><b>Prize Pool: 5,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: All day (Online)</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 49/- per person</span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />

                                                        </div>
                                                    </div>
                                                    <a className="btn confer-btn" onClick={handleClick}>Register</a>
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
