/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, createUser, updateUser, deleteUser } from "../features/users/user.slice";
import { PlusCircle, Edit, Trash2, X, Check, Loader } from "lucide-react";
import { UserType } from "../types/user.type";

const User = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state: any) => state.users);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        active: false,
    });

    useEffect(() => {
        dispatch(getAllUsers() as any);
    }, [dispatch]);

    const resetForm = () => {
        setFormData({
            id: "",
            fullname: "",
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
            active: false,
        });
        setEditingId(null);
    };

    const handleOpenForm = (user: UserType | null = null) => {
        if (user) {
            setFormData({
                id: user.id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                password: user.password,
                phoneNumber: user.phoneNumber,
                active: user.active,
            });
            setEditingId(user.id);
        } else {
            resetForm();
        }
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        resetForm();
    };

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e: { target: { name: any; checked: any } }) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (editingId) {
            dispatch(updateUser(formData) as any);
        } else {
            dispatch(createUser(formData) as any);
        }

        handleCloseForm();
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(id) as any);
        }
    };

    if (loading && !users) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="flex items-center">
                    <Loader className="animate-spin mr-2 h-6 w-6 text-indigo-500" />
                    <span className="text-gray-600">Loading users...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-indigo-700">User Management</h1>
                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
                    onClick={() => handleOpenForm()}
                >
                    <PlusCircle className="h-5 w-5 mr-1" />
                    <span>Add User</span>
                </button>
            </div>

            {users && users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users?.map((user: UserType) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{user.fullname}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => handleOpenForm(user)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                                        >
                                            <Edit className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    No users available. Add some users to get started!
                </div>
            )}

            {/* User Form Modal */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                {editingId ? "Edit User" : "Add New User"}
                            </h2>
                            <button onClick={handleCloseForm} className="text-gray-500 hover:text-gray-700">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Fullname
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="checkbox"
                                    id="active"
                                    name="active"
                                    checked={formData.active}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="active" className="text-gray-700">
                                    Active
                                </label>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleCloseForm}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md flex items-center"
                                >
                                    <Check className="h-5 w-5 mr-1" />
                                    {editingId ? "Update" : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
