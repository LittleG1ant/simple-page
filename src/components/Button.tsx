import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold text-lg transition-colors";
  const variantStyles = {
    primary: "bg-white text-gray-900 hover:bg-gray-100",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};