import React, { useState } from 'react';
import {
  StyledEmptyLi,
  StyledLink,
  StyledSpanBoldBlue,
  StyledSpanWrapper,
} from './groupListItem.styles';
import { PopoverContainerStyles } from '../../pages/orderDetail/orderDetail.styles';
import { baseTheme } from '../../../../../utils/theme';
import {
  AlzaPopover,
  alzaPopoverPositionOptions,
} from '../../../../sharedComponents/molecules/alzaPopover/alzaPopover';

type GroupEmptyListItemWithPopoverProps = {
  emptySlotName: string;
  emptySlotLinkText: string;
  onClick?: () => void;
  emptySlots: number;
  index: number;
  popoverContent: React.ReactElement;
};

export const GroupEmptyListItemWithPopover: React.FC<GroupEmptyListItemWithPopoverProps> = ({
  emptySlotName,
  onClick,
  emptySlotLinkText,
  popoverContent,
}: GroupEmptyListItemWithPopoverProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  return (
    <AlzaPopover
      isOpen={isPopperOpen}
      popoverContent={popoverContent}
      popoverTrigger={
        <StyledEmptyLi>
          <StyledSpanWrapper>
            <StyledSpanBoldBlue>{emptySlotName}</StyledSpanBoldBlue>
            <StyledLink onClick={onClick}>{emptySlotLinkText}</StyledLink>
          </StyledSpanWrapper>
        </StyledEmptyLi>
      }
      style={PopoverContainerStyles}
      position={alzaPopoverPositionOptions.Right}
      hasArrow={true}
      onChange={(nextState: boolean): void => setIsPopperOpen(nextState)}
      arrowColor={baseTheme.colors.white}
    />
  );
};

export default GroupEmptyListItemWithPopover;
