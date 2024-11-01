import { useQuery } from '@tanstack/react-query'
import useAuth from "./useAuth";

const useCart = () => {
    const { user, loading } = useAuth();
    const token = localStorage.getItem('access-token');
    const { isLoading, refetch, data: cart = [], error } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://gourment-haven-restaurant-server.vercel.app/carts?email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) {
                throw new error('network response not ok');
            }
            return res.json();
        }
    })
    return [cart, refetch, error, isLoading];

};

export default useCart;