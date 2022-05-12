import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Calculadora from './Calculadora'

it('updates the screen when pressing button', async () => {
  render(<Calculadora />)
  const element = screen.getByText('2')
  userEvent.click(element)
  userEvent.click(element)
  expect(await screen.findByText('22')).toBeInTheDocument()
})

it('computes correct result', async () => {
  render(<Calculadora />)
  const element = screen.getByText(/2/)
  const sum = screen.getByText('+')
  const multiply = screen.getByText('x')
  const element2 = screen.getByText(/3/)
  const equals = screen.getByText('=')
  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(sum)
  userEvent.click(element2)
  userEvent.click(equals)
  expect(await screen.findByText(/25/)).toBeInTheDocument()

  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(multiply)
  userEvent.click(element2)
  userEvent.click(equals)
  expect(await screen.findByText(/66/)).toBeInTheDocument()
})

it('shows error when having more than 9 characters', async () => {
  render(<Calculadora />)
  const element = screen.getByText(/2/)
  const sum = screen.getByText('x')
  const element2 = screen.getByText(/3/)
  const equals = screen.getByText('=')
  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(element)
  userEvent.click(sum)
  userEvent.click(element2)
  userEvent.click(element2)
  userEvent.click(element2)
  userEvent.click(element2)
  userEvent.click(element2)
  userEvent.click(equals)
  expect(await screen.findByText(/Error/)).toBeInTheDocument()
})
