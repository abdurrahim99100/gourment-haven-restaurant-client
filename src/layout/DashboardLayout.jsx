import { Link, Outlet } from "react-router-dom";
import { FaHome, FaRegCalendarAlt, FaWallet, FaCartArrowDown, FaCommentDollar, FaBookmark, FaShopify, FaCreativeCommonsBy, FaUserFriends, FaUtensils, FaList, FaBook } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {

    const [cart] = useCart();

    // TODO SET PERMANENT ROLE ADMIN;
    const [isAdmin] = useAdmin()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side bg-yellow-600">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 uppercase">
                    {
                        isAdmin ? <>
                            {/* Sidebar content here */}
                            <li>
                                <Link to={'admin-home'}><FaHome />admin home</Link>
                            </li>
                            <li>
                                <Link to={'admin-add-items'}><FaUtensils />add item</Link>
                            </li>
                            <li>
                                <Link to={'admin-manage-items'}><FaList />manage item</Link>
                            </li>
                            <li>
                                <Link to={'admin-manage-booking'}> <FaBook />manage booking</Link>
                            </li>
                            <li>
                                <Link to={'admin-all-users'}> <FaUserFriends />all users</Link>
                            </li>
                        </> : <>
                            {/* Sidebar content here */}
                            <li><Link to={'user-home'}><FaHome />user home</Link></li>
                            <li><Link to={'user-reservation'}><FaRegCalendarAlt />Reservation</Link></li>
                            <li><Link to={'user-payment-history'}><FaWallet /> payment history</Link></li>
                            <li>
                                <Link to={'my-cart'}>
                                    <FaCartArrowDown />my cart
                                    <div className="badge badge-secondary bg-[#ee24c3] border-none">+{cart?.length || 0}</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'user-add-review'}> <FaCommentDollar />add review</Link>
                            </li>
                            <li>
                                <Link to={'user-my-booking'}><FaBookmark /> my booking</Link>
                            </li>
                        </>
                    }

                    {/* bottom option */}
                    <div className="flex w-full items-center rounded-full">
                        <div className="flex-1 border-b border-gray-300"></div>
                        <span className="text-black text-lg font-semibold leading-8 px-8 py-3">Or</span>
                        <div className="flex-1 border-b border-gray-300"></div>
                    </div>
                    <li><Link to={'/'}><FaHome /> home</Link></li>
                    <li><Link><IoIosMenu /> menu</Link></li>
                    <li><Link><FaShopify />shop</Link></li>
                    <li><Link><FaCreativeCommonsBy />contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;