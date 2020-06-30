import React, { FunctionComponent } from 'react';
import CssClasses from './groupSharingContainer-mobile.module.scss';

/**
 * Container for sharing social shopping (bordered block with icon)
 * Mobile web version
 * @param props Props
 */
export const GroupSharingContainer: FunctionComponent = props => {
  return (
    <div
      className={CssClasses.container}
      data-testid='GroupSharingContainerMobile'
    >
      {props.children}
    </div>
  );
};

export default GroupSharingContainer;
