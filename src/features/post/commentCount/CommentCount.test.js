import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentCount from './CommentCount';

describe('Wraps Count component:', () => {
    it('Has a comment icon', () => {
        render(<CommentCount/>);

        screen.getByAltText('Comments')
    })
})