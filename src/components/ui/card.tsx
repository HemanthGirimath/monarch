import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};
