import "./App.css";
import { useState } from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import Todo from "./components/Todo";
import Pokemon from "./components/Pokemon";
import User from "./components/User";

function App() {
    const [activeTab, setActiveTab] = useState("content");

    return (
        <div className="min-h-screen bg-gray-50">
            <TopNavigationBar onTabChange={setActiveTab} activeTab={activeTab} />
            <div className="container mx-auto px-4 py-6">
                {activeTab === "todo" && <Todo />}
                {activeTab === "pokemon" && <Pokemon />}
                {activeTab === "user" && <User />}
            </div>
        </div>
    );
}

export default App;