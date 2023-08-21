import { InputType } from '../type';

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
  onChangeHandler,
  labelStyle,
}) => {
  return (
    <div className={`  relative h-18  flex  flex-col   ${divStyle}`}>
      <label className={`${labelStyle}`}>{label}</label>
      {Icon}
      <input
        type={type}
        autoComplete="off"
        autoCorrect="false"
        placeholder={placeholder}
        spellCheck="false"
        className={` py-[.4em]   ${style} `}
        onChange={onChangeHandler}
        {...register(name, registredOption)}
        name={name}
      />
      <span className=" self-start  text-sm text-red-800 font-bold">
        {error?.message}
      </span>
    </div>
  );
};

export default Input;
