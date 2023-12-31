import { InputType } from '../../type';

const Input: React.FC<InputType> = ({
  type,
  placeholder,
  Icon,
  style,
  name,
  register,
  registredOption,
  error,
  divStyle,
  label,
  labelStyle,
}) => {
  return (
    <div className={`  relative h-18  flex  flex-col   ${divStyle}`}>
      <label htmlFor={name} className={`${labelStyle}`}>
        {label}
      </label>
      {Icon}
      <input
        id={name}
        type={type}
        autoComplete="off"
        autoCorrect="false"
        placeholder={placeholder}
        spellCheck="false"
        className={` py-[.4em] bg-white text-black   ${style} `}
        {...register(name, registredOption)}
        name={name}
      />
      <span className=" self-start  text-sm text-error font-bold">
        {error?.message}
      </span>
    </div>
  );
};

export default Input;
