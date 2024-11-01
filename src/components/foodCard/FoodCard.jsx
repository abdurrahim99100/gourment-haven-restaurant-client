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
    const handleAddToCArt = item => {
        if (user && user?.email) {
            const { _id, image, name, price } = item;
            const cartItem = { menuItemId: _id, image, name, price, email: user.email };
            fetch('https://gourment-haven-restaurant-server.vercel.app/carts', {
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
    }
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute right-0 bg-black text-white px-3 m-5 rounded-sm'>{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCArt(item)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;