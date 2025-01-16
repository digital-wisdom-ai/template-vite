import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the welcome message', () => {
    render(<App />)

    // Check for main heading
    expect(
      screen.getByRole('heading', {
        name: /welcome to your vite \+ react app/i,
      }),
    ).toBeInTheDocument()

    // Check for sub text
    expect(
      screen.getByText(/start editing to see some magic happen!/i),
    ).toBeInTheDocument()
  })

  it('renders with proper structure', () => {
    render(<App />)

    // Verify the basic structure is in place
    const rootElement = screen.getByTestId('app-root')
    expect(rootElement).toBeInTheDocument()

    // Verify it contains both text elements
    const heading = rootElement.querySelector('h1')
    const paragraph = rootElement.querySelector('p')
    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
  })
})
