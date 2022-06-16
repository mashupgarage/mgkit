import React from "react";
import logo from  '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

console.log(FontAwesomeIcon)

export function SideNavbar({ style }) {
  return (
    <div class={style}>
      <img class="logo -long" src={logo} alt="logo"/>
      <div class="navigation">
        <a class="link" href="#" alt="Home">
          <span><FontAwesomeIcon icon={solid('house')} color=''/></span>
          <span> Home </span>
        </a>
        <a class="link" href="#">
          <span><FontAwesomeIcon icon={solid('users')} color=''/></span>
          <span> Teams </span>
        </a>
        <a class="link" href="#">
          <span><FontAwesomeIcon icon={solid('folder')} color=''/></span>
          <span> Project </span>
        </a>
        <a class="link" href="#">
          <span><FontAwesomeIcon icon={solid('calendar-days')} color=''/></span>
          <span> Calendar </span>
        </a>
        <a class="link" href="#">
          <span><FontAwesomeIcon icon={solid('file')} color=''/></span>
          <span> Documents </span>
        </a>
        <a class="link" href="#">
          <span><FontAwesomeIcon icon={solid('chart-bar')} color=''/></span>
          <span> Reports </span>
        </a>
      </div>
    </div>
  );
}
