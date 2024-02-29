import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../../Redux/authSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state?.auth?.data);
   //console.log("userData",userData);
  // function to handle the cancel subscription of course
  const handleCourseCancelSubscription = async () => {
    await dispatch(getUserData());
  };

  useEffect(() => {
    // getting user details
    dispatch(getUserData());
  }, []);
  return (
    // <Layout>
    <div className="flex items-center justify-center h-[120vh]">
        <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-80 shadow-[0_0_10px_black]">
          {/* <img
            className="w-40 m-auto rounded-full border border-black"
            src={userData?.avatar?.secure_url}
            alt="user profile image"
          /> */}

          <h3 className="text-xl font-semibold text-center capitalize">
            {userData.fullName}
          </h3>

          <div className="">
            <p>Email :   &nbsp;     {userData?.email}</p><br></br>
            {/* <p>Role :   &nbsp;&nbsp;&nbsp; {userData?.role}</p>
            <br></br> */}
            <p>Phone :   &nbsp;     {userData?.phone}</p><br></br>
            
         
          </div>

          {/* button to change the password */}
          <div className="flex items-center justify-between gap-2">
            <Link
              to={
                userData?.email === "test@gmail.com"
                  ? "/denied"
                  : "/changepassword"
              }
              className="w-1/2 border border-yellow-600 hover:border-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center"
              >
              <button> Change Password</button>
            </Link>

            <Link
              to={
                userData?.email === "test@gmail.com"
                  ? "/denied"
                  : "/user/editprofile"
              }
              className="w-1/2 border border-yellow-600 hover:border-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center"
            >
              <button>Edit <br></br> Profile</button>
            </Link>
          </div>

          {userData?.subscription?.status === "active" && (
            <button
              onClick={handleCourseCancelSubscription}
              className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center"
            >
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    // </Layout>
  );
};

export default Profile;
