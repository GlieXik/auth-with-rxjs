import { useFormHandler } from "@/core/hooks/useFormHandler";
import { SubmitLogin } from "@/features";
import { Input } from "@/shared/components";

export const Login = () => {
    const { handleSubmit, error } = useFormHandler();

    return (
        <>
            <div className="grid min-h-svh place-items-center">
                <div className="w-full max-w-md">
                    <div className="mb-4 rounded-md bg-slate-900 p-4">
                        <p>
                            Login: <strong>test</strong>
                        </p>
                        <p>
                            Password: <strong>test</strong>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Input label="Login" name="Login" className="mb-3" />
                        <Input
                            label="Password"
                            name="Password"
                            className="mb-6"
                            type="password"
                        />
                        <SubmitLogin />
                        {error && (
                            <p className="mt-4 text-center text-red-500">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};
