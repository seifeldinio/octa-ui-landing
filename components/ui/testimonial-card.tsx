import { Avatar } from "@/components/ui/avatar";

interface TestimonialProps {
  avatar: React.ReactNode;
  img: string | null;
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  avatar,
  img,
  name,
  text,
}) => {
  return (
    <div className="w-[320px] h-auto bg-[#1D1D1F] rounded-2xl text-white p-4 select-none mb-7 scale-90">
      <div className="flex flex-col items-center justify-center content-center ">
        {img === null ? (
          <Avatar
            style={{
              backgroundColor: "#485DC7",
              verticalAlign: "middle",
            }}
            // size="medium"
            // gap={5}
          >
            {avatar}
          </Avatar>
        ) : (
          <>
            <img src={img} className="rounded-full h-[30px] w-auto" alt="" />
          </>
        )}

        <span className="font-medium text-[14px] mt-1.5">{name}.</span>
        <div className="scale-75 mt-[-5px]">
          {/* <Rate disabled defaultValue={5} /> */}
        </div>
        <span className="text-center text-[12px] mt-1.5">{text}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
