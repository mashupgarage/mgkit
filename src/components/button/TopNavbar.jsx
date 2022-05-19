import React from "react";
import MonogramBlack from  '../../assets/MonogramBlack.svg';
import MonogramWhite from  '../../assets/MonogramWhite.svg';
import MenuIcon from '../../assets/MenuIcon.svg';

export function TopNavbar({ style }) {
  return (
    <div class={style}> 
			<img class="monogram -primary" src={MonogramWhite} alt="logo"/>
      <img class="monogram -light" src={MonogramBlack} alt="logo"/>
			<div class="links">
				<span> <img class="menu" src={MenuIcon} alt="Menu"/></span>
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
