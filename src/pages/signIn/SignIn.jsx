import { useContext } from "react";
import { authContext } from "../../providers/AuthContext";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignIn = () => {
    const { signIn } = useContext(authContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log('loggedUser =>', loggedUser);
                Swal.fire({
                    title: "Login User Successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <Helmet>
                <title>Gourment | SignIn</title>
            </Helmet>
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-wrap items-center justify-center h-screen">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold">Stay connected with us!</h3>
                        <p className=" mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quia molestias delectus reprehenderit sequi iste ut, quod alias. Consequuntur, quis?</p>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 rounded shadow-md px-8 pt-6 pb-8 mb-4">
                        <form onSubmit={handleSubmit(onSubmit)} action="#">
                            {/* email */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email"
                                    {...register("email", { required: { value: true, message: 'Email is Required' } })} />
                                {errors.email?.type === "required"
                                    && (<span className="text-gray-400">{errors.email.message}</span>)}
                            </div>
                            {/* password */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2">Password</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************"
                                    {...register("password",
                                        { required: { value: true, message: 'Password is Required' } })} />
                                {errors.password?.type === 'required' && (<span className="text-gray-400">{errors.password.message}</span>)}
                            </div>
                            <div className="flex items-center justify-between">
                                <input type="submit" value={'Sign In'} className="font-bold py-2 px-4 rounded bg-gray-200 hover:cursor-pointer" />
                                <a className="font-bold py-2 px-4 rounded bg-gray-200" href="#">Forgot Password?</a>
                            </div>
                        </form>
                        <div className='my-2'>
                            <p>New Here? <Link to={'/sign-up'} className="text-green-600" >Create a New Account</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;