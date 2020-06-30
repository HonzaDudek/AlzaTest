import styled from 'styled-components';

// Define our button, but with the use of props.theme this time
export const StyledDetailPage = styled.div`
  font-family: 'Roboto', sans-serif;
`;
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
StyledDetailPage.defaultProps = {
  theme: {
    font: `'Roboto', sans-serif`,
  },
};
