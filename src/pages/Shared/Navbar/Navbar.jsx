import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <>
      <li>
        <NavLink className='uppercase' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className='uppercase' to='/contact'>
          Contact Us
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink className='uppercase' to='/dashboard/adminHome'>
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink className='uppercase' to='/dashboard/userHome'>
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink className='uppercase' to='/menu'>
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink className='uppercase' to='/order/salad'>
          Order Food
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink className='uppercase' to='/dashboard/cart'>
              <button className='btn'>
                <FaShoppingCart className='mr-2' />
                <div className='badge badge-secondary'>+{cart?.length}</div>
              </button>
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut} className='btn btn-ghost'>
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink className='uppercase' to='/login'>
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className='navbar fixed z-10 bg-opacity-20 bg-black text-white max-w-screen-xl'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              {navOptions}
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'>Bistro Boss</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn'>Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
