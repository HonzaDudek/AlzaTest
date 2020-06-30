import React, { FunctionComponent } from 'react';
import {
  StyledLi,
  StyledLink,
  StyledSpanBold,
  StyledSpanGrey,
  StyledSpanWrapper,
} from './groupListItem.styles';

export type Person = {
  name?: string;
  city?: string;
  isOrderClient?: boolean;
  description?: string;
};

export type GroupListItemProps = {
  person: Person;
  onClick?: () => void;
  renderActions?: boolean;
};

const GroupListItem: FunctionComponent<GroupListItemProps> = (
  { person, onClick, renderActions }: GroupListItemProps,
  index
) => {
  return (
    <StyledLi className={`personItem-${index}`}>
      <StyledSpanWrapper>
        <StyledSpanBold>{person.name} </StyledSpanBold>
        {renderActions ? (
          <StyledLink onClick={onClick}>{person.description}</StyledLink>
        ) : (
          <StyledSpanGrey>{person.city}</StyledSpanGrey>
        )}
      </StyledSpanWrapper>
    </StyledLi>
  );
};

export default GroupListItem;
