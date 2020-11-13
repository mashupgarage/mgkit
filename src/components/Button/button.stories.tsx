import React from 'react'
import Button from './index'

export const button = (args) => {
  // const label = text('Text', 'Click here now!')
  return <Button {...args}></Button>
}

button.args = {
  label: 'Hello there',
  handleClick: () => { console.log('Clicked') },
  icon: '',
  className: '',
  type: 'button',
  disabled: false
}

export default {
  title: 'Components/Button',
  component: button,
  parameters: {
    componentSubtitle: 'Displays a button with basic styles and functionality'
  }
}
