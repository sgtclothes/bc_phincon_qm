import { useEffect, useState } from "react";

interface UserType {
    id: number;
    name: string;
}

export default function Content() {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/users");
            const json = await response.json();
            setUsers(json.data);
        })();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Content</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
