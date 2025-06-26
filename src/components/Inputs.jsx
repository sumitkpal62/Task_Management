const Inputs = ({ label, isTextArea, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 bg-stone-50 rounded border-stone-300 text-stone-600 focus:bg-stone-50 focus:outline-none focus:border-stone-500";
  return (
    <p className="px flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500 "
        htmlFor={label}
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea className={classes} id={label} {...props} />
      ) : (
        <input className={classes} id={label} {...props} />
      )}
    </p>
  );
};

export default Inputs;
