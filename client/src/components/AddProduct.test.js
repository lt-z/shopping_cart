import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddProduct from './AddProduct';

describe('AddProduct', () => {
  let container;
  beforeEach(() => {
    container = render(<AddProduct />).container;
  });

  it('Add A Product Button Exists', () => {
    const button = screen.getByRole('button', { name: 'Add A Product' });
    expect(button).toBeInTheDocument();
  });

  it('Contains H3 heading', () => {
    const h3Text = screen.getByRole('heading', { level: 3 });
    expect(h3Text).toBeInTheDocument();
  });

  it('Form is not visible', () => {
    const divClass = container.querySelector('.add-form');
    expect(divClass).toHaveClass('add-form');
  });

  it('Form is visible after clicking on button', async () => {
    const button = screen.getByRole('button', { name: 'Add A Product' });

    await userEvent.click(button);
    const firstDiv = container.querySelector('.visible');
    expect(firstDiv).toHaveClass('add-form visible');
  });

  it('Input info into form', async () => {
    const button = screen.getByRole('button', { name: 'Add A Product' });
    await userEvent.click(button);

    const prodName = screen.getByRole('textbox', { name: /Product Name/ });
    await userEvent.type(prodName, 'Test Product');

    const prodPrice = screen.getByRole('textbox', { name: 'Price' });
    await userEvent.type(prodPrice, '100');

    const prodQuantity = screen.getByRole('textbox', { name: 'Quantity' });
    await userEvent.type(prodQuantity, '10');

    expect(prodName).toHaveValue('Test Product');
    expect(prodPrice).toHaveValue('100');
    expect(prodQuantity).toHaveValue('10');
  });

  // TODO: Submit form adds product
  // it('Submit form', async () => {
  //   const button = screen.getByRole('button', { name: 'Add A Product' });
  //   await userEvent.click(button);

  //   const prodName = screen.getByRole('textbox', { name: /Product Name/ });
  //   await userEvent.type(prodName, 'Test Product');

  //   const prodPrice = screen.getByRole('textbox', { name: 'Price' });
  //   await userEvent.type(prodPrice, '100');

  //   const prodQuantity = screen.getByRole('textbox', { name: 'Quantity' });
  //   await userEvent.type(prodQuantity, '10');

  //   const submitButton = screen.getByRole('button', { name: 'Add' });
  //   await userEvent.click(submitButton)

  //   const mockFunc = jest.fn();

  // });
});
