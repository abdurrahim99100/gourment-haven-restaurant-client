import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const axiosSecure = useAxiosSecure();
    const [menu, , refetch] = useMenu();

    // handleDeleteUser
    const handleDeleteUser = item => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
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
                <title>Gournemt | Manage Items</title>
            </Helmet>
            <SectionTitle subHeading="Hurry Up" heading="manage all items" />
            <section className="overflow-x-auto w-9/12 bg-gray-100 rounded px-10 py-20 mb-10">
                <div className="my-2 text-lg uppercase font-bold">
                    <h3>Total Items : {menu.length} </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 text-xl">
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Deleted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.length > 0 ? (menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img className="w-[75px] rounded" src={item.image} alt="" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        {
                                            <Link to={`/dashboard/admin-update-items/${item._id}`}>
                                                <FaEdit className="w-[36px] h-[36px] rounded p-2 bg-yellow-600 text-xl" />
                                            </Link>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(item)}
                                            className="bg-[#e76161] p-2 rounded text-xl"><FaTrash /></button>
                                    </td>
                                </tr>)) : <tr>
                                    <td>Items not available</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default ManageItems;