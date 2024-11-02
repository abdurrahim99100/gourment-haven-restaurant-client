import axios from "axios";

const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL: 'https://gourment-haven-restaurant-server.vercel.app'
    })

    return axiosPublic;
};

export default useAxiosPublic;

// https://gourment-haven-restaurant-server.vercel.app