import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import userIcon from "../../../assets/images/profile.png";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(true);
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const navOptions = (
    <>
      <li>
        <Link to={`/phone`}>Phone</Link>
      </li>
      <li>
        <Link to={`/order/Huawei`}>Order</Link>
      </li>
      <li>
        <Link to={`/dashboard`}>Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{cart.length}</span>
          </div>
        </Link>
      </li>
      {!user && (
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Mobile Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Photo" src={user ? user?.photoURL : userIcon} />
              </div>
            </div>
            {isOpen && user && user.email && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-36"
              >
                <li>
                  <Link onClick={logOut}>Logout</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
