import { useAuthService } from "@/core/hooks";
import { Button } from "@/shared/components";

export const Logout = () => {
    const { logout } = useAuthService();

    const handleClick = () => {
        logout();
    };

    return <Button onClick={handleClick}>Logout</Button>;
};
