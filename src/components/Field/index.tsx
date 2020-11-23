import React, { FC } from 'react'
import styled from 'styled-components'

export interface FieldProps {
  label?: string
  type?: 'text' | 'email' | 'number'
}

const Container = styled.div`
  font-family: sans-serif;

  > label {
    margin-right: 8px;
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

export const Field:FC<FieldProps> = ({ label = 'Label', type = 'text' }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} />
    </Container>
  )
}

export default Field