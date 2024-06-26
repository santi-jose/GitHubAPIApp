import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-hot-toast"

// create context for Authentication data
export const AuthContext = createContext();

// create hook for AuthContext
export const useAuthContext = () => {
    return useContext(AuthContext);
}

// create provider
export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
		const checkUserLoggedIn = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/auth/check", { credentials: "include" }); // error points to here
				const data = await res.json();
				setAuthUser(data.user); // null or authenticated user object
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		checkUserLoggedIn();
	}, []);

	return <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>{children}</AuthContext.Provider>;
}