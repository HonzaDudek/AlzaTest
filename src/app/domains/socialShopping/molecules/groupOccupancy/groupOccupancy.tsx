import { socialShoppingShareGroupType } from '../../organisms/groupSharing/shareComponent.types';
import React, { FC } from 'react';
import ProgressBar from '../../../../sharedComponents/atoms/progressBar/progressBar';
import { ProgressBarColorThemeEnum } from '../../../../sharedComponents/atoms/progressBar/progressBar.theme';
import { useDeviceContext } from '../../../../services/deviceContext';
import CssClassesMobile from '../../organisms/groupSharing/groupSharing-mobile.module.scss';
import CssClassesDesktop from '../../organisms/groupSharing/groupSharing-desktop.module.scss';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { baseTheme } from '../../../../../utils/theme';

type GroupOccupancyProps = {
  group: socialShoppingShareGroupType;
};

/**
 * Occupancy of social shopping group
 * @param group - social shopping group
 */
const GroupOccupancy: FC<GroupOccupancyProps> = ({ group }) => {
  const isMobile = useDeviceContext();
  const cssClasses = isMobile ? CssClassesMobile : CssClassesDesktop;

  return (
    <div className={cssClasses.people}>
      <ProgressBar
        colorTheme={ProgressBarColorThemeEnum.Blue}
        minValue={0}
        maxValue={group.groupSize}
        now={group.groupSize - group.capacityLeft}
      />
      <div>{group.capacityLeftText}</div>
      {group.texts?.expirationDateText && (
        <AlzaText size='14px' color={baseTheme.colors.grey5} centered={false}>
          {group.texts.expirationDateText}
        </AlzaText>
      )}
    </div>
  );
};

export default GroupOccupancy;
