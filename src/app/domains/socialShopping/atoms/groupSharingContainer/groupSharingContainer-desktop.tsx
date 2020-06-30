import React, { FunctionComponent } from 'react';
import CssClasses from './groupSharingContainer-desktop.module.scss';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';

/**
 * Container for sharing social shopping (bordered block with icon)
 * @param props Props
 */
export const GroupSharingContainer: FunctionComponent = props => {
  return (
    <div
      className={CssClasses.container}
      data-testid='GroupSharingContainerDesktop'
    >
      <IconSVG
        src='Styles/images/svg/socialShopping/icon-socialShopping.svg'
        height={32}
        width={40}
        className={CssClasses.titleIcon}
      ></IconSVG>
      {props.children}
    </div>
  );
};

export default GroupSharingContainer;
