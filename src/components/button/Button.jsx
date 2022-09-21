import React from 'react';

export function Button({ style,label }) {
  return (
    <button type="button" className={style}>
      {label}
    </button>
  );
}
