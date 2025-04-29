/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import logo from "../assets/logo.webp";
import { Menu } from "lucide-react";

export default function TopNavigationBar({
    onTabChange,
    activeTab,
}: Readonly<{
    onTabChange: (tab: string) => void;
    activeTab: string;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", value: "content" },
        { name: "Todo List", value: "todo" },
        { name: "Pokémon", value: "pokemon" },
        { name: "User Management", value: "user" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (tab: string) => {
        onTabChange(tab);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-indigo-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu size={24} />
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                            <span className="ml-2 text-xl font-bold">MyApp</span>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.value}
                                        onClick={() => handleNavClick(item.value)}
                                        className={`${
                                            activeTab === item.value
                                                ? "bg-indigo-700 text-white"
                                                : "text-gray-300 hover:bg-indigo-500 hover:text-white"
                                        } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div
                className={`${isMenuOpen ? "block" : "hidden"} sm:hidden transition-all duration-200 ease-in-out`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <button
                            key={item.value}
                            onClick={() => handleNavClick(item.value)}
                            className={`${
                                activeTab === item.value
                                    ? "bg-indigo-700 text-white"
                                    : "text-gray-300 hover:bg-indigo-500 hover:text-white"
                            } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
