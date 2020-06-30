import React, { FC } from 'react';
import { render } from '@testing-library/react';

import { UserProvider, useUserContext } from './userContext';

const TestingComponent: FC = () => {
  const user = useUserContext();
  return <span>{user ? 'logged' : 'anonymous'}</span>;
};

describe('UserContext', () => {
  test('should pass logged user to context consumer', () => {
    const { getByText } = render(
      <UserProvider id={123} code='SE123'>
        <TestingComponent />
      </UserProvider>
    );

    expect(getByText('logged')).toBeTruthy();
  });

  test('should pass empty user / anonymous to context consumer', () => {
    const { getByText, queryByText } = render(
      <UserProvider>
        <TestingComponent />
      </UserProvider>
    );

    expect(queryByText('logged')).toBeNull();
    expect(getByText('anonymous')).toBeTruthy();
  });

  test('should throw Error if not wrapped in Provider', () => {
    jest.spyOn(global.console, 'error').mockImplementation();
    expect(() => {
      render(<TestingComponent />);
    }).toThrowError('useUserContext must be used within a UserProvider');
  });
});
