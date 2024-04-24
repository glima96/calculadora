import React from "react";
import * as C from "./styled";

const Header = ({ title, subtitle }) => {
  return (
    <C.Header>
      <C.Container>
        <C.Title>{title}</C.Title>
        {subtitle && <C.SubTitle>{subtitle}</C.SubTitle>}
      </C.Container>
    </C.Header>
  );
};

export default Header;