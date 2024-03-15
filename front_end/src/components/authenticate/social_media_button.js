import React from 'react';
import "./styles/social_media_button.css"

function SocialMedia ({ img, txt, href, className }) {
  return (
    <div className={className}>
      <div className='social_media'>
     <a href={href}> <button class="btn btn-primary social_media_btn"><img className='social_media_button_img' src={img}></img>{txt}</button></a>
    </div>
    </div>
  );
};

export default SocialMedia;