import React from 'react'
import Button from './index.tsx'

import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Button',
  component: button,
  decorators: [withKnobs]
}

export const button = () => {
  const label = text('Text', 'Click here now!')
  return <Button label={label}></Button>
}