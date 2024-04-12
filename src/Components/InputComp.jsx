function InputComp({
    value,
    onChange,
    className,
    type,
    id,
    required,
    otherProps
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`w-full px-[20px] py-[10px] font-normal text-[12px] tracking-[1px] border-[none] bg-[#efefef] rounded-[10px] ${className}`}
      type={type || "text"}
      id={id}
      required={required}
      {...otherProps}
    />
  );
}

export default InputComp;
