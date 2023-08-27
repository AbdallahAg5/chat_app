import React from 'react';
import { SelectOption, SelectType } from '../../type';

const Select: React.FC<SelectType> = ({
  style,
  name,
  register,
  registredOption,
  error,
  divStyle,
  label,
  onChangeHandler,
  labelStyle,
  defaultValue,
  options,
}) => {
  return (
    <div className={`   flex  flex-col   ${divStyle}`}>
      <label className={`${labelStyle}`}>{label}</label>
      <select
        onChangeHandler={onChangeHandler}
        {...register(name, registredOption)}
        name={name}
        defaultValue={''}
        className={style}
      >
        <option value={''} disabled>
          {defaultValue}
        </option>
        {options.map((e: SelectOption, i: number) => (
          <option key={i} value={e.val}>
            {e.opt}
          </option>
        ))}
      </select>
      <span className=" self-start  text-sm text-red-800 font-bold">
        {error?.message}
      </span>
    </div>
  );
};

export default Select;
