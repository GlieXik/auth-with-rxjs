import { useEffect, useState } from "react";
import { authService } from "@/core/services";
import { User } from "../services/auth_service";
import { useNavigate } from "@tanstack/react-router";

export const useAuthService = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const subscription = authService.currentUser$.subscribe(setCurrentUser);
        return () => subscription.unsubscribe();
    }, []);

    const login = async (name: string, password: string) => {
        try {
            await authService.login(name, password);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        authService.logout();
        navigate({
            to: "/login",
        });
    };

    return {
        currentUser,
        login,
        logout,
    };
};
export type AuthContext = ReturnType<typeof useAuthService>;
