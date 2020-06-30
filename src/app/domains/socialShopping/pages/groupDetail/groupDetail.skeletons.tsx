import React from 'react';
import {
  LinerBorder,
  StyledHeader,
  StyledLandingPage,
  StyledDesktopLandingPage,
  StyledGroupStatusDesktop,
  StyledGreySection,
  StyledSectionContent,
  StyledWhiteSection,
} from './groupDetail.styles';
import {
  StyledSkeletonLine,
  StyledSkeletonRectangle,
} from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms.styles';
import { InfoPanelSkeleton } from '../../molecules/infoPanel/infoPanel';
import { StyledInfoPanel } from '../../molecules/infoPanel/infoPanel.styles';
import AlzaText, {
  AlzaTextTag,
} from '../../../../sharedComponents/atoms/alzaText/alzaText';
import cn from 'classnames';
import { ProductCardType } from '../../molecules/productCard/productCard';
import CSSClasses from '../../molecules/productCard/productCard.module.scss';
import { GroupListItemSkeleton } from '../../atoms/groupListItem/groupListItem.skeletons';

export const GroupDetailDesktopSkeleton: React.FC = () => {
  return (
    <>
      <StyledDesktopLandingPage hasAvailableSpots={true}>
        <StyledGroupStatusDesktop>
          <div
            className={cn(
              CSSClasses.card,
              CSSClasses[ProductCardType.LandingPage]
            )}
            style={{ maxWidth: '650px', backgroundColor: 'white' }}
          >
            <div className={CSSClasses.descriptionWrapper}>
              <StyledSkeletonLine height='64px' width='300px' />
              <AlzaText tag={AlzaTextTag.Paragraph}>
                <StyledSkeletonLine height='14px' width='350px' />
                <StyledSkeletonLine height='14px' width='350px' />
                <StyledSkeletonLine height='14px' width='350px' />
                <StyledSkeletonLine height='14px' width='100px' />
              </AlzaText>
            </div>
            <div className={CSSClasses.image}>
              <StyledSkeletonRectangle size={180} />
            </div>
          </div>
        </StyledGroupStatusDesktop>
        <StyledSkeletonLine
          height='32px'
          width='125px'
          style={{ margin: '20px 0' }}
        />
        <StyledSkeletonLine
          height='60px'
          width='315px'
          style={{ marginBottom: '20px' }}
        />
        <StyledGreySection style={{ textAlign: 'center' }}>
          <StyledSectionContent>
            <StyledSkeletonLine height='60px' width='315px' />
            <StyledSkeletonLine height='20px' width='850px' />

            <StyledSkeletonLine
              height='60px'
              width='200px'
              style={{ margin: '20px auto 25px auto', display: 'block' }}
            />
          </StyledSectionContent>
        </StyledGreySection>
        <StyledWhiteSection>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <div
              style={{ width: '100%', display: 'flex', flexDirection: 'row' }}
            >
              <InfoPanelSkeleton />
              <InfoPanelSkeleton />
              <InfoPanelSkeleton />
              <InfoPanelSkeleton />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <StyledSkeletonLine height='45px' />
              <StyledSkeletonLine height='45px' />
              <StyledSkeletonLine height='45px' />
              <StyledSkeletonLine height='45px' />
              <StyledSkeletonLine height='45px' />
              <StyledSkeletonLine height='45px' />
              <StyledSkeletonLine height='45px' />
            </div>
          </div>
        </StyledWhiteSection>
      </StyledDesktopLandingPage>
    </>
  );
};

export const GroupDetailMobileSkeleton: React.FC = () => {
  return (
    <StyledLandingPage hasAvailableSpots={true}>
      <StyledHeader className='header'>
        <StyledSkeletonRectangle size={50} />
        <StyledSkeletonLine height='32px' width='200px' />
      </StyledHeader>
      <StyledInfoPanel>
        <StyledSkeletonRectangle size={120} />
        <StyledSkeletonLine
          height='32px'
          width={'75%'}
          style={{ marginBottom: '20px' }}
        />
        <StyledSkeletonLine />
        <StyledSkeletonLine />
        <StyledSkeletonLine style={{ marginBottom: '20px' }} />
        <StyledSkeletonLine height='14px' width='100px' />
        <StyledSkeletonLine height='14px' width='100px' />
        <LinerBorder />
        <StyledSkeletonLine
          height='32px'
          width='150px'
          style={{ marginTop: '35px', marginBottom: '20px' }}
        />
        <GroupListItemSkeleton />
        <GroupListItemSkeleton />
        <GroupListItemSkeleton />
        <GroupListItemSkeleton />
        <StyledSkeletonLine
          height='32px'
          width='250px'
          style={{ marginTop: '20px' }}
        />
        <InfoPanelSkeleton />
        <InfoPanelSkeleton />
        <InfoPanelSkeleton />
        <InfoPanelSkeleton />
        <StyledSkeletonLine
          height='32px'
          width='150px'
          style={{ marginTop: '20px' }}
        />
        <StyledSkeletonLine height='45px' />
        <StyledSkeletonLine height='45px' />
        <StyledSkeletonLine height='45px' />
        <StyledSkeletonLine height='45px' />
      </StyledInfoPanel>
    </StyledLandingPage>
  );
};
