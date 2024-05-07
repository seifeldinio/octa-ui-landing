import React from "react";

interface MenuSvgProps {
  openNavigation: boolean;
}

const MenuSvg: React.FC<MenuSvgProps> = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        x="0"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="black"
        transform={`rotate(${openNavigation ? "45" : "0"} 10 6)`}
      />
      <rect
        className="transition-all origin-center"
        x="0"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="black"
        transform={`rotate(${openNavigation ? "-45" : "0"} 10 6)`}
      />
    </svg>
  );
};

export default MenuSvg;
