import React from 'react';
import styled from 'styled-components';

const HeaderHolder = styled.header`
  border-bottom: 1px solid #efefef;
  padding: 16px;
`;
const ImgHolder = styled.img`
  width: 110px;
`;

export default function Header() {
  return (
    <HeaderHolder>
      <ImgHolder src="/images/logo.svg" alt="match" />
    </HeaderHolder>
  );
}
