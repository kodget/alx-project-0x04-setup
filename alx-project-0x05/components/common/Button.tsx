interface ButtonProps {
  buttonLabel: "Sign In" | "Sign Up";
  bgColor: string;
}

const Button: React.FC<ButtonProps> = ({ bgColor, buttonLabel }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold cursor:pointer transition duration-300 gap-2 bg-[#00bf7a] bg-${bgColor}-700`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
