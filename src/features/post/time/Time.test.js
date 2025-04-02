import React from 'react';
import { screen, render } from '@testing-library/react';
import Time from './Time';

describe('Takes in unix timestamp, renders a description of the time in comparison to the current time', () => {
    describe("displays 'just now' when time difference is less than 1 minute", () => {
        
        beforeAll(() => {
            // mock system time to 4/1/2025 12:00pm PST
            jest.useFakeTimers();
            jest.setSystemTime(new Date(1743534000*1000).getTime());
        })
        afterAll(() => {
            jest.useRealTimers();
        })

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
    describe("Displays 'x minutes ago' (rounded) when time difference is less than 60 minutes", () => {
        
        beforeAll(() => {
            // mock system time to 4/1/2025 12:00pm PST
            jest.useFakeTimers();
            jest.setSystemTime(new Date(1743534000*1000).getTime());
        })
        afterAll(() => {
            jest.useRealTimers();
        })

        it("displays 'a minute ago'", () => {
            // 11:59am -> 12:00pm 
            const {rerender} = render(<Time timestamp='1743533940'/>)
            screen.getByText('a minute ago');
            // 11:58:01am -> 12:00pm
            rerender(<Time timestamp='1743533881'/>)
            screen.getByText('a minute ago');
        });
        it("doesn't display 'a minute ago'", () => {
            // 11:58am -> 12:00pm
            render(<Time timestamp='1743533880'/>)
            const text = screen.queryByText('a minute ago');
            expect(text).not.toBeInTheDocument();
        });
        it("displays '30 minutes ago'", () => {
            // 11:30am -> 12:00pm 
            const {rerender} = render(<Time timestamp='1743532200'/>)
            screen.getByText('30 minutes ago');

            // 11:29:01 -> 12:00pm
            rerender(<Time timestamp='1743532141'/>)
            screen.getByText('30 minutes ago');
        });
        it("displays '59 minutes ago'", () => {
            // 11:00:01am -> 12:00pm 
            render(<Time timestamp='1743530401'/>)
            screen.getByText('59 minutes ago');
        });


    });
    describe("Displays 'x hours ago' when time difference is greater than 60 minutes", () => {

        beforeAll(() => {
            // mock system time to 4/1/2025 12:00pm PST
            jest.useFakeTimers();
            jest.setSystemTime(new Date(1743534000*1000).getTime());
        })
        afterAll(() => {
            jest.useRealTimers();
        })

        it("displays 'an hour ago' when time difference is between 60 and 119 minutes", () => {
            // 11:00am -> 12:00pm 
            const {rerender} = render(<Time timestamp='1743530400'/>)
            screen.getByText('an hour ago');
            // 10:30am -> 12:00pm
            rerender(<Time timestamp='1743528600'/>)
            screen.getByText('an hour ago');
            // 10:00:01am -> 12:00pm
            rerender(<Time timestamp='1743526801'/>)
            screen.getByText('an hour ago');
        });
        it("displays 'x hours ago' when time difference is 120 minutes or greater", () => {
            // 10:00am -> 12:00pm 
            const {rerender} = render(<Time timestamp='1743526800'/>);
            screen.getByText('2 hours ago');

            const text = screen.queryByText('an hour ago');
            expect(text).not.toBeInTheDocument();

            // 9:00am -> 12:00pm
            rerender(<Time timestamp='1743523200'/>)
            screen.getByText('3 hours ago');
        });
    });
    describe("It displays 'x days ago' when time difference is 24 hours or greater", () => {

        beforeAll(() => {
            // mock system time to 4/1/2025 12:00pm PST
            jest.useFakeTimers();
            jest.setSystemTime(new Date(1743879600*1000).getTime());
        })
        afterAll(() => {
            jest.useRealTimers();
        })

        it("displays 'a day ago' when time difference is between 24 hours and 48 hours", () => {
            // 4th 12:00pm ->  5th, 12:00pm 
            const {rerender} = render(<Time timestamp='1743793200'/>);
            screen.getByText('a day ago');

            // 3rd 12:00:01pm -> 5th, 12:00pm 
            rerender(<Time timestamp='1743706801'/>)
            screen.getByText('a day ago');
        });
        it("displays 'x days ago' when time difference is above 48 hours", () => {
            // 3rd 12:00pm ->  5th, 12:00pm 
            const {rerender} = render(<Time timestamp='1743706800'/>);
            screen.getByText('2 days ago');

            // 1st 12:00pm -> 5th, 12:00pm 
            rerender(<Time timestamp='1743534000'/>)
            screen.getByText('4 days ago');

            // 1st 12:00:01pm -> 5th, 12:00pm 
            rerender(<Time timestamp='1743534001'/>)
            screen.getByText('3 days ago');
        });
    });

    // TODO create cases for months, and years
    
});