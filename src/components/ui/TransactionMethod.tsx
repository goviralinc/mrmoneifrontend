import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TransactionMethodProps {
  icon: IconDefinition; // Ensures the icon is a valid FontAwesome icon
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string; // Optional custom class for styling
}

const TransactionMethod: React.FC<TransactionMethodProps> = ({
  icon,
  label,
  isSelected,
  onClick,
  className = "", // Default to an empty string if not provided
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer transition-opacity ${
        isSelected ? "" : ""
      }`} // Add custom class
    >
      <div
        className={`p-5 rounded-full flex items-center justify-center transition-all ${
          isSelected
            ? "bg-primary-colors text-white"
            : "border-2 border-solid border-primary-colors text-primary-colors"
        }`}
      >
        <FontAwesomeIcon
          icon={icon}
          size="2x"
          className={`transition-all w-8 h-8 ${
            isSelected ? "text-white" : "text-primary-colors"
          } ${className}`}
        />
      </div>
      <p className="text-sm font-medium text-center">{label}</p>
    </div>
  );
};

export default TransactionMethod;
