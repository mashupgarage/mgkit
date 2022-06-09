import React from "react";
import MonogramBlack from  '../../assets/MonogramBlack.svg';
import MonogramWhite from  '../../assets/MonogramWhite.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

console.log(FontAwesomeIcon)

export function TopNavbar({ style }) {
  return (
    <div class={style}>
      <img class="monogram -primary" src={MonogramWhite} alt="logo" />
      <img class="monogram -light" src={MonogramBlack} alt="logo" />
      <div class="links">
        <span><FontAwesomeIcon icon={solid('bars')} color=''/></span>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <div class="profile"></div>
      </div>
    </div>
  );
}
