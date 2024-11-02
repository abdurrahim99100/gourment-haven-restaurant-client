import { useContext } from "react";
import { authContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const { image, name, price, recipe } = item;
    const handleAddToCart = item => {
        if (user && user?.email) {
            const { _id, image, name, price } = item;
            const cartItem = { menuItemId: _id, image, name, price, email: user.email };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            }
            )
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
        } else {
            Swal.fire({
                text: "Login now!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in', { state: { from: location } })
                }
            });
        }
    };

    return (
        <div className="card card-compact bg-base-100 w-[380px] md:w-[340px] lg:w-[320px] xl:w-[380px] shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute right-0 bg-black text-white px-3 m-5 rounded-sm'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn px-6 py-3 text-md bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:from-[#E1C16E] hover:to-[#A67B5B] transform transition duration-300 ease-in-out border-none"
                    >
                        Buy Now
                    </button>


                </div>
            </div>
        </div>
    );
};

export default FoodCard;