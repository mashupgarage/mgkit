import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  label: string
  handleClick: VoidFunction
  icon: any // help how do I interface an HTML element LOL
  className: string
  type: 'submit' | 'button' | 'reset'
  disabled: boolean
}

const StyledButton = styled.button`
  padding: 16px 24px;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 200ms ease-out;
  font-size: 1em;

  > span {
    opacity: 0.9;
  }

  &:hover {
    background-color: #1d8af3;
  }
`

const Button = ({
  label = 'Button',
  handleClick = () => {},
  icon = null,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      data-testid='button'
    >
      {icon}
      <span>{label}</span>
    </StyledButton>
  )
}

export default Button
