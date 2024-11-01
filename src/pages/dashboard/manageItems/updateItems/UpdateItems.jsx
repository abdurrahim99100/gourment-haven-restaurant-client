import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateItems = () => {

    const menu = useLoaderData();
    const { name, price, recipe, category, _id } = menu;

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const result = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        if (result.data.success) {
            const menuItems = {
                name: data.name,
                recipe: data.details,
                category: data.category,
                image: result.data.data.display_url,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItems);
            console.log(menuRes);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Gourment | Update Items</title>
            </Helmet>
            <SectionTitle subHeading={"What's new?"} heading={"Update an items"} />
            <section className="w-full mx-auto pb-52">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f3f3f389] rounded max-w-6xl mx-auto px-10 py-8">
                    <div className="mb-4">
                        <label className="block text-md font-semibold mb-2">Recipe name *</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={name} placeholder="Recipe name"
                            {...register("name", { required: { value: true, message: 'Recipe name is Required' } })} />
                        {errors.email?.type === "required"
                            && (<span className="text-gray-400">{errors.email.message}</span>)}
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="relative w-full mb-4">
                            <label className="block text-md font-semibold mb-2">Category *</label>
                            <div className="relative">
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[40px] pr-10"
                                    defaultValue={category} // Use defaultValue instead of selected
                                    {...register("category", { required: { value: true, message: 'Category is Required' } })}
                                >
                                    <option value="" disabled>Select category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soups">Soups</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="fill-current h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M7 7l3 3 3-3H7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-md font-semibold mb-2">$Price *</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="number" defaultValue={price} step='0.01' placeholder="$Price"
                                {...register("price", { required: { value: true, message: 'Price is Required' } })} />
                            {errors.price?.type === "required"
                                && (<span className="text-gray-400">{errors.price.message}</span>)}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-md font-semibold mb-2">Recipe details *</label>
                        <textarea
                            className="shadow appearance-none border rounded w-full h-52 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
                            placeholder="Recipe details" defaultValue={recipe}
                            {...register("details", { required: { value: true, message: 'Recipe details is Required' } })}>
                        </textarea>
                        {errors.details?.type === "required" && (
                            <span className="text-gray-400">{errors.details.message}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <input type="file" className="shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" {...register("image", { required: { value: true, message: 'image is Required' } })} />
                        {errors.file?.type === "required" && (
                            <span className="text-gray-400">{errors.details.message}</span>
                        )}
                    </div>
                    <div>
                        <input
                            className="btn border-none gap-1 p-2 rounded bg-yellow-500 w-full text-center text-xl transition-transform duration-200 hover:scale-105 hover:bg-yellow-400 hover:shadow-lg focus:outline-none"
                            type="submit"
                            value="Update an Item"
                        />
                    </div>
                </form>
            </section>
        </>
    );
};

export default UpdateItems;