import React, { useState } from 'react';
import {
  StyledLi,
  StyledLink,
  StyledSpanBold,
  StyledSpanGrey,
  StyledSpanWrapper,
} from './groupListItem.styles';
import { PopoverContainerStyles } from '../../pages/orderDetail/orderDetail.styles';
import { baseTheme } from '../../../../../utils/theme';
import {
  AlzaPopover,
  alzaPopoverPositionOptions,
} from '../../../../sharedComponents/molecules/alzaPopover/alzaPopover';

export type Person = {
  name?: string;
  city?: string;
  isOrderClient?: boolean;
  description?: string;
};

export type GroupListItemProps = {
  person: Person;
  onClick?: () => void;
  index: number;
  popoverContent: JSX.Element;
  renderActions?: boolean;
};

const GroupListItemWithPopover: React.FC<GroupListItemProps> = props => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  return (
    <AlzaPopover
      isOpen={isPopperOpen}
      popoverContent={props.popoverContent}
      popoverTrigger={
        <StyledLi className={`personItem-${props.index}`}>
          <StyledSpanWrapper>
            <StyledSpanBold>{props.person.name} </StyledSpanBold>
            {props.renderActions ? (
              <StyledLink onClick={(): void => setIsPopperOpen(true)}>
                {props.person.description}
              </StyledLink>
            ) : (
              <StyledSpanGrey>{props.person.city}</StyledSpanGrey>
            )}
          </StyledSpanWrapper>
        </StyledLi>
      }
      style={PopoverContainerStyles}
      position={alzaPopoverPositionOptions.Right}
      hasArrow={true}
      onChange={(nextState: boolean): void => setIsPopperOpen(nextState)}
      arrowColor={baseTheme.colors.white}
    />
  );
};

export default GroupListItemWithPopover;
