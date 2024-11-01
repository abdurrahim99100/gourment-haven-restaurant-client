import { useContext } from "react";
import { authContext } from "../providers/AuthContext";

const useAuth = () => {
    const auth = useContext(authContext)
    return auth;
};

export default useAuth;