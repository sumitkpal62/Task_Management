const Button = ({ children, className = "", type = "button", ...props }) => {
  const baseStyles =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 transition-all duration-200";

  return (
    <button type={type} className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
