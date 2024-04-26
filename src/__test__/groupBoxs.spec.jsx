import React from 'react';
import { render } from '@testing-library/react';
import { GroupBoxs } from '../components/GroupBoxs';

describe('GroupBoxs Component', () => {
  test('renders group boxes correctly', () => {
    const income = 100;
    const expense = 50;
    const total = income - expense;

    const { getByText } = render(
      <GroupBoxs income={income} expense={expense} total={total} />
    );
    
    expect(getByText('Entradas')).toBeInTheDocument();
    
    expect(getByText('Saidas')).toBeInTheDocument();

    expect(getByText('Total')).toBeInTheDocument();
  });
});
