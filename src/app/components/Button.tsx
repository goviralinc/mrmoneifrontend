"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string; // Text to display on the button
  variant?: "primary" | "secondary"; // Button variant: primary or secondary
  onClick?: () => void; // Click handler
  className?: string; // Additional custom class names
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"; // Button size
  icon?: React.ReactNode; // Optional icon
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  className = "",
  size = "md",
  icon,
}) => {
  // Define base styles
  const baseStyles =
    "font-bold rounded-77xl flex flex-row items-center justify-center";

  // Define size-specific styles
  const sizeStyles = {
    sm: "text-sm py-2 px-4",
    md: "text-md py-3 px-6",
    lg: "text-xl py-5 px-[40px]",
    xl: "text-xl py-6 px-[60px]",
    xxl: "text-xl py-5 px-[70px]",
    xxxl: "text-xl py-6 px-[70px]"
  };

  // Define variant-specific styles
  const variantStyles = {
    primary: "bg-primary-colors text-whitesmoke",
    secondary: "border-primary-colors border-[2px] border-solid text-primary-colors bg-white",
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
