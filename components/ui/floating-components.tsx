import { Settings } from "lucide-react";
import {
  Button as OctaButton,
  Input as OctaInput,
  Toggle as OctaToggle,
} from "octa-ui";

const FloatingComponents = () => {
  return (
    <div>
      <div className="absolute -left-[0.5rem] bottom-[9.5rem] px-1 py-1 ">
        <OctaButton variant={"material"}>Label</OctaButton>
      </div>
      {/* TOGGLE1 */}
      <div className="absolute -left-[-5rem] bottom-[5rem] px-1 py-1 ">
        <OctaToggle label="" />
      </div>
      {/* ICON BUTTON */}
      <div className="absolute -left-[2rem] bottom-[1.5rem] px-1 py-1 ">
        <OctaButton size={"icon"} className="p-0" variant={"key"}>
          <Settings className="h-4 w-4" />
          {/* <span>Press me</span> */}
        </OctaButton>
      </div>
      {/* INPUT */}
      <div className="absolute -left-[9rem] bottom-[-4rem] px-1 py-1 ">
        <OctaInput label="Hint" />
      </div>
      {/* TOGGLE2 */}
      <div className="absolute -right-[2.5rem] bottom-[10.5rem] px-1 py-1 ">
        {/* <OctaButton variant={"materialSecondary"}>Label</OctaButton> */}
        <OctaToggle label="" />
      </div>
      {/* OCTA GIF */}
      <div className="absolute -right-[8rem] bottom-[-3.5rem] px-1 py-1">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-2xl">
          <img
            src="/images/octa.gif"
            alt="Octa GIF"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* ICON BUTTON GEAR PURPLE */}
      <div className="absolute -right-[-7rem] bottom-[-2rem] px-1 py-1 ">
        <OctaButton
          size={"icon"}
          className="bg-[#6750A4] hover:bg-[#7f67c3] text-white rounded-full"
          variant={"default"}
        >
          <Settings />
        </OctaButton>
      </div>
      {/* BUTTON YELLOW */}
      <div className="absolute -right-[-3rem] bottom-[-7rem] px-1 py-1 ">
        <OctaButton
          variant={"default"}
          size={"sm"}
          className="bg-[#FFF069] hover:bg-[#fff495] hover:scale-110 transition-all duration-150 ease-in-out"
        >
          Label
        </OctaButton>
      </div>
    </div>
  );
};

export default FloatingComponents;
