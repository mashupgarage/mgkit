import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index.tsx'

afterEach(cleanup)

describe('<Button />', () => {
  it('renders the base component', () => {
    const { getByText } = render(<Button />)
    const element = getByText('Button')
    expect(element).toBeEnabled()
    expect(element).toHaveAttribute('type', 'button')
  })

  it('renders a disabled button', () => {
    const { getByText } = render(<Button disabled />)
    const element = getByText('Button')
    expect(element).not.toBeEnabled()
  })

  it('renders a submit-type button', () => {
    const { getByText } = render(<Button type='submit' />)
    const element = getByText('Button')
    expect(element).toHaveAttribute('type', 'submit')
  })

  it('renders a reset-type button', () => {
    const { getByText } = render(<Button type='reset' />)
    const element = getByText('Button')
    expect(element).toHaveAttribute('type', 'reset')
  })

  it('renders the component with the corresponding className', () => {
    const { getByText } = render(<Button className='sample-class' />)
    const element = getByText('Button')
    expect(element).toHaveClass('sample-class')
  })

  it('renders a button with an icon', () => {
    const { getByText } = render(<Button icon={<i>👀</i>} />)
    const element = getByText('Button')
    expect(element).toContainHTML('<i>👀</i>')
  })
})
