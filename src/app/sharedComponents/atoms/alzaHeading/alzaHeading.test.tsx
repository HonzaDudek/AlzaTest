import { render, screen } from '@testing-library/react';
import AlzaHeading from './alzaHeading';
import React from 'react';

describe('testing level of titles', function() {
  test('should rendered content of title properly', function() {
    const titleText = 'Heading 1';
    render(<AlzaHeading level={1}>{titleText}</AlzaHeading>);
    expect(screen.getByText(titleText)).toBeTruthy();
  });

  test('should rendered h1 properly', function() {
    const titleText = 'Heading 1';
    render(<AlzaHeading level={1}>{titleText}</AlzaHeading>);
    expect(screen.getByRole('heading')).toBeTruthy();
  });
});
