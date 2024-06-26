import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addclubcoordinator } from "../../Redux/participantsSlice";

const Addclubcoordinator = () => {
  const courseDetails = useLocation().state;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    id: courseDetails?._id,
    phoneno:"",
    emailid:"",
    userid: "",

  });

  // function to handle the input box change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };


  // function to handle the form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // checking for the empty fields
    // if (!userInput.lecture || !userInput.title || !userInput.description) {
    if (!userInput.userid ||!userInput.emailid||!userInput.phoneno) {
      toast.error("All fields are mandatory");
      return;
    }

    const res = await dispatch(addclubcoordinator(userInput));


    if (res?.payload?.success) {

      setUserInput({
        id: courseDetails.clubcoordinator?._id,

        userid: "",

      });
    }
  };

  // redirecting the user if no user details
  useEffect(() => {
    if (!courseDetails) {
      navigate(-1);
    }
  }, []);
  return (

    <div className=" text-white flex flex-col items-center justify-center gap-10 mx-16 min-h-[120vh]" >
      <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
        <header className="flex items-center justify-center relative">
          {/* <button
             
              className="relative   text-green-500"
            > */}
          <AiOutlineArrowLeft style={{ position: 'absolute', left: '1%' }} onClick={() => navigate(-1)} />
          {/* </button> */}
          <h3 className="text-xl text-yellow-500 font-semibold">
            Add New Coordinator
          </h3>
        </header>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <label
            htmlFor="userid"
            className="font-semibold text-xl cursor-pointer"
          >
            Name
          </label>
          <input
            type="text"
            name="userid"
            value={userInput.title}
            onChange={handleInputChange}
            placeholder="Enter the Name Of Coordinator"
            className="bg-transparent px-3 py-1 border"
          />
           <label
            htmlFor="userid"
            className="font-semibold text-xl cursor-pointer"
          >
            Phone No
          </label>
          <input
            type="number"
            name="phoneno"
            value={userInput.phoneno}
            onChange={handleInputChange}
            placeholder="Enter the Name Of Coordinator"
            className="bg-transparent px-3 py-1 border"
          />
           <label
            htmlFor="userid"
            className="font-semibold text-xl cursor-pointer"
          >
            Email Id
          </label>
          <input
            type="text"
            name="emailid"
            value={userInput.emailid}
            onChange={handleInputChange}
            placeholder="Enter the Name Of Coordinator"
            className="bg-transparent px-3 py-1 border"
          />

          {/* <textarea
              name="description"
              value={userInput.description}
              onChange={handleInputChange}
              placeholder="Enter the description for lecture"
              className="resize-none overflow-y-scroll h-24 bg-transparent px-3 py-1 border"
            /> */}
          {/* {userInput.videoSrc ? (
              <video
                src={userInput.videoSrc}
                muted
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              ></video>
            ) : (
              <div className="h-48 border flex items-center justify-center cursor-pointer">
                <label
                  htmlFor="lecture"
                  className="font-semibold text-xl cursor-pointer"
                >
                  Choose your video
                </label>
                <input
                  type="file"
                  name="lecture"
                  id="lecture"
                  onChange={getVideo}
                  accept="video/mp4,video/x-m4v,video/*"
                  className="hidden"
                />
              </div>
            )} */}

          <button className="btn-primary py-1 font-semibold text-lg">
            Add Coordinator
          </button>
        </form>
      </div>
    </div>

  );
};

export default Addclubcoordinator;
