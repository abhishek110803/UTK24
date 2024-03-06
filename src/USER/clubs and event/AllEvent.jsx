import React from 'react';
import { Link } from 'react-router-dom';
import '../css/clubsAndEvent.css'; // Assuming you have the CSS file in your project

function ClubCard({ clubName, link }) {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="card1234">
                <div className={`cover item-${clubName.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h1>{clubName}</h1>
                    <div className="card1234-back">
                        <Link to={`${link}`}>
                            View Events
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AllEvent() {
    return (
        <div className='ALLEVENT'>
            <h2 className='alleventhead'>All Clubs and Events</h2>
            <div className="row12">
                <ClubCard clubName="Bhangra" link="/Clubevents/BhangraClub" />
                <ClubCard clubName="Dance" link="/Clubevents/Dance" />
                <ClubCard clubName="Drama" link="/Clubevents/Drama" />
                <ClubCard clubName="FAS" link="/Clubevents/Fas" />
                <ClubCard clubName="Fashion" link="/Clubevents/Panache" />
                <ClubCard clubName="Music" link="/Clubevents/Music" />
                <ClubCard clubName="Regional Language Club" link="/Clubevents/RLC" />
                {/* <ClubCard clubName="Animation" link="/Clubevents/Animation" /> */}
                <ClubCard clubName="Movie" link="/Clubevents/Movie" />
                <ClubCard clubName="LADC" link="/Clubevents/Ladc" />
                <ClubCard clubName="Photography" link="/Clubevents/PhotoClub" />
                <ClubCard clubName="The Quest" link="/Clubevents/Quest" />
                <ClubCard clubName="Rajbhasha" link="/Clubevents/Rajbhasha" />
                <ClubCard clubName="Sanskriti" link="/Clubevents/Sanskriti" />
            </div>
        </div>
    );
}

export default AllEvent;
