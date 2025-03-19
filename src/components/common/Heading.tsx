import { JSX } from "react";

interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  customHeadingStyle?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  level = 2,
  customHeadingStyle,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`text-xl font-semibold text-start text-white ${customHeadingStyle}`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
