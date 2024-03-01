import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Ladc() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('step-1');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5d7f3a5858e4145844251',
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,

        eventTitle: 'HAIKU',


    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-1") {
            setEventdetails({
                eventId: '65d5d7f3a5858e4145844251',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 0,
                eventTitle: 'HAIKU',

            });
        }
        if (tabId === "step-2") {
            setEventdetails({
                eventId: '65d5d80ba5858e4145844254',
                minParticipants: 1,
                maxParticipants: 1,
                amount: 0,
                eventTitle: 'OPEN MIC',

            });
        }
        if (tabId === "step-3") {
            setEventdetails({
                eventId: '65d5d841a5858e4145844257',
                minParticipants: 3,
                maxParticipants: 3,
                amount: 200,
                eventTitle: 'VOXWARS',

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
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Literary and Debating Club</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-onr" data-toggle="tab"  role="tab" aria-controls="step-one" aria-expanded="true"> HAIKU </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab"  role="tab" aria-controls="step-two" aria-expanded="true">OPEN MIC </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab"  role="tab" aria-controls="step-three" aria-expanded="true">VOXWARS</a>
                                    </li>
                                    {/* Nav Item */}
                                    {/* <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-4')}

                                            className={`nav-link ${activeTab === 'step-4' ? 'active' : ''}`} id="tab-four" data-toggle="tab" href="#step-four" role="tab" aria-controls="step-four" aria-expanded="true">JUDGY</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-5')}

                                            className={`nav-link ${activeTab === 'step-5' ? 'active' : ''}`} id="tab-four" data-toggle="tab" href="#step-five" role="tab" aria-controls="step-four" aria-expanded="true">SECRET JAR</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-6')}

                                            className={`nav-link ${activeTab === 'step-6' ? 'active' : ''}`} id="tab-four" data-toggle="tab" href="#step-six" role="tab" aria-controls="step-four" aria-expanded="true">CARPE DIEM</a>
                                    </li> */}
                                </ul>
                            </div>
                            {/* Tab Content */}
                            <div className="tab-content" id="conferScheduleTabContent">
                                {activeTab === 'step-1' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-one" role="tabpanel">
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
                                                            <h3>HAIKU </h3>
                                                            <p>
                                                                Oratorio is a series of mini events all revolving around
                                                                literature, oration and pure fun. In HAIKU the
                                                                participants are given a random sentence to begin with and they
                                                                have to build a whole story around it. It makes for a witty,
                                                                sharp, and fun games.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <br />1. NO such strict eligibility is specified as anyone can
                                                                participate.
                                                                <br />2. Two persons will pick chits and will be given 2 mins to
                                                                frame their story and then, both of them will be given a time of
                                                                2 mins to speak before their individual judges simultaneously.
                                                                At the same time before starting their story, another two fresh
                                                                participants will pick up their chit and start framing their
                                                                stories for the time in which the previous participants will be
                                                                reciting their masterpieces.<br /> <br />
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                    4,000/-</b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: Not disclosed. </span> <br /><br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="ladc0" name="HAIKU" onClick={handleClick}>Register
                                                    </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}

                                {activeTab === 'step-2' && <div aria-labelledby="tuesday-tab" className="tab-pane fade show active" id="step-two" role="tabpanel">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info align-items-center">
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3>OPEN MIC</h3>
                                                            <p>
                                                                Oratorio is a series of mini events all revolving around
                                                                literature, oration, and pure fun. In OPEN MIC a page
                                                                from a book is taken and given to each participant.
                                                                Their task is to blackout a few words from this page and form a
                                                                poem out of the remaining words. A tricky and mindful challenge
                                                                for all the participants!
                                                                <br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <li> A total of 5 minutes per speaker will be allotted.</li>
                                                                <li> Literary-related stuff, such as poetry, college-related anecdotes, storytelling, and jokes, is allowed, but no singing.</li>
                                                                <li> It's not a competition but a reward-based event</li>
                                                            </p>
                                                            <br />
                                                            <p style={{ color: 'white' }}>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                    4,000/-</b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: Not disclosed. </span> <br /><br />
                                                                <br />
                                                            </p>
                                                        </div>
                                                        <a className="btn confer-btn" id="ladc1" name="OPEN MIC" onClick={handleClick}>Register
                                                        </a>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                </div>
                                                {/* Single Schedule Area */}
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}

                                {activeTab === 'step-3' && <div aria-labelledby="wednesday-tab" className="tab-pane fade show active" id="step-three" role="tabpanel">
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
                                                            <h3>VOXWARS </h3>
                                                            <p>
                                                                Oratorio is a series of mini-events all revolving around
                                                                literature, oration, and pure fun. In VOXWARS every
                                                                contestant will have a panel before them. They have to convince
                                                                the panel as to why their favorite book is worth a read!
                                                                Convince your way into the panel's heart!
                                                                <br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <li>Three speakers for each team.</li>
                                                                <li>For substantive speeches, 3 minutes. One knock at the 45 secs, another at the 2nd minute and 30 secs and final knocks at 3 mins.</li>
                                                                <li>POIs allowed during substantive speeches.</li>
                                                                <li>For reply, 1 minute , 30 secs. One knock at the end of time duration.</li>
                                                                <li>No POIs allowed during reply speeches.</li>
                                                                <li>Speaker’s role attached.</li>
                                                                <li>Adjudication functions are also attached.</li>
                                                                <li>Motions will revolve around various theme and time of preparation will be 30 minutes.</li>
                                                                <li>There will be a preliminary rounds and followed by semi final and grand final.</li>
                                                                <li>Match up for preliminary will be made based on random order.</li>
                                                                <li>This will be a knockout competition.</li>
                                                                <li>In the preliminary and elimination round, sides (government or opposition) will be determined by coin toss.</li>
                                                                <li>Adjudicators’ decision cannot be cancelled, but we can seek for responsibility.</li>
                                                                <li>Case-building may not involve anyone other than the three team members.</li>
                                                            </p><p style={{ color: 'white' }}>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                    7,000/-</b></span><br /><br />
                                                                Date: 8-9<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: 200/- per person </span> <br /><br />
                                                            </p><br /><br />
                                                            <p />
                                                        </div>
                                                    </div>
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="ladc2" name="VOXWARS" onClick={handleClick}>Register </a>
                                                </div>
                                                {/* Single Schedule Area */}
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-4' && <div aria-labelledby="monday-tab" className="tab-pane fade  show active" id="step-four" role="tabpanel">
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
                                                            <h3> JUDGY </h3>
                                                            <p>
                                                                Oratorio is a series of mini-events all revolving around
                                                                literature, oration, and pure fun. In JUDGY every participant is
                                                                shown the cover page of a book they haven't read before. And
                                                                guess what?
                                                                They are asked to judge the book by its cover! Interesting,
                                                                right?
                                                                Let's see people come up with innovative, funny, and out of box
                                                                thesis for each book!<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <br />1. Each participant is given a cover page that is selected
                                                                at random.
                                                                <br />2. The participant is given 5 minutes to prepare following
                                                                which he/she has to talk about the book’s plot for 2
                                                                minutes.
                                                                <br />3. Participants are allowed to use rough sheets to jot down
                                                                their ideas, but the usage of phones is prohibited.
                                                                <br /><br />
                                                            </p>
                                                            <p style={{ color: 'white' }}>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                    3,000/-</b></span><br /><br />
                                                                Date: 24<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: FREE </span>
                                                            </p><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="ladc3" name="JUDGY" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-5' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-five" role="tabpanel">
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
                                                            <h3> SECRET JAR</h3>
                                                            <p>
                                                                Every participant will be given a sheet of paper and a topic.
                                                                They will have to write their case on their respective topic for
                                                                a time duration of 5 minutes.
                                                                Once everyone is done the sheets are collected and randomly
                                                                mixed and then distributed
                                                                One of the participants is chosen at random and they have to
                                                                read it out loud.
                                                                The speaker shall then choose another person who will be giving
                                                                rebuttals to the given speech. The duration will be 1 min per
                                                                speaker.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                            </p><p style={{ textAlign: 'left' }}>
                                                                <br />1. This event is open for all.
                                                                <br />2. Each day multiple rounds will be conducted. Each round
                                                                will consist of minimum 6 and maximum 10 participants.
                                                                <br />3.Each participant can participate only once during the
                                                                entire day of event(but for sure can participate each day) to
                                                                promote uniformity among the candidates.
                                                                <br />4.A topic will be given to all the participants and they
                                                                will have to write/build their case for/against the motion. The
                                                                duration for building your motion will be 5 minutes. The word
                                                                limit is 250 words.
                                                                <br />5.The sheets will be anonymous and will be collected and
                                                                shuffled in a bowl/jar, a random participant will be asked to
                                                                pick any one sheet and read it out loud.
                                                                <br />6.Then that participant will nominate another participant,
                                                                who will be giving rebuttals against the speech. The duration
                                                                for giving the rebuttals will be 1 minute.
                                                                <br />7.Then that participant will pick another sheet from the jar
                                                                and read out and this will continue until all the sheets are
                                                                done!
                                                                <br />8.Each round will last for around 30-40 minutes.
                                                                <br />9.Each participant will be rewarded points according to
                                                                their performance.
                                                            </p><br />
                                                            <p style={{ color: 'white' }}>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                    3,000/-</b></span><br /><br />
                                                                Date: 24-26<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: FREE </span>
                                                            </p><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="ladc4" name="SECRET JAR" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-6' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-six" role="tabpanel">
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
                                                            <h3> CARPE DIEM</h3>
                                                            <p>
                                                                No shying away, no double thoughts!
                                                                Gather all your courage and put that creative mind to work with
                                                                the most exciting - OPEN MIC!
                                                                “Carpe Diem", An Open Mic Fest bringing you storytelling,
                                                                poetry, and comedy together
                                                                A beautiful blend of spoken word art forms. This will provide a
                                                                platform where people are innately encouraged to be themselves
                                                                and voice their feelings and opinions without hesitance
                                                                You won’t be judged, you won’t be controlled, it’s all about
                                                                connecting—sans mobile phones, of course.
                                                                <br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                            </p><p style={{ textAlign: 'left' }}>
                                                                <br />1. A total of 5 minutes per speaker will be allotted.
                                                                <br />2. Literary-related stuff, such as poetry, college-related
                                                                anecdotes, storytelling, and jokes, is allowed, but no singing.
                                                                <br />3. It's not a competition but a reward-based event.<br /><br />
                                                            </p><br />
                                                            <p style={{ color: 'white' }}>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                    3,000/-</b></span><br /><br />
                                                                Date: 25-26<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: FREE </span>
                                                            </p><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="ladc5" name="CARPE DIEM" onClick={handleClick}>Register </a>
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
            <div className="container">
                <div className=" row col-lg-12  col-sm-3 justify-content-center"></div>
            </div>

        </div>

    )
}
