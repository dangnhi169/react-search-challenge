import React from 'react';
import styled from 'styled-components';

const StyledButtonComp = styled.button`
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
`;

function StyledButton({ children, onClick, style, ...props }) {
  return (
    <StyledButtonComp {...props} onClick={onClick} style={style}>
      {children}
    </StyledButtonComp>
  );
}

export default StyledButton;
