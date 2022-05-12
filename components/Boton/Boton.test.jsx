import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Boton from './Boton'

it('renders the text into button', () => {
  render(<Boton element={{ text: 'AC', color: '#a5a5a5', textColor: 'black' }} change={() => {}} />)
  const element = screen.getByText(/AC/)
  expect(element).toBeInTheDocument()
})
