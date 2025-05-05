import { useNavigate } from "react-router-dom";
import { setToken } from "../features/auths/auth.slice";
// import Cookies from "js-cookie";

function TopNavigationBar() {
    const navigate = useNavigate();
    return (
        <nav className="bg-indigo-600 text-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-xl">My Dashboard</div>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => navigate("/")}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-500`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => () => {}}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-500`}
                        >
                            Todo
                        </button>
                        <button
                            onClick={() => () => {}}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-500`}
                        >
                            Pokemon
                        </button>
                        <button
                            onClick={() => () => {}}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-500`}
                        >
                            User
                        </button>
                        <button
                            onClick={() => navigate("/profile")}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-500`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => {
                                // Cookies.remove("token");
                                setToken("");
                                location.href = "/login";
                            }}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-500`}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNavigationBar;
