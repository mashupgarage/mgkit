import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index.tsx'

afterEach(cleanup)

describe('<Button />', () => {
  it('renders the base component', () => {
    const { getByTestId } = render(<Button />)
    const element = getByTestId('button')
    expect(element).toBeEnabled()
    expect(element).toHaveAttribute('type', 'button')
  })

  it('renders a disabled button', () => {
    const { getByTestId } = render(<Button disabled />)
    const element = getByTestId('button')
    expect(element).not.toBeEnabled()
  })

  it('renders a submit-type button', () => {
    const { getByTestId } = render(<Button type='submit' />)
    const element = getByTestId('button')
    expect(element).toHaveAttribute('type', 'submit')
  })

  it('renders a reset-type button', () => {
    const { getByTestId } = render(<Button type='reset' />)
    const element = getByTestId('button')
    expect(element).toHaveAttribute('type', 'reset')
  })

  it('renders the component with the corresponding className', () => {
    const { getByTestId } = render(<Button className='sample-class' />)
    const element = getByTestId('button')
    expect(element).toHaveClass('sample-class')
  })

  it('renders a button with an icon', () => {
    const { getByTestId } = render(<Button icon={<i>👀</i>} />)
    const element = getByTestId('button')
    expect(element).toContainHTML('<i>👀</i>')
  })
})
