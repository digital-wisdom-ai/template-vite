import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ExampleComponent } from './ExampleComponent'

describe('ExampleComponent', () => {
  it('renders title and children', () => {
    render(
      <ExampleComponent title='Test Title'>
        <div>Test Content</div>
      </ExampleComponent>,
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
