import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header Component', () => {
  test('toggles theme correctly', () => {
    const { getByText, getByRole } = render(<Header />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('null');

    fireEvent.click(getByRole('button'));

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(getByRole('button'));

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
