import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    beforeLoad: async ({ context }) => {
        const { auth } = context;
        if (auth.currentUser === null) {
            throw redirect({ to: "/login" });
        }
    },
});
