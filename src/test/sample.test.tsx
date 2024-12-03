import { describe, test } from 'vitest';
import Page from '@/app/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('SampleComponent', () => {
    test('renders correctly', () => {
        render(<Page />);
        // Añade tus aserciones aquí
    });

    test('displays the correct title', () => {
        render(<Page />);
        const titleElement = screen.getByText(/Content Section/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders a button', () => {
        render(<Page />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<Page />);
        expect(asFragment()).toMatchSnapshot();
    });
});