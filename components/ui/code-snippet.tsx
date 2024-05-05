"use client";

import React from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const CodeSnippet = () => {
  const code = `import React from "react";

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
  `;

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="w-[700px] h-[290px] bg-white rounded-xl">
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

export default CodeSnippet;

// import React, { useEffect } from "react";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css"; // Import the desired theme CSS
// import "prismjs/components/prism-javascript"; // Import the JavaScript language syntax
// import "prismjs/components/prism-css"; // Import other language syntaxes if needed

// const CodeSnippet = () => {
//   useEffect(() => {
//     // Initialize Prism.js after component is mounted
//     Prism.highlightAll();
//   }, []);

//   const code = `
// import React from "react";

// interface CardProps {
//   title: string;
//   description: string;
// }

// const Card: React.FC<CardProps> = ({ title, description }) => {
//   return (
//     <div className="flex flex-col items-start space-y-3 bg-white/50 backdrop-blur-md bg-opacity-20 backdrop-filter border h-auto w-full p-4 rounded-xl">
//       <h2 className="font-semibold text-lg tracking-tighter">{title}</h2>
//       <p className="text-sm text-[#5F5F5F]">{description}</p>
//     </div>
//   );
// };

// export default Card;
//   `;

//   return <code className="language-javascript">{code}</code>;
// };

// export default CodeSnippet;
