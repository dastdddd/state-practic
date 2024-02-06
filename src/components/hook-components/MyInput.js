import React from 'react';

const MyInput = ({ register, error, value, errorMessage, type, placeholder }) => {

  return (
    <div className='input'>
      <input {...register(value, {
        required: errorMessage,
        minLength: type === 'password' ? {
          value: 8,
          message: 'min 8 symbol'
        } : {}
      }
      )}
        placeholder={placeholder}
        type={type} />
      {
        error[value] && <span>{error[value].message}</span>
        //error берет не значение value как error.value а наоборот берет саму [value]
      }
    </div>
  );
};

export default MyInput;