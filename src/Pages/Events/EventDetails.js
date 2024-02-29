import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./EventsDetails.css";

const EventDetails = () => {
  const navigate = useNavigate();

  const { initialEventData } = useLocation().state;
  const userData = useSelector((state) => state?.auth?.data);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(initialEventData.participant.find((obj) => obj.enrolledby === userData._id));
    console.log(" initialEventData", user);
  }, []);

  const [userInput, setUserInput] = useState({
    title: initialEventData?.title,
    club: initialEventData?.club,
    createdBy: initialEventData?.createdBy,
    description: initialEventData?.description,
    venue: initialEventData?.title,
    time: initialEventData?.time,
    date: initialEventData?.date,
    minparticipant: initialEventData?.minparticipant,
    maxparticipant: initialEventData?.maxparticipant,
    day: initialEventData?.day,
  });

  return (
    <div className="Event">
      <form className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[900px] my-10 shadow-[0_0_10px_black] relative ">
        <p className="text-accent cursor-pointer flex items-left justify-flexstart w-full gap-2">
          <AiOutlineArrowLeft onClick={() => navigate(-1)} />Go Back
        </p>

        {/* <h3 className="text-center text-2xl font-bold">
          <span>Participant Details</span>
        </h3> */}

        <h3 className="text-center text-2xl font-bold">
          <span> {userInput.title}</span>
        </h3>

        <main className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-1 Child1">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  College Name: {userInput.title}
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="category">
                Team Name: {userInput.club}
              </label>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Payment Reference Number: {user.paymentReferenceNumber}
                </label>
              </div>
            </div>
          </div>

        </main>
        <hr></hr>
        <h3 className="text-center text-2xl font-bold">
          <span>Member Details</span>
        </h3>

        <div className='table_wrapper'>
          {user?.participants?.length > 0 && <table className="table overflow-y-scroll" >
            <thead>
              <tr >
                <th>S No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {user?.participants?.map((element, index) => {
                return (

                  <tr key={element?._id}>
                    <td>{index + 1}</td>
                    <td>{element.participantName}</td>
                    <td>{element.participantEmail}</td>
                    <td >{element.participantPhone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>}
        </div>
      </form>


    </div>
  );
};

export default EventDetails;
