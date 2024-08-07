import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";
import { useAuthService } from "@/core/hooks";

export const App = () => {
    const auth = useAuthService();

    return (
        <>
            <RouterProvider router={router} context={{ auth }} />
        </>
    );
};
