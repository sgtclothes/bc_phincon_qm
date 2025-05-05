/* eslint-disable @typescript-eslint/no-explicit-any */
import TopNavigationBar from "./TopNavigationBar";
import { getAllUsers } from "../features/users/user.slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
            <TopNavigationBar />
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">Welcome to My Dashboard</h1>
                <p className="text-gray-600">
                    Your one-stop solution for tasks, Pokemon information, and user management
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-indigo-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-indigo-700 mb-2">Todo Manager</h2>
                    <p className="text-gray-600">Keep track of your daily tasks and never miss a deadline again.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-red-700 mb-2">Pokemon Explorer</h2>
                    <p className="text-gray-600">Discover information about your favorite Pokemon characters.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-green-700 mb-2">User Management</h2>
                    <p className="text-gray-600">Manage user profiles and settings with ease.</p>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting Started</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Use the navigation bar above to switch between different sections</li>
                    <li>In the Todo section, you can add, edit, and mark tasks as complete</li>
                    <li>The Pokemon section allows you to search and learn about Pokemon</li>
                    <li>Manage your profile settings in the User section</li>
                </ul>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Updates & News</h2>
                <p className="text-gray-600">
                    Our app is constantly evolving! Check back regularly for new features and improvements.
                </p>
            </div>
        </div>
    );
}

export default Home;
