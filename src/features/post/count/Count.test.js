import React from 'react';
import { render, screen } from '@testing-library/react';
import Count from './Count';

describe('Base component that takes in a number and shortens it', () => {
    it('prints numbers 0 to 999 as is', () => {
        const {rerender} = render(<Count number='999'/>);
        screen.getByText('999');
        rerender(<Count number='500'/>);
        screen.getByText('500');
        rerender(<Count number='0'/>);
        screen.getByText('0');
    })
    it('prints numbers 1000 to 999,949 rounded to 1.0k to 999.9k', () => {
        const {rerender} = render(<Count number='1000'/>);
        screen.getByText('1K');
        rerender(<Count number='1249'/>);
        screen.getByText('1.2K');
        rerender(<Count number='20000'/>);
        screen.getByText('20K');
        rerender(<Count number='20566'/>);
        screen.getByText('20.6K');
        rerender(<Count number='300000'/>);
        screen.getByText('300K');
        rerender(<Count number='351560'/>);
        screen.getByText('351.6K');
        rerender(<Count number='999949'/>);
        screen.getByText('999.9K');
    })
    it('prints numbers 999,950 to 999,949,999 rounded to 1.0m to 999.9m', () => {
        const {rerender} = render(<Count number='999950'/>);
        screen.getByText('1M');
        rerender(<Count number='1100000'/>);
        screen.getByText('1.1M');
        rerender(<Count number='10000000'/>);
        screen.getByText('10M');
        rerender(<Count number='10410000'/>);
        screen.getByText('10.4M');
        rerender(<Count number='100000000'/>);
        screen.getByText('100M');
        rerender(<Count number='100860000'/>);
        screen.getByText('100.9M');
        rerender(<Count number='999000000'/>);
        screen.getByText('999M');
        rerender(<Count number='999949999'/>);
        screen.getByText('999.9M');
    })
    it('prints negative numbers as all other numbers, but appends -', () => {
        const {rerender} = render(<Count number='-999'/>);
        screen.getByText('-999');
        rerender(<Count number='-1249'/>);
        screen.getByText('-1.2K');
        rerender(<Count number='-999949'/>);
        screen.getByText('-999.9K');
        rerender(<Count number='-1100000'/>);
        screen.getByText('-1.1M');
        rerender(<Count number='-999949999'/>);
        screen.getByText('-999.9M');
    })
})