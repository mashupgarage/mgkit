import React from "react";
import logo from  '../../assets/Logo.svg';

export function SideNavbar({ style }) {
  return (
    <div class={style}>
      <img class="logo -long" src={logo} alt="logo"/>
      <div class="navigation">
        <a class="link" href="#" alt="Home">
          <span> Home </span>
        </a>
        <a class="link" href="#">
          <span> Teams </span>
        </a>
        <a class="link" href="#">
          <span> Project </span>
        </a>
        <a class="link" href="#">
          <span> Calendar </span>
        </a>
        <a class="link" href="#">
          <span> Documnets </span>
        </a>
        <a class="link" href="#">
          <span> Reports </span>
        </a>
      </div>
    </div>
  );
}
