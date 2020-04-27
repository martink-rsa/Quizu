import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';
import Theme from '../../styles/theme';

expect.extend(toHaveNoViolations);

const renderWithTheme = (component) => render(<Theme>{component}</Theme>);

function setup() {
  return renderWithTheme(<App />);
}

describe('Accessibility', () => {
  test('There are no obvious accessibility violations in the app', async () => {
    const { container } = setup();
    expect(await axe(container)).toHaveNoViolations();
  });
});
