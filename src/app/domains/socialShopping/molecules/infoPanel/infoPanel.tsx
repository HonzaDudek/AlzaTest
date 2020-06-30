import React from 'react';
import { StyledInfoPanelWrapper } from './infoPanel.styles';
import { ReactSVG } from 'react-svg';
import {
  StyledSkeletonCircle,
  StyledSkeletonLine,
  StyledSkeletonRectangle,
} from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { baseTheme } from '../../../../../utils/theme';

export type InfoPanelType = {
  icon?: string;
  index: number;
};

export const InfoPanel: React.FC<InfoPanelType> = props => {
  return (
    <StyledInfoPanelWrapper>
      <div className='index'>{props.index}</div>
      {props.icon && (
        <ReactSVG
          src={props.icon}
          beforeInjection={(svg): void => {
            svg.classList.add('svg-class-name');
            svg.setAttribute('style', 'width: 72px');
            svg.setAttribute('style', 'height: 53px');
          }}
        />
      )}
      <AlzaText color={baseTheme.colors.grey6}>{props.children}</AlzaText>
    </StyledInfoPanelWrapper>
  );
};

export const InfoPanelSkeleton: React.FC = () => {
  return (
    <StyledInfoPanelWrapper>
      <StyledSkeletonCircle size={26} className='index' />
      <StyledSkeletonRectangle size={33} />
      <StyledSkeletonLine style={{ width: '90%' }} />
      <StyledSkeletonLine style={{ width: '75%' }} />
    </StyledInfoPanelWrapper>
  );
};
