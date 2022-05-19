import React from 'react';
import '../../stylesheets/navbar.scss';
import { TopNavbar } from './TopNavbar';

export default {
  title: 'Top Navbar',
  component: TopNavbar
};

export const Primary = () => <TopNavbar style="kit-navbar"/>
export const PrimaryLight = () => <TopNavbar style="kit-navbar -light"/>;

