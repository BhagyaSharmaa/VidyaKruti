import React from 'react';

function CheckBox({ text, onChange, checked }) {
  return (
    <div className='ml-3'>
      <input
        type="checkbox"
        className="form-checkbox h-3 w-3 text-indigo-600"
        onChange={onChange} 
        checked={checked} 
      />
      <span className="ml-2 text-white mt-0 text-sm">{text}</span>
    </div>
  );
}

export default CheckBox;
