import { useState } from "react";
import { NetworkError, UserNotFoundError } from "@/core/services";
import { useAuthService } from "./useAuthService";
import { useNavigate } from "@tanstack/react-router";

export const useFormHandler = () => {
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuthService();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.namedItem("Login") as HTMLInputElement;
        const password = form.elements.namedItem(
            "Password"
        ) as HTMLInputElement;

        try {
            await login(name.value, password.value);
            navigate({ to: "/" });
            setError(null);
        } catch (err) {
            handleError(err);
        }
    };

    const handleError = (err: unknown) => {
        if (err instanceof NetworkError) {
            setError("Network error occurred. Please try again later.");
        } else if (err instanceof UserNotFoundError) {
            setError("User not found. Please check your credentials.");
        } else {
            setError("An unexpected error occurred.");
        }
    };

    return { handleSubmit, error };
};
