import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe( "Test mockup", () => {
  it('Displays Blank App', () => {
    render(<Provider store={store}> 
      <App/>
    </Provider>);
    const text = screen.getByText('Blank App');
    expect(text).toBeInTheDocument();
  });
  it 
});
