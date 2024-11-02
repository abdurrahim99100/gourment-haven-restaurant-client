import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosSecure = axios.create({
    baseURL: ('http://localhost:5000')
})

const useAxiosSecure = () => {

    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    })

    // Add a response interceptor
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
            logOut();
            navigate('/sign-in');
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;