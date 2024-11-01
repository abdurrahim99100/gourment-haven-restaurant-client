import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    });

    const handleChangeRole = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1300,
                            });
                        }
                    })
            }
        })
    };

    // handleDeleteUser
    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(data => {
                        console.log(data)
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
                <title>Gourment | All Users</title>
            </Helmet>
            <SectionTitle subHeading={'How many'} heading={'manage all users'} />
            <section className="overflow-x-auto w-9/12 bg-gray-100 rounded px-10 py-20 mb-10">
                <div className="my-2 text-lg uppercase font-bold">
                    <h3>Total Users: {users.length} </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 text-xl">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.length > 0 ? (users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <span className="bg-green-300 px-2 py-1 rounded">Admin</span> : <button onClick={() => handleChangeRole(user)}
                                                className="bg-[#3cc043] p-2 rounded text-xl"><FaUsers /></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)}
                                            className="bg-[#e76161] p-2 rounded text-xl"><FaTrash /></button>
                                    </td>
                                </tr>)) : <tr>
                                    <td>User is not available</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AllUsers;