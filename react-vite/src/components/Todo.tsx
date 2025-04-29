/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { TodoType } from "../types/todo.type";
import { CheckCircle } from "lucide-react";

const Todo = () => {
    const { todos } = useSelector((state: any) => state.todos);

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">Todo List</h1>

            {todos && todos.length > 0 ? (
                <ul className="space-y-2">
                    {todos.map((todo: TodoType) => (
                        <li
                            key={todo.id}
                            className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            <CheckCircle className="text-indigo-500 mr-3 h-5 w-5" />
                            <span>{todo.text}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-6 text-gray-500">No todos available. Add some tasks to get started!</div>
            )}
        </div>
    );
};

export default Todo;
