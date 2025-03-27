import React from "react";
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VoteCount from './VoteCount';

describe('Color changing wrapper for Count component.', () => {
    it('Should be styled with upVote class when upvoted.', () => {
        render(<VoteCount
            votes='12345'
            upvoted={true}/>);

        const countElement = screen.getByTestId('voteCount');
        expect(countElement).toHaveClass('upVote');

    })
    it('Should be styled to noVote class when no vote present.', () => {
        render(<VoteCount
            votes='12345'
            upvoted={null}/>);

        const countElement = screen.getByTestId('voteCount');
        expect(countElement).toHaveClass('noVote');
    })
    it('Should be styled to downVote class when downvote present.', () => {
        render(<VoteCount
            votes='12345'
            upvoted={false}/>);

        const countElement = screen.getByTestId('voteCount');
        expect(countElement).toHaveClass('downVote');
    })
})