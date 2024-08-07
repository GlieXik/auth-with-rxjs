import { InputHTMLAttributes } from "react";
import { cn } from "../utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    variant?: "primary" | "secondary";
};

export const Input = ({
    label,
    className,
    variant = "primary",
    ...props
}: InputProps) => {
    const clases = cn("input", className, {
        "input-primary": variant === "primary",
        "input-secondary": variant === "secondary",
    });
    return (
        <label className="block">
            <span className="mb-2 inline-block text-sm font-medium text-white">
                {label}
            </span>
            <input className={clases} type="text" {...props} />
        </label>
    );
};
