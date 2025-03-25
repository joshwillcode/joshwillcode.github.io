import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from './Post';

describe('Post presentational component:', () => {
    it('Displays: Post Title, Subreddit, Poster', () => {
        render(<Post 
            title='Post Title' 
            subreddit='r/Subreddit'
            poster='u/User'/>);

        screen.getByText('Post Title');
        screen.getByText('r/Subreddit');
        screen.getByText('u/User');

    });

    it('Displays only an image when provided with .jpg .jpeg or .png link', () => {
        const imgUrl = 'https://static.wikia.nocookie.net/azumanga/images/a/a3/Yotsuba_infobox.jpeg'
        render(<Post url={imgUrl}/>);

        screen.getByRole('content-image');
        const link = screen.queryByRole('content-link');

        expect(link).not.toBeInTheDocument();
    });

    it('Displays a only a hyperlink when provided with a non-image URL', () => {
        const url = 'https://worksinprogress.co/issue/how-mathematics-built-the-modern-world/'
        render(<Post url={url}/>);

        screen.getByRole('content-link');
        const img = screen.queryByRole('content-image');

        expect(img).not.toBeInTheDocument();
    });

    it('Displays no body text when given an empty string, and displays body text when given a string', () => {
        const {rerender} = render(<Post body=''/>);

        const body = screen.queryByRole('body');
        expect(body).not.toBeInTheDocument();

        rerender(<Post body='This is body text'/>);

        screen.getByRole('body');
        screen.getByText('This is body text');
    });
    // Removed until Count/VoteCount/CommentCount complete
    // it('Displays number of comments', () => {
    //     render(<Post comments='1600'/>);

    //     screen.getByText('1.6k');
    // })
})