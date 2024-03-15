import React from 'react';
import "./styles/input.css"

const Input = ({ img, type, txt, name, value, onChange }) => {

  return (
    <div className='form_input_div'>
    <input type={type} class="form-control form_input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={txt} name={name} value={value} onChange={onChange}/>
    </div>
  );
};

export default Input;
