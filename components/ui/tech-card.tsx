import React from "react";

// Define a TypeScript interface for the props
interface TechCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

// Use the interface as the type for props
const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  imageSrc,
  alt,
}) => {
  return (
    <div className="flex flex-col  items-start border shadow-md hover:shadow-xl transition-all duration-150 ease-in-out  p-7 rounded-xl md:w-[470px] w-full">
      <div className="flex flex-row items-center space-x-2 mb-5">
        <img src={imageSrc} alt={alt} />
        <h3 className="font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="text-sm text-[#6F6F6F] tracking-tight">{description}</p>
    </div>
  );
};

export default TechCard;
