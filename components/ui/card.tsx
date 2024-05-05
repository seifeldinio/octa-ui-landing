import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-3 bg-white/50 backdrop-blur-md bg-opacity-20 backdrop-filter border h-auto w-full p-4 rounded-xl">
      <h2 className="font-semibold text-lg tracking-tighter">{title}</h2>
      <p className="text-sm text-[#5F5F5F]">{description}</p>
    </div>
  );
};

export default Card;
