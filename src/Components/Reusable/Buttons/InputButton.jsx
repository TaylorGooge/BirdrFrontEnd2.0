import React, { useState } from 'react';

const InputButton = ({ type, name, value, id, className, onChange=null, checked=null, datatestid=null, onClick=null}) => {

  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      className={className}
      onChange={onChange}
      checked={checked}
      data-testid={datatestid}
  
    >
    </input>


  );

}

export default InputButton