import React from 'react';

export function Footer({ style }) {
  return (
    <div className={style}>
			<div class="logos">
				<img class="company-logo" src="https://i.imgur.com/8zMpkVw.png" alt="Company Logo"/> 
        <img class="company-logo -light" src="https://i.imgur.com/2Jqclhk.png" alt="Company Logo"></img>
				<div class="links">
					<a class="social" href="#"> X </a>
          <a class="social" href="#"> X </a>
          <a class="social" href="#"> X </a>
				</div>
			</div>
			<div class="actions">
				<div class="container">
					<div class="title">Products</div>
					<a class="link -caps" href="#">Plans</a>
					<a class="link -caps" href="#" >Templates</a>
				</div>
				<div class="container">
					<div class="title">About Us</div>
					<a class="link -caps" href="#">Projects</a>
					<a class="link -caps" href="#">Blog</a>
			</div>
				<div class="container">
					<div class="title">Contact Us</div>
					<a class="link" href="#">placeholder@gmail.com</a>
					<a class="link" href="#">(+63) 917 1230 456</a>
			</div>
			</div>
		</div>
  );
}
