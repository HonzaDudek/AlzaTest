import React from 'react';
import { StyledDesktopUl, StyledMobileUl } from './groupList.styles';

type ExpandableGroupListType = {
  children: JSX.Element[];
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
  buttonText: string;
  isMobile?: boolean;
};

export const ExpandableGroupList: React.FC<ExpandableGroupListType> = props => {
  const content = (
    <>
      {props.children}
      <div
        className={`showFullList ${
          props.isExpanded ? 'expanded' : 'collapsed'
        }`}
      >
        <button
          className={`showFullList__btn ${
            props.isExpanded ? 'expanded' : 'collapsed'
          }`}
          onClick={(): void => props.setIsExpanded(!props.isExpanded)}
        >
          {props.buttonText}
        </button>
      </div>
    </>
  );

  if (props.isMobile) {
    return (
      <StyledMobileUl
        className={`groupList ${props.isExpanded ? 'expanded' : 'collapsed'}`}
      >
        {content}
      </StyledMobileUl>
    );
  } else {
    return (
      <StyledDesktopUl
        className={`groupList ${props.isExpanded ? 'expanded' : 'collapsed'}`}
      >
        {content}
      </StyledDesktopUl>
    );
  }
};
