import React, { Component } from 'react'

interface ButtonProps {
  label: string
  handleClick: VoidFunction
  icon: any // help how do I interface an HTML element LOL
  className: string
  type: 'submit' | 'button' | 'reset'
  disabled: boolean
}

const Button = ({
  label = 'Button',
  handleClick = () => {},
  icon = null,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  return (
    <button className={className} onClick={handleClick} type={type} disabled={disabled}>
      {icon}
      {label}
    </button>
  )
}

export default Button
