import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card imgsrcModel="/test-model.jpg" imgsrcCover="/test-cover.jpg" />);
    // Check if the card images exist
    expect(screen.getByAltText('Project cover')).toBeInTheDocument();
    expect(screen.getByAltText('Project model')).toBeInTheDocument();
  });
});
