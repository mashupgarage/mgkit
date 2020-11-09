import React, { Component } from 'react'

interface ButtonProps {
  label: string
  handleClick: VoidFunction
  icon: Component | null
  className: string
}

const Button = ({
  label = 'Button',
  handleClick = () => {},
  icon = null,
  className = ''
}: ButtonProps) => {
  return (
    <button className={className} onClick={handleClick}>
      {icon}
      {label}
    </button>
  )
}

export default Button
