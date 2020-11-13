import React, { FC } from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  label?: string
  /**
   * Button onClick handler.
   */
  handleClick?: () => void
  /**
   * An optional icon prop.
   * Take note you have to add a margin or else it will be beside the label.
   */
  icon?: any // help how do I interface an HTML element LOL
  /**
   * Custom className in case you need to override the default styles
   */
  className?: string
  type?: 'submit' | 'button' | 'reset'
  /**
   * `Disabled` state of the button. Has a default `not-allowed` custor style if true.
   */
  disabled?: boolean
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

  &:disabled {
    cursor: not-allowed;
  }
`

export const Button:FC<ButtonProps> = ({
  label = 'Button',
  handleClick = () => {},
  icon = null,
  className = '',
  type = 'button',
  disabled = false
}) => {
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
