import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Searchbar presentational component:', () => {
    it('Displays the title and a text input box', () => {
        render(<Search/>);
        const title = screen.getByText('RedditLite');
        const input = screen.getByRole('textbox');

        expect(title).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
})