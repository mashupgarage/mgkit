import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index.tsx'

afterEach(cleanup)

describe('<Button />', () => {
  it('renders the component', () => {
    const { getByText } = render(<Button />)
    getByText('Button')
  })
})
