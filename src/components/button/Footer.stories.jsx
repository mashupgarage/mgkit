import React from 'react';
import '../../stylesheets/footer.scss';
import { Footer } from './Footer';
import { FooterAlt } from './FooterAlt';

export default {
  title: 'Components/Footer',
  component: Footer
};

export const Simple = () => <Footer style="kit-footer"/>;
export const SimpleLight= () => <Footer style="kit-footer -light"/>;
export const Mega= () => <FooterAlt style="kit-footer -mega"/>;
export const MegaLight= () => <FooterAlt style="kit-footer -mega -light"/>;