interface InputFieldProps {
  type?: string;
  placeholder?: string;
  customStyleInput?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder,
  customStyleInput,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-11 w-full my-2 px-4 outline-none lg:my-0 rounded-lg bg-[#272727] ${customStyleInput}`}
    />
  );
};

export default InputField;
