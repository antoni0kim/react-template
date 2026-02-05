import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

describe('App', () => {
	test('Simple unit test setup', () => {
		expect(2 + 2).toBe(4);
	})
	test('App should display hello, world', () => {
		render(<App />);
		expect(screen.getByRole('heading', { level: 1, name: 'Hello, world!' })).toBeDefined();
	})
})