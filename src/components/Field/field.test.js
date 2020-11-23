import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Field from './'

afterEach(cleanup)

describe('<Field />', () => {
  it('renders the component horizontal variant', () => {
    const { getByTestId, getByText } = render(<Field />)
    expect(getByTestId('field')).not.toHaveStyle({
      flexDirection: 'column'
    })
    expect(getByText('Label')).toHaveStyle({
      marginRight: '8px'
    })
  })

  it('renders the component in vertical variant', () => {
    const { getByTestId, getByText } = render(<Field vertical={true} />)
    expect(getByTestId('field')).toHaveStyle({
      flexDirection: 'column'
    })
    expect(getByText('Label')).toHaveStyle({
      marginBottom: '8px'
    })
  })
})
