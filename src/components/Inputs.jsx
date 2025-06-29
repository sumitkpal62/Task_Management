const InputField = ({ label, isTextArea = false, id, name, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  const classes =
    "w-full p-1 border-b-2 bg-stone-50 rounded border-stone-300 text-stone-600 focus:bg-stone-50 focus:outline-none focus:border-stone-500";

  return (
    <div className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={inputId}
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea
          placeholder={`Enter ${label}`}
          className={classes}
          id={inputId}
          name={name || inputId}
          {...props}
        />
      ) : (
        <input
          placeholder={`Enter ${label}`}
          className={classes}
          id={inputId}
          name={name || inputId}
          {...props}
        />
      )}
    </div>
  );
};

export default InputField;
