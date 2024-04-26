import React from 'react';
import { render } from '@testing-library/react';
import { BoxCurrency } from '../components/BoxCurrency';

describe('BoxCurrency', () => {
  test('renders with correct title, Icon, and value', () => {
    const title = 'Test Currency';
    const value = '$100';
    const MockIcon = () => <div data-testid="mock-icon">Mock Icon</div>;
  
    const { getByText, getByTestId } = render(
      <BoxCurrency title={title} Icon={MockIcon} value={value} />
    );
  
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(value)).toBeInTheDocument();
    expect(getByTestId('mock-icon')).toBeInTheDocument();
  });
});
