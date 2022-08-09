import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

console.log(FontAwesomeIcon)

export function TextBox({ style, input, type }) {
  return (
    <div class={style}> 
      <span><FontAwesomeIcon icon={solid('magnifying-glass')} color=''/></span>
		  <input type={type} placeholder={input}></input>
    </div>
  );
}
