import { Logout } from "@/features";

export const Home = () => {
    return (
        <div>
            <nav className="p-4">
                <Logout />
            </nav>
            <h2 className="text-center text-lg">Hello world!</h2>
        </div>
    );
};
