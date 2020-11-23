import React, { FC } from 'react'
import styled from 'styled-components'

export interface FieldProps {
  label?: string
  type?: 'text' | 'email' | 'number'
  vertical?: boolean
}

type ContainerProps = {
  vertical: boolean
}

const Container = styled.div<ContainerProps>`
  font-family: sans-serif;
  ${({ vertical }) => {
    if (vertical) {
      return `
        display: flex;
        flex-direction: column;
      `
    }
  }}

  > label {
    ${({ vertical }) => {
      if (vertical) {
        return `
          margin-bottom: 8px;
        `
      }

      return `
        margin-right: 8px;
      `
    }}
    font-weight: bold;
  }

  > input {
    padding: 8px;
    border: 2px solid lightgrey;
    border-radius: 4px;
    transition: 250ms ease-out;
  }

  > input:focus {
    border-color: dodgerblue;
  }

  > input:invalid {
    border-color: red;
    outline: none;
    box-shadow: none;
  }
`

export const Field: FC<FieldProps> = ({
  label = 'Label',
  type = 'text',
  vertical = false
}) => {
  return (
    <Container vertical={vertical}>
      <label>{label}</label>
      <input type={type} />
    </Container>
  )
}

export default Field
