/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import './styles.scss';

export interface IInput {
  type: string;
  placeholder?: string;
  id?: string;
  name?: string;
  defaultValue?: any;
  icon?: string;
  label?: string;
  onChange?: (event: any) => void;
  required?: any;
  disabled?: boolean;
  children?: any;
}

export const Input: React.FC<any> = (props: IInput) => {
  const {
    type,
    label,
    placeholder,
    id,
    name,
    onChange,
    required,
    defaultValue: value,
    disabled,
  } = props;

  return (
    <div>
      <label htmlFor={id} className='text-gray-500 mb-2'>
        {label}
      </label>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <input
          defaultValue={value}
          required={required}
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          className='appearance-none w-full border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg'
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
