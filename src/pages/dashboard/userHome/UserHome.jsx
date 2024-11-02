import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { FaBook, FaHome, FaPhone, FaShoppingCart, FaStreetView, FaWallet } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Gourment | User Admin</title>
      </Helmet>
      <section className="container mx-auto">
        {/*  */}
        <div className="mx-20">
          <h3 className="text-3xl font-mono my-5">Hi,<br />{user?.displayName}, Welcome To Gourment Haven Restaurant</h3>
          {/*  */}
          <div className="grid grid-cols-3 gap-5">
            <div className="flex items-center gap-5 p-[60px] text-white rounded bg-gradient-to-tr from-[#BB34F5] to-[#FCDBFF]">
              <FaWallet className="text-6xl" />
              <div>
                <h4 className="text-4xl font-semibold">720</h4>
                <span className="font-light text-2xl">Menu</span>
              </div>
            </div>
            <div className="flex items-center gap-5 p-[60px] text-white rounded bg-gradient-to-tr from-[#D3A256] to-[#FDE8C0]">
              <FaHome className="text-6xl" />
              <div>
                <h4 className="text-4xl font-semibold">Orders</h4>
                <span className="font-light text-2xl">Pending Order</span>
              </div>
            </div>
            <div className="flex items-center gap-5 p-[60px] text-white rounded bg-gradient-to-tr from-[#FE4880] to-[#FECDE9]">
              <FaPhone className="text-6xl" />
              <div>
                <h4 className="text-4xl font-semibold">+031</h4>
                <span className="font-light text-2xl">Contact</span>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex mt-5 mx-20">
          <div className="w-1/2 h-[50vh] bg-[#d19f5483] flex flex-col items-center justify-center">
            {
              user ? (<>
                <img
                  src={user?.photoURL}
                  className="border-4 border-gray-400 rounded-full shadow-lg w-44 h-44 object-cover"
                  alt=""
                />
                <p className="my-2 text-3xl font-mono font-bold uppercase">{user?.displayName}</p>
              </>) : (<>
                <p className="text-lg font-mono font-bold">Loading...</p>
              </>)
            }
          </div>
          {/* your activities */}
          <div className="flex flex-col items-center justify-center w-1/2 h-[50vh] bg-[#FEF9C3]">
            <div>
              <h3 className="uppercase text-4xl font-mono my-2">your activities</h3>
              <div>
                {/* order */}
                <div className="flex gap-2 items-center text-xl text-green-600">
                  <FaShoppingCart />
                  <span>Orders : 14</span>
                </div>
                {/* review */}
                <div className="flex gap-2 items-center text-xl text-yellow-600">
                  <FaStreetView />
                  <span>Reviews : 6</span>
                </div>
                {/* booking */}
                <div className="flex gap-2 items-center text-xl text-purple-600">
                  <FaBook />
                  <span>Bookings : 10</span>
                </div>
                {/* payments */}
                <div className="flex gap-2 items-center text-xl text-lime-600">
                  <FaWallet />
                  <span>Payments : 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserHome;