import { render, screen } from '@testing-library/react'
import App from './App'

test('renders MSW Demo title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Mock Service Worker/i)
  expect(titleElement).toBeInTheDocument()
})

test('renders MSW Demo content', () => {
  render(<App />)
  const titleElement = screen.getByText(
    /Mock by intercepting requests on the network level. Seamlessly reuse the same mock definition for testing, development, and debugging./i
  )
  expect(titleElement).toBeInTheDocument()
})
