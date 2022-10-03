import React from 'react';
import '../../stylesheets/navbar.scss';
import { SideNavbar } from './SideNavbar';

export default {
  title: 'Components/Side Navbar',
  component: SideNavbar
};

export const Primary = () => <SideNavbar style="kit-sidebar"/>
export const PrimaryLight = () => <SideNavbar style="kit-sidebar -light"/>;

