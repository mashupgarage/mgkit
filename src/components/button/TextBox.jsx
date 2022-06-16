import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

console.log(FontAwesomeIcon)

export function TextBox({ style }) {
  return (
    <div class={style}> 
      <span><FontAwesomeIcon icon={solid('magnifying-glass')} color=''/></span>
		  <input type="text" placeholder="Input text here"></input>
    </div>
  );
}
