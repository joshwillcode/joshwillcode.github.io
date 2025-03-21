import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe( "A basic set of proof of concept tests for the default redux template", () => {
  it('Has instructions to edit src/App.js', () => {
    render(<Provider store={store}> 
      <App/>
    </Provider>);
    const instructText = screen.getByText('src/App.js');
    expect(instructText).toBeInTheDocument();
  });
  it 
});
