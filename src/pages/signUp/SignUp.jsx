import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { authContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "../shared/socialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser } = useContext(authContext);
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {

                const saveUser = { name: data.name, email: data.email, date: result.user.metadata.creationTime }

                if (result.user) {
                    axiosPublic.post('/users', saveUser)
                        .then(res => {
                            console.log(res);
                            if (res.data.insertedId) {
                                reset();
                                navigate('/sign-in')
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User Create Successfully!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    };

    return (
        <>
            <Helmet>
                <title>Gourment | SignUp</title>
            </Helmet>
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-wrap items-center justify-center h-screen">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold">Stay connected with us!</h3>
                        <p className=" mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quia molestias delectus reprehenderit sequi iste ut, quod alias. Consequuntur, quis?</p>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 rounded shadow-md px-8 pt-6 pb-8 mb-4">
                        <form onSubmit={handleSubmit(onSubmit)} action="#">
                            {/* name */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Name</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name"
                                    {...register("name", { required: { value: true, message: 'Name is Required' }, maxLength: { value: 20, message: 'Name Length is Under 20 Character' }, pattern: { value: /^[A-Za-z0-9 ]+$/, message: 'Only letters and numbers are allowed' } })} />
                                {/* error */}
                                {errors.name?.type === 'required' && (
                                    <span className="text-gray-400">{errors.name.message}</span>
                                )}
                                {errors.name?.type === 'maxLength' && (
                                    <span className="text-gray-400">{errors.name.message}</span>
                                )}
                                {errors.name?.type === 'pattern' && (
                                    <span className="text-gray-400">{errors.name.message}</span>
                                )}
                            </div>
                            {/* email */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email"
                                    {...register("email", { required: { value: true, message: 'Email is Required' } })} />
                                {errors.name?.type === 'required' && (<span className="text-gray-400">{errors.name.message}</span>)}
                            </div>
                            {/* password */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2">Password</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************"
                                    {...register("password", { required: { value: true, message: 'Password is Required' } })} />
                                {errors.name?.type === 'required' && (<span className="text-gray-400">{errors.name.message}</span>)}
                            </div>
                            <div className="flex items-center justify-between">
                                <input type="submit" value={'Sign Up'} className="font-bold py-2 px-4 rounded bg-gray-200 hover:cursor-pointer" />
                                <a className="font-bold py-2 px-4 rounded bg-gray-200" href="#">Forgot Password?</a>
                            </div>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;