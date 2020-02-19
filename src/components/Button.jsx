import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  margin: 0;
  border: 0;
  min-height: 75px;
  cursor: pointer;
  background-color: white;
  font-size: ${({ buttonRole }) =>
    buttonRole === 'operation' ? '30pt' : '22pt'};

  &:hover {
    background-color: #f5f5f5;
    transition: background-color 50ms ease;
  }

  color: ${({ buttonRole, value }) => {
    if (buttonRole === 'operation' && value === '=') {
      return '#ce518b';
    }
    if (buttonRole === 'operation') {
      return '#018ad0';
    }
    if (buttonRole === 'clear') {
      return '#a9a9a9';
    }
    return '#000';
  }};
`;

const Button = ({ value, label, handleClick, buttonRole }) => (
  <CustomButton
    onClick={() => handleClick(value, buttonRole)}
    buttonRole={buttonRole}
    value={value}
  >
    {label || value}
  </CustomButton>
);

export default Button;
