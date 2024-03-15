import React from 'react';
import ProdNoteTxt from "../../assets/images/logos/ProdNote_txt.svg"

function Title ({p}) {
  return (
    <div className='form_title'>
     <img className="ProdNote_form_img" src={ProdNoteTxt}></img>
      <p>{p}</p>
    </div>
  );
};

export default Title;
