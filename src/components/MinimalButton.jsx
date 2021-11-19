import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 8px;
`;

function MinimalButton({ children, onClick, style, ...props }) {
  return (
    <StyledButton {...props} onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
}

export default MinimalButton;
