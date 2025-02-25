import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

// Input Component
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "primary" | "secondary";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 w-[80%] h-10 bg-white dark:bg-bg-secondary border text-sm focus:outline-none transition-colors";

    const variantStyles = {
      primary:
        "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-400 rounded-l-md",
      secondary:
        "border-bt-primary text-bt-primary focus-visible:ring-bt-primary2",
    };

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

// Textarea Component
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  variant?: "primary" | "secondary";
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 w-full bg-white dark:bg-bg-secondary text-sm focus:outline-none transition-colors";

    const variantStyles = {
      primary:
        "text-gray-700 dark:text-gray-400 rounded-md",
      secondary:
        "text-bt-primary focus-visible:ring-bt-primary2",
    };

    return (
      <textarea
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      ></textarea>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
