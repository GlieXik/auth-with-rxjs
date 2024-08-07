import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { AuthContext } from "@/core/hooks/useAuthService";

type RouterContext = {
    auth: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <>
            <Outlet />
        </>
    ),
});
