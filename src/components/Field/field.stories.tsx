import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Field } from './index'

export default {
  title: 'Field',
  component: Field
} as Meta

const Template: Story<ComponentProps<typeof Field>> = args => (
  <Field {...args} />
)

export const Base = Template.bind({})
