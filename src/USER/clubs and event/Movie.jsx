import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Movie() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('step-1');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5b55366590253933c77ac',
        minParticipants: 1,
        maxParticipants: 10,
        amount: 250,

        eventTitle: 'FILM MAKING ',


    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-1") {
            setEventdetails({
                eventId: '65d5b55366590253933c77ac',
                minParticipants: 1,
                maxParticipants: 10,
                amount: 250,
                eventTitle: 'FILM MAKING ',

            });
        }
        if (tabId === "step-2") {
            setEventdetails({
                eventId: '65d5b35766590253933c779b',
                minParticipants: 3,
                maxParticipants: 5,
                amount: 200,
                eventTitle: 'MAD-ADS',

            });
        }
        if (tabId === "step-3") {
            setEventdetails({
                eventId: '65d5b32a66590253933c7798',
                minParticipants: 3,
                maxParticipants: 5,
                amount: 200,
                perTeam: true,
                eventTitle: 'CREATIVE CHAOS',

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
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">NITJ Movie Club (Deja Vu)</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-one" data-toggle="tab"  role="tab" aria-controls="step-one" aria-expanded="true"> FILM MAKING </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab"  role="tab" aria-controls="step-two" aria-expanded="true">MAD-ADS </a>
                                    </li>

                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab"  role="tab" aria-controls="step-three" aria-expanded="true">CREATIVE CHAOS</a>
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
                                                            <h3> FILM MAKING </h3>
                                                            <p> Filmmaking Competition is designed to allow young students to tell their stories about the ocean while discovering and enhancing their skills as filmmakers. Judged by an elite jury of professional filmmakers, the top three winners will receive a cash prize and all of the finalists will have their films screened in person.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <li>The film must be 2 to 5 minutes long.</li>
                                                                <li>Each team will have to make a new short film scripted on or after the December 2023.</li>
                                                                <li>Opening and/or closing credits are not required, but (if added) may add up to an additional 10 seconds in total.</li>
                                                                <li>Films may be in any language or have no dialogue at all.</li>
                                                                <li>Non-English audio (and important on-screen text) must</li>
                                                                <li>have English subtitles.Ensure that all content in your film (including footage, music, images, props, etc.) is your own. If you include any copyrighted or trademarked content, you must credit it to the rightful owner.</li>
                                                                <li>Entries containing any unauthorized content will be disqualified.</li>
                                                                <li>The theme for the competition would be announced ontheclub’sInstagrampage www.instagram.com/nitj.movie_club Completed movies (in .mp4 formats) and the name of the college and details of team members along with their role in the making of the movie (compiled in a PDF) must be uploaded to Google Drive by keeping the access Open To All. The form for submission of this drive link will be attached with the declaration of the topic on the Instagram post.</li>
                                                                <li>The drive folder should also contain a scanned copy of the college ID cards of all the people in the core team of the movie.</li>
                                                                <li>The deadline for submission is 8th March, 2024.</li>
                                                                <li>The event is also open to people outside NIT Jalandhar.</li>
                                                                {/* <li><br></br> <</li> */}
                                                            </p>
                                                            <br></br><br></br>
                                                            <span style={{ color: 'white' }}><b>Judging Criteria:</b></span>
                                                            <p>
                                                                <li>Editing</li>
                                                                <li>Cinematography</li>
                                                                <li>Script (originality and clarity of story)</li>
                                                                <li>Acting</li>
                                                                <li>Sound effects</li>
                                                                <li>Overall impact</li>


                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 10,000/- </b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 250/- </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="Filmmaking" id="movie0" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-2' && <div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="wednesday-tab">
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
                                                            <h3>Mad Ads </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            {/* <h5>This event is for NIT JALANDHAR students only.</h5> */}
                                                            <p>

                                                                <li>  In this event participants will have to produce advertisements for a product/ service in a proper way which is quite appealing to the audience.</li>
                                                                <li>  Teams will be required to come up with innovative ads.</li>
                                                                <li>  Based on the creativity and how innovative the ad is, teams will be shortlisted by the jury.</li>
                                                                <li>  Teams have to make a new product name, punch line and advertise the product/brand given to them.</li>
                                                                <li>  The teams must bring with them the camera, pen drive, and all the other equipment required by them for</li>
                                                                <li>  presenting their advertisement.Judging is done on the basis of the team's creativity, customer appeal and stage presence, spontaneity, content, adherence to the topic, on-stage presentation, coordination and overall appeal of the advertisement.</li>
                                                                <li>  Disobedience of rules may lead to disqualification.</li>
                                                                <li>  The decision of the judge is final and abiding.</li>
                                                                <li>  Participants should bring the institute's ID card along</li>
                                                                <li>  with them at the time of registration and must report on the scheduled time.</li>
                                                                <li>  It is a team event. Each team should have 3-5 members only.</li>
                                                                <li>  Topics would be provided on the spot.</li>
                                                                <li>  15 minutes preparation time for each team.</li>
                                                                <li>  Time limit for the performing the advertisement is 1-2 minutes .</li>
                                                            </p>
                                                            <br></br><br></br>

                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 6,000/- </b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 9<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 200/- </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    <a name="Filmmaking" id="movie0" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
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
                                                            <h3> CREATIVE CHAOS</h3>
                                                            <br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b><font size={4}> Event rules and guidelines</font> </b><br />
                                                                <br />
                                                                <li> The event is a team-based competition, and each team should consist of 3-5 members.</li>
                                                                <li> Teams are required to bring their own equipment, pen drives, and any other tools necessary for their presentation.</li>
                                                                <li> At the beginning of the competition, teams will draw slips at random from boxes labelled Genres, Element, Item. These elements will serve as the basis for their impromptu story. For example: If the Genre box draws Comedy, the Element box draws Nature and the Item bucket draws Pen, then the team has to make a short film including all the three drawn items.</li>
                                                                <li> Teams must create a compelling story on the spot, incorporating all the randomly selected 3 elements.</li>
                                                                <li> Each team will have a preparation time of 15 minutes after drawing their elements. The short clip that the teams have to make should be between the length of 1-3 minutes.</li>
                                                                <li> The teams then have to play their clips in front of the judges.Judging will be based on creativity, storytelling innovation, spontaneity, adherence to the randomly selected elements, and overall appeal of the story.</li>
                                                                <li> Disobedience of rules may lead to disqualification.</li>
                                                                <li> Teams must register by the specified deadline.</li>
                                                                <li> Participants must bring their institute's ID card for registration and must report at the scheduled time.</li>
                                                                <li> The decision of the judges is final and binding.</li>
                                                                <li> Topics for the stories will be provided on the spot, ensuring a fresh and unpredictable challenge for each team                                                                </li>
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 6,000/- </b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 8<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 200/- </span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="Filmmaking" id="movie0" className="btn confer-btn" onClick={handleClick}>Register </a>
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
            {/* Our Schedule Area End */}
            <div className="d-flex justify-content-around mb-3">
            </div>

        </div>

    )
}
