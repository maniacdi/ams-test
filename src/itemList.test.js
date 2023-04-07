import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './pages/itemList/ItemList';
import { Provider } from 'react-redux';
import store from './store/index';
describe('ItemList', () => {
  it('renders a list of posts', () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );

    const itemListElement = screen.getByTestId('item-list-test');
    expect(itemListElement).toBeInTheDocument();
  });
});
