import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactForm from './ContactForm';

// Mock react-helmet to prevent errors in tests
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <>{children}</>,
}));

describe('ContactForm Component', () => {
  it('renders form inputs correctly', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/First name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact Us/i })).toBeInTheDocument();
  });

  it('updates input values on change', () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });
});
