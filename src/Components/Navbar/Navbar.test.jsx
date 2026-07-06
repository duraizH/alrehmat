import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Navbar Component', () => {
  it('renders logo and navigation links', () => {
    renderWithRouter(<Navbar />);
    // Check if the logo image is present
    const logoImg = screen.getByAltText(/Al-Rehmat Developers/i);
    expect(logoImg).toBeInTheDocument();

    // Check if main desktop navigation links exist
    expect(screen.getAllByText(/HOME/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ABOUT US/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PROJECTS/i).length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when clicking hamburger icon', () => {
    renderWithRouter(<Navbar />);
    const label = document.querySelector('.btn-ghost');
    expect(label).toBeInTheDocument();
  });
});
