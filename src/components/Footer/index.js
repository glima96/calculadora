import React from 'react';
import { FooterContainer, FooterText } from './styled';

const Footer = ({ title, subtitle }) => {
  return (
    <FooterContainer>
      <FooterText>{title}</FooterText>
    </FooterContainer>
  );
}

export default Footer;
