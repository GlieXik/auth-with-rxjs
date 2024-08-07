import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "outline";
};

export const Button = ({
    children,
    className,
    variant = "solid",
    ...props
}: ButtonProps) => {
    const classes = cn("btn", className, {
        "btn-solid": variant === "solid",
        "btn-outline": variant === "outline",
    });

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
