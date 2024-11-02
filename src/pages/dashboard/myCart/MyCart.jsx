import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const token = localStorage.getItem('access-token');
    const [cart, refetch] = useCart();
    const allPrice = cart.reduce((acc, item) => item?.price + acc, 0);

    const handleDeleteCart = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,
                    {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Gourment | My Cart</title>
            </Helmet>
            <SectionTitle subHeading={'My Cart'} heading={'wanna add more?'} />
            {/* table */}
            <div className="overflow-x-auto w-9/12 bg-gray-100 rounded px-10 py-20 mb-10">
                <div className="flex justify-around my-2 text-lg uppercase font-bold">
                    <h3>Total items: {cart.length}</h3>
                    <h3>Total price: ${allPrice}</h3>
                    {
                        cart.length ? <Link to={'/dashboard/payment'}><button className="bg-yellow-500 py-1 px-2 rounded uppercase">pay</button></Link> : <button disabled className="bg-yellow-100 py-1 px-2 rounded uppercase text-md">pay</button>
                    }
                </div>
                <table className="table ">
                    {/* head */}
                    <thead className="bg-yellow-500 text-xl">
                        <tr>
                            <th>
                                No:
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        cart.length > 0 ? (
                            <tbody>
                                {/* row 1 */}
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button onClick={() => handleDeleteCart(item)} className="bg-[#e76161] p-2 rounded text-xl"><FaTrash /></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td><span className="text-gray-400">Cart is not available!</span></td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </>
    );
};

export default MyCart;