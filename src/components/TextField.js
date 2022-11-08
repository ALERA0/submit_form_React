import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className="mb-[2px]">
      
      <input
        className={`p-2 mt-[px] rounded-xl  w-full  ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
        placeholder={label}
      />
      <ErrorMessage component="div" name={field.name} className="text-red-700 " />
    </div>
  )
}
