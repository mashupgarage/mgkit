import React from 'react';

export function DropDown({ style }) {
  return (
    <div class={style}> 
				<select name="dropdown" id="options">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
					<option value="4">Option 4</option>
				</select>
    </div>
  );
}
