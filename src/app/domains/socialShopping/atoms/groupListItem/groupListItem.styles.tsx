import styled from 'styled-components';
import { baseTheme, FontWeight } from '../../../../../utils/theme';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${baseTheme.colors.greenPrimaryLight}
      url('/Styles/images/svg/f-check.svg') no-repeat center;
  }
`;
export const StyledEmptyLi = styled(StyledLi)`
  &:before {
    box-shadow: 0 1px 4px ${baseTheme.boxShadowColors.default};
    background-color: ${baseTheme.colors.white};
    background-image: url('/Styles/images/svg/f-add-person.svg');
  }
`;
export const StyledSpanWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledSpanBold = styled.span`
  color: ${baseTheme.colors.dark1};
  font-size: 14px;
  font-weight: ${FontWeight.Bold};
`;
export const StyledSpanBoldBlue = styled(StyledSpanBold)`
  color: ${baseTheme.colors.bluePrimary};
`;
export const StyledSpanGrey = styled.span`
  color: ${baseTheme.colors.grey5};
  font-size: 12px;
  font-weight: ${FontWeight.Regular};
`;
export const StyledLink = styled.div`
  color: ${baseTheme.colors.bluePrimary};
  font-size: 12px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
