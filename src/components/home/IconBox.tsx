import Heading from "../common/Heading";

interface IconBox {
  icon: string;
  title: string;
  description: string;
}
const IconBox: React.FC<IconBox> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-[#0e2a2a] rounded-full p-6 mb-6 w-32 h-32 flex items-center justify-center">
        <img src={icon} alt={icon} width={72} height={72} />
        </div>
      <Heading
        level={3}
        text={title}
        customHeadingStyle="text-lg lg:!text-[1.625rem] !text-center mb-3"
      />
      <p className="text-sm lg:text-lg text-center text-[#D6D6D6]">
        {description}
      </p>
    </div>
  );
};

export default IconBox;
