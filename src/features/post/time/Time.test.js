import React from 'react';
import { screen, render } from '@testing-library/react';
import Time from './Time';

describe('Takes in unix timestamp, renders a description of the time in comparison to the current time', () => {
    describe("displays 'just now' when time difference is less than 1 minute", () => {
        
        // mock system time to 4/1/2025 12:00pm PST
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2025-04-01T00:19:00').getTime());

        it("Displays just now", () => {
            // all times on 4/1/2025 PST
            // 11:59:30 -> 12:00pm
            const {rerender} = render(<Time timestamp='1743533970'/>)
            screen.getByText('just now');
            // 12:00pm -> 12:00pm
            rerender(<Time timestamp='1743534000'/>)
            screen.getByText('just now');
        });
        it("Does not display just now at the minute mark", () => {
            // 11:59:00 -> 12:00pm
            render(<Time timestamp='1743533940'/>)
            const text = screen.queryByText('just now');
            expect(text).not.toBeInTheDocument();
        });
    });
    // describe("Displays 'x minutes ago' (rounded) when time difference is less than 60 minutes", () => {
    //     it("displays '30 minutes ago'", () => {
    //         // 11:30am -> 12:00pm 
    //         const {rerender} = render(<Time timestamp=''/>)
    //         screen.getByText('30 minutes ago');

    //         // 11:30:59 -> 12:00pm
    //         rerender(<Time timestamp=''/>)
    //         screen.getByText('30 minutes ago');
    //     });
    //     it("displays '59 minutes ago'", () => {
    //         // 11:01am -> 12:00pm 
    //         const {rerender} = render(<Time timestamp=''/>)
    //         screen.getByText('59 minutes ago');
    //     });
    // });
    // describe("Displays 'x hours ago' when time difference is greater than 60 minutes", () => {
    //     it("displays 'an hour ago' when time difference is between 60 and 119 minutes", () => {
    //         // 11:00am -> 12:00pm 
    //         const {rerender} = render(<Time timestamp=''/>)
    //         screen.getByText('an hour ago');
    //         // 10:30am -> 12:00pm
    //         rerender(<Time timestamp=''/>)
    //         screen.getByText('an hour ago');
    //         // 10:01am -> 12:00pm
    //         rerender(<Time timestamp=''/>)
    //         screen.getByText('an hour ago');
    //     });
    //     it("displays 'x hours ago' when time difference is 120 minutes or greater", () => {
    //         // 10:00am -> 12:00pm 
    //         const {rerender} = render(<Time timestamp=''/>);
    //         screen.getByText('2 hours ago');

    //         const text = screen.queryByText('an hour ago');
    //         expect(text).not.toBeInTheDocument();

    //         // 9:00am -> 12:00pm
    //         rerender(<Time timestamp=''/>)
    //         screen.getByText('3 hours ago');
    //     });
    // });
    // describe("It displays 'x days ago' when time difference is 24 hours or greater", () => {
    //     it("displays 'a day ago' when time difference is between 24 hours and 48 hours", () => {
    //         // 4th 12:00pm ->  5th, 12:00pm 
    //         const {rerender} = render(<Time timestamp=''/>);
    //         screen.getByText('a day ago');

    //         // 3rd 12:00:01pm -> 5th, 12:00pm 
    //         rerender(<Time timestamp=''/>)
    //         screen.getByText('a day ago');
    //     });
    //     it("displays 'x days ago' when time difference is above 48 hours", () => {
    //         // 4th 12:00pm ->  5th, 12:00pm 
    //         const {rerender} = render(<Time timestamp=''/>);
    //         screen.getByText('a day ago');

    //         // 3rd 12:00:01pm -> 5th, 12:00pm 
    //         rerender(<Time timestamp=''/>)
    //         screen.getByText('a day ago');
    //     });
    // });

    // TODO create cases for months, and years
    
});