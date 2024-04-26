import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Item } from '../components/Item';

describe('Item Component', () => {
  test('renders item details and modal correctly', () => {
    const item = {
      id: 1,
      title: 'Example Item',
      amount: 100,
      desc: 'Example Description',
      expense: true,
      date: new Date('2024-04-26'),
    };

    const onDeleteMock = jest.fn();

    const { getByText } = render(
      <Item item={item} onDelete={onDeleteMock} />
    );

    expect(getByText(item.title)).toBeInTheDocument();
    expect(getByText(item.desc)).toBeInTheDocument();
    
    fireEvent.click(getByText(item.title));

    const deleteButton = getByText((content, element) => {
      return element.tagName.toLowerCase() === 'button' && content.includes('Deletar');
    });

    expect(deleteButton).toBeInTheDocument();
  });
});
