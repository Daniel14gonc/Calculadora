import React from 'react'
import { render, screen } from '@testing-library/react'
import Pantalla from './Pantalla'
import '@testing-library/jest-dom'

it('renders the text into button', () => {
  render(<Pantalla data="54" />)
  const element = screen.getByText(/54/)
  expect(element).toBeInTheDocument()
})
