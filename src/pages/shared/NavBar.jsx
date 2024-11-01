import { Link, NavLink } from "react-router-dom";
import './navBar.css'
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const NavBar = () => {

  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleSignOut = () => {
    logOut();
  };

  const navItem = <>
    <li>
      <Link to={'/'}>home</Link>
    </li>
    <li>
      <Link to={'/menu'}>menu</Link>
    </li>
    <li>
      <Link to={'/order/salad'}>order</Link>
    </li>
    {
      user && isAdmin &&
      <li>
        <Link to={'/dashboard/admin-home'}>Dashboard</Link>
      </li>
    }
    {
      user && !isAdmin &&
      <li>
        <Link to={'/dashboard/user-home'}>Dashboard</Link>
      </li>
    }
    <li>
      <Link to={'dashboard/my-cart'}>
        <button className="btn bg-gray-400 border-none">
          Inbox
          <div className="badge badge-secondary bg-[#ee24c3] border-none">+{cart?.length || 0}</div>
        </button>
      </Link>
    </li>
    {/* conditional users */}
    {
      user ?
        <li>
          <Link onClick={handleSignOut}>logOut</Link>
        </li>
        :
        <li>
          <Link to={'/sign-in'}>SignIn</Link>
        </li>
    }
  </>
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white justify-between px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="navBar-menu-item-li menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navItem}
          </ul>
        </div>
        <NavLink className='uppercase' to={'/'} >gourment haven<span className="block text-end">restaurant</span></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="navBar-menu-item-li menu menu-horizontal uppercase gap-3 text-lg font-medium">
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;