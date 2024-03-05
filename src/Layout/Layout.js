import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Layout.css'
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  const role = useSelector((state) => state?.auth?.role);

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  };

  const handleLogout = async (event) => {
    hideDrawer();
    event.preventDefault();
    const res = dispatch(logout());
    if (res?.payload?.success) navigate("/");
  };

  return (
    <div className="min-h-[90vh]" >
      <div className="drawer absolute z-50 right-0 w-fit" >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"  >
          <label htmlFor="my-drawer" className="cursor-pointer" onClick={changeWidth} >
            <FontAwesomeIcon icon={faBars} style={{ right: '20px', top: '30px', position: 'fixed' }} />
          </label>
        </div>

        <div className="drawer-side w-0" >
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative margin_km_kro" style={{ overflow: 'visible',background:'linear-gradient(-45deg, #190b07, #110208, #08151a, #051814)' }}>
            <h5 style={{ fontWeight: '700',color: '#fff'  }}>Dashboard</h5>
            <hr style={{ borderColor: 'white' }}></hr>
            <div className="hidden-div" >
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/" >Home</Link></li>
              {/* <li onClick={hideDrawer}><Link style={{ textDecoration: 'none' }} to="/Gallery" >Gallery</Link></li> */}
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/clubsandevent" >Events</Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/megaevent" >Mega Events</Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff' }} to="/merchandise" >Merchandise</Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/accomodationPage" >Accommodation</Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/TeamMembers" >Team Members</Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/FacultyCoordinators" >Faculty Coordinator </Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/Developers" >Developers</Link></li>
              <li onClick={hideDrawer}><Link style={{ textDecoration: 'none',color: '#fff'  }} to="/Contacts" >Contact us</Link></li>

            </div>


            <li className="w-fit absolute right-3 z-50">
              <button onClick={hideDrawer}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>

            {isLoggedIn && role === "ADMIN" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/admin/dashboard"}>Events Dashboard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/admin/merchandise"}>Merchandise Dashboard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/admin/accommodation"}>Accomodation Dashboard</Link>
              </li>
            )}

            {isLoggedIn && role === "USER" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/user/dashboard"}>My Events</Link>
              </li>
            )}
            {isLoggedIn && role === "USER" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/merchandise/myOrders"}>My Orders</Link>
              </li>
            )}
            {isLoggedIn && role === "USER" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/accommodation/myBookings"}>My Bookings</Link>
              </li>
            )}


            {isLoggedIn && role === "COORDINATOR" && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/admin/dashboard"}>COORDINATOR Dashboard</Link>
              </li>
            )}

            {
              isLoggedIn &&
              role === 'ADMIN' &&
              (
                <li onClick={hideDrawer}>
                  <Link style={{ textDecoration: 'none',color: '#fff'  }} className="text-decoration-none no-underline" to={"/contact/newQuery"}>New Queries</Link>
                </li>
              )
            }

            {/* answered */}
            {
              isLoggedIn &&
              role === 'ADMIN' &&
              (
                <li onClick={hideDrawer}>
                  <Link style={{ textDecoration: 'none',color: '#fff'  }} className="text-decoration-none no-underline" to={"/contact/answeredQuery"}>Old Queries</Link>
                </li>
              )
            }
            {isLoggedIn && (
              <li onClick={hideDrawer}>
                <Link style={{ textDecoration: 'none',color: '#fff'  }} to={"/user/profile"}>My Profile</Link>
              </li>
            )}
            <li style={{ textDecoration: 'none', opacity: '0' }} className="text-decoration-none no-underline"></li>
            <li style={{ textDecoration: 'none', opacity: '0' }} className="text-decoration-none no-underline"></li>




            <li className="absolute bottom-2 w-[90%] flex flex-wrap justify-center bottom-0" style={{ marginTop: '20px' }}>
              {!isLoggedIn ? (
                <>
                  <button className="btn btn-green" onClick={hideDrawer}>
                    <Link style={{ textDecoration: 'none' }} to={"/login"}>Login / Signup</Link>
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-red" onClick={handleLogout}>
                    <Link style={{ textDecoration: 'none' }}>Logout</Link>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
