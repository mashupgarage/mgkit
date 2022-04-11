import React from 'react';
import search from '../../assets/IconSearch.svg';

export function TextBox({ style }) {
  return (
    <div class={style}> 
    <img class="icon" src={search}/>
		<input type="text" placeholder="Input text here"></input>
    </div>
  );
}
