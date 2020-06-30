import { baseTheme, Font } from '../../../../../utils/theme';
import React from 'react';
import styled from 'styled-components';
import { PartlyBoldText } from '../../../../sharedComponents/atoms/partlyBoldText/partlyBoldText';

type StyledActionRowDescriptionType = {
  isMobile: boolean;
};

export const StyledActionRowDescription = styled.p<
  StyledActionRowDescriptionType
>`
  margin: 0;
  line-height: ${(props): string => (props.isMobile ? '25px' : '30px')};
  font-family: ${Font.primary};
  text-align: center;
  max-width: 680px;
  font-size: 14px;
  color: ${baseTheme.colors.grey5};
`;

type GroupDetailActionHeaderProps = {
  title: string;
  titleDecorated?: string;
  description?: string | null;
  isMobile: boolean;
};

export const GroupDetailActionHeader: React.FC<GroupDetailActionHeaderProps> = ({
  title,
  description,
  titleDecorated,
  isMobile,
}: GroupDetailActionHeaderProps) => {
  return (
    <>
      <PartlyBoldText
        regularText={title}
        boldText={titleDecorated ?? ''}
        data-testid='groupDetail__header'
        className='actionHeader'
      />
      {description && (
        <StyledActionRowDescription isMobile={isMobile}>
          {description}
        </StyledActionRowDescription>
      )}
    </>
  );
};
