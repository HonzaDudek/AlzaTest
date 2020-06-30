import React, { FunctionComponent } from 'react';
import { EmptySlot } from '../../molecules/groupList/groupList';
import {
  StyledEmptyLi,
  StyledLink,
  StyledSpanBoldBlue,
  StyledSpanWrapper,
} from './groupListItem.styles';

const GroupEmptyListItem: FunctionComponent<EmptySlot> = ({
  emptySlotName,
  onClick,
  emptySlotLinkText,
}: EmptySlot) => {
  return (
    <StyledEmptyLi>
      <StyledSpanWrapper>
        <StyledSpanBoldBlue>{emptySlotName}</StyledSpanBoldBlue>
        <StyledLink onClick={onClick}>{emptySlotLinkText}</StyledLink>
      </StyledSpanWrapper>
    </StyledEmptyLi>
  );
};

export default GroupEmptyListItem;
