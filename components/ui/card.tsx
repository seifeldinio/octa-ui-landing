"use client";

import React from "react";
import { Tilt } from "react-tilt";

interface CardProps {
  title: string;
  description: string;
}

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 18, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: false, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Tilt options={defaultOptions}>
      <div className="flex flex-col items-start space-y-3 bg-white/50 backdrop-blur-md bg-opacity-20 backdrop-filter border h-auto w-full p-4 rounded-xl">
        <h2 className="font-semibold text-lg tracking-tighter">{title}</h2>
        <p className="text-sm text-[#5F5F5F]">{description}</p>
      </div>
    </Tilt>
  );
};

export default Card;
