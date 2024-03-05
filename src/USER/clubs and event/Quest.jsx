import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Quest() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('step-1');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5d884a5858e414584425a',
        minParticipants: 1,
        maxParticipants: 3,
        amount: 100,
        eventTitle: 'COGNITO',


    });


    const handleTabClick = (tabId) => {
        //console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-one") {
            setEventdetails({
                eventId: '65d5d884a5858e414584425a',
                minParticipants: 1,
                maxParticipants: 3,
                amount: 100,
                eventTitle: 'COGNITO',

            });
        }
        if (tabId === "step-2") {
            setEventdetails({
                eventId: '65d5d89aa5858e414584425d',
                minParticipants: 1,
                maxParticipants: 3,
                amount: 100,
                eventTitle: 'MONEY GPT',

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


                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Quest Club</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-onr" data-toggle="tab" role="tab" aria-controls="step-one" aria-expanded="true"> COGNITO </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab" role="tab" aria-controls="step-two" aria-expanded="true">MONEY GPT </a>
                                    </li>
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
                                                            <h3>COGNITO </h3><br />
                                                            <p>The Quizzing Booth is the ultimate General Quiz for the
                                                                inquisitive minds to answer the questions about anything under
                                                                the sun or even beyond. With questions ranging from History,
                                                                Physics, Literature , Science, Business, Sports and much more,
                                                                Quest Saga is the General Quiz to pacify your hunger for
                                                                knowledge.</p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <li>The team size can vary from a minimum of 1 to a maximum of 3 members.</li>
                                                                <li>Registration fees will be Rs 50/- lone wolf and 100/- per team.</li>
                                                                <li>The team members must be from the same institute and should have their valid college id cards with them during the event.</li>
                                                                <li>Each Quiz will have two stages: - The Prelims Round and The Final Stage Round.</li>
                                                                <li>The top 5 Teams from the Prelims round will reach the Stage Round, in each quiz.</li>
                                                                <li>A team can register and participate in any or both quizzes.</li>
                                                                <li>The detailed rules for the Prelims Sub-Rounds and the</li>
                                                                <li>Sub-Rounds of the Final Stage will be told by the</li>
                                                                <li>Quizmaster(s) during the conduction of respective events.</li>
                                                                <li>Some examples of the sub-rounds that will be conducted are: - Pounce and Bounce Quizzing, Rapid Fire Round, Buzzer Round, etc.</li>
                                                                <li>The team members are instructed not to follow any unfair means during the event, if found so, the team will be disqualified with immediate effect.</li>
                                                                <li>Any type of misbehavior or sabotage to the decorum of the event will not be tolerated and will lead to the debarkation of the team from the event(s).</li>
                                                                <li>The decision of the Quizmaster(s) will be final in case of any ambiguity.</li>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 8,000/-
                                                                </b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 8<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee:  &nbsp;&nbsp;50 INR lone wolf
                                                                </span> <br></br>
                                                                <span style={{ color: 'white' }}>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  100 INR per team <br /></span> <br /><br />
                                                                <span style={{ color: 'white' }}>
                                                                    *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                    *Exclusively relevant to events with single participants
                                                                </span> <br /><br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" onClick={handleClick}>Register
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
                                                            <h3>MONEY GPT</h3><br />
                                                            <p>MONEY GPT is the Pop-Culture quiz for the screen-lovers out there.
                                                                From Memes to Reels,Netflix to Doordarshan, Oscars to Filmfare,
                                                                Anime to MCU and much more, you will be tested and twisted by
                                                                the mind-tickling questions. </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <br />1. The team size can vary from minimum of 1 to maximum of 3
                                                                members.
                                                                <br />2. The team members must be from the same institute and
                                                                should have their valid college id cards with them during the
                                                                event.
                                                                <br />3. Each Quiz will have two stages: - The Prelims Round and
                                                                The Final Stage Round.
                                                                <br />4. The top 5 Teams from the Prelims round will reach the
                                                                Stage Round, in each quiz.
                                                                <br />5. A team can register and participate in any or both the
                                                                quizzes.
                                                                <br />6. The detailed rules for the Prelims Sub-Rounds and the
                                                                Sub-Rounds of the Final Stage will be told by the Quizmaster(s)
                                                                during the conduction respective events.
                                                                <br />7. Some examples of the sub-rounds that will be conducted
                                                                are: - Pounce and Bounce Quizzing, Rapid Fire Round, Buzzer
                                                                Round etc.
                                                                <br />8. The team members are instructed to not to follow any
                                                                unfair means during the event, if found so, the team will be
                                                                disqualified with immediate effect.
                                                                <br />9. Any type of misbehavior or sabotage to the decorum of the
                                                                event will not be tolerated and will lead to the debarration of
                                                                the team from the event(s).
                                                                <br />10. The decision of the Quizmaster(s) will be final in case
                                                                of any ambiguity.<br /><br />
                                                                <br />
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 8,000/-
                                                                </b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 10<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br></br>
                                                                <span style={{ color: 'white' }}>
                                                                    <br /></span>
                                                                <span style={{ color: 'white' }}>Entry Fee:  &nbsp;&nbsp;50 INR lone wolf
                                                                </span> <br></br>
                                                                <span style={{ color: 'white' }}>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  100 INR per team <br /></span> <br></br>
                                                                <span style={{ color: 'white' }}>
                                                                    *If the event registration fee is less than Rs. 200/person then participant have to pay Rs. 200 college entry fee.<br></br>
                                                                    *Exclusively relevant to events with single participants
                                                                </span> <br /><br />
                                                            </p>
                                                        </div>
                                                        <a className="btn confer-btn" onClick={handleClick}>Register
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Schedule Area End */}
            <div className="d-flex justify-content-around mb-3">
                {/* <div className="p-2"><h4>Chikku Kumar</h4>  <h5>+919534567582</h5></div>
    <div className="p-2"><h4>Adarsh Agarwal</h4>  <h5>+918299706635</h5></div> */}
            </div>
            {/* **** All JS Files ***** */}
            {/* jQuery 2.2.4 */}
            {/* Bootstrap */}
            {/* All Plugins */}
            {/* Active */}
            {/* NAvbar jQuery */}
            {/* Resource jQuery */}
        </div>

    )
}
