import React from 'react';

export function FooterAlt({ style }) {
  return (
    <div className={style}>
			<div class="header">
				<div class="logos"> 
        <img class="company-logo" src="https://i.imgur.com/8zMpkVw.png" alt="Company Logo"/> 
        <img class="company-logo -light" src="https://i.imgur.com/2Jqclhk.png" alt="Company Logo"></img>
				</div>
				<div class="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus urna a urna efficitur, quis semper urna lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus urna a urna efficitur, quis semper urna lobortis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</div> 
				</div>
			<div class="actions">
				<div class="container">
					<div class="title">Products</div>
					<a class="link -caps" href="#">Plans</a>
					<a class="link -caps" href="#" >Templates</a>
					<a class="link -caps" href="#" >Partners</a>
				</div>
				<div class="container">
					<div class="title">About Us</div>
					<a class="link -caps" href="#">Projects</a>
					<a class="link -caps" href="#">Our Team</a>
					<a class="link -caps" href="#">Blog</a>
			</div>
				<div class="container">
					<div class="title">Contact Us</div>
					<a class="link" href="#">placeholder@gmail.com</a>
					<a class="link" href="#">(+63) 917 1230 456</a>
					<div class="links">
						<a class="social" href="#"> X </a>
						<a class="social" href="#"> X </a>
						<a class="social" href="#"> X</a>	
						</div>
					</div>
				</div>
			</div>
  );
}
