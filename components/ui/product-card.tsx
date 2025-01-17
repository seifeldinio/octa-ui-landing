"use client";

import { Button as OctaButton } from "octa-ui";
import { PackagePlus } from "lucide-react";
import { useEffect } from "react";

interface ModelViewerProps {
  src: string;
  iosSrc: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  style?: React.CSSProperties;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps;
    }
  }
}

const ProductCard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col p-4 outline outline-[6px] outline-[#D9E2F1] bg-white rounded-lg w-[220px] shadow-md hover:shadow-xl transition-all duration-150 ease-in-out scale-90">
      <div className="flex items-center justify-center bg-[#EDBEEA] rounded-lg h-[120px]">
        {/* <span>img</span> */}
        {/* <ModelViewerScript /> */}
        <model-viewer
          src="glb/product.glb"
          iosSrc="glb/product.glb"
          auto-rotate
          camera-controls
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "#000",
          }}
        ></model-viewer>
      </div>
      <h4 className="font-bold tracking-tight mt-3">Product A</h4>

      <div className="flex flex-row items-center space-x-1 mt-2">
        <img src="/svg/star.svg" alt="Star" className="h-4 w-auto" />
        <img src="/svg/star.svg" alt="Star" className="h-4 w-auto" />
        <img src="/svg/star.svg" alt="Star" className="h-4 w-auto" />
        <img src="/svg/star.svg" alt="Star" className="h-4 w-auto" />
        <img src="/svg/star.svg" alt="Star" className="h-4 w-auto" />
        <span className="text-sm text-[#959595]">(44)</span>
      </div>

      <div className="flex flex-row items-center mt-3">
        <span className="mr-1.5 font-semibold">$1200</span>
        <span className="line-through text-[#959595]">$1600</span>
      </div>
      <div className="flex flex-row items-center mt-3 space-x-3">
        <OctaButton variant={"outline"} className="font-medium" size={"icon"}>
          <PackagePlus className="h-4 w-4" />
        </OctaButton>
        <OctaButton
          variant={"default"}
          className="font-medium bg-[#6C59A8] hover:bg-[#7c68be] text-white w-[135px]"
        >
          Buy now
        </OctaButton>
      </div>
    </div>
  );
};

export default ProductCard;
