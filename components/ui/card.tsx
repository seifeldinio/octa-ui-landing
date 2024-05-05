"use client";

import React from "react";
import { Tilt } from "react-tilt";

interface CardProps {
  title: string;
  description: string;
  className?: string; // Add className prop
}

const defaultOptions = {
  reverse: false,
  max: 18,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: false,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Card: React.FC<CardProps> = ({ title, description, className }) => {
  return (
    <Tilt options={defaultOptions} className={className}>
      <div className="flex flex-col items-start space-y-3 bg-white/50 backdrop-blur-md bg-opacity-20 backdrop-filter border h-auto w-full p-4 rounded-xl">
        <h2 className="font-semibold text-lg tracking-tighter">{title}</h2>
        <p className="text-sm text-[#5F5F5F]">{description}</p>
      </div>
    </Tilt>
  );
};

export default Card;
