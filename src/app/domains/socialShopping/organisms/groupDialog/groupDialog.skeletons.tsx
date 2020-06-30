import React from 'react';
import { StyledContent, StyledHeader } from './groupDialog.styles';
import { DrawerFooter } from '../../../../sharedComponents/molecules/drawerFooter/drawerFooter';
import Panel from '../../../../sharedComponents/atoms/panel/panel';
import {
  SkeletonListItem,
  StyledSkeletonLine,
} from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms';
import { StyledPriceLevel } from '../../molecules/priceLevel/priceLevel.styles';
import {
  StyledDesktopContent,
  LeftSide,
  RightSide,
} from './groupDialog.desktop.styles';
import { StyledOpenSocialShoppingPanel } from '../../molecules/socialShoppingToggleButton/socialShoppingToogle.styles';

export const PriceLevelSkeleton: React.FC = () => (
  <Panel>
    <StyledPriceLevel>
      <StyledSkeletonLine width='170px' height='15px' />
      <StyledSkeletonLine width='39px' />
    </StyledPriceLevel>
  </Panel>
);

export const ProductDetailSkeleton: React.FC = () => (
  <Panel>
    <StyledPriceLevel>
      <StyledSkeletonLine width='170px' height='15px' />
      <StyledSkeletonLine width='39px' />
    </StyledPriceLevel>
  </Panel>
);

export const ProductDetailDesktopSkeleton: React.FC = () => (
  <div style={{ marginBottom: '20px' }}>
    <Panel>
      <StyledSkeletonLine width='340px' height='15px' />
    </Panel>
  </div>
);

export const SocialShoppingToggleSkeleton: React.FC = () => (
  <Panel>
    <StyledOpenSocialShoppingPanel>
      <div className='icon'>
        <StyledSkeletonLine height='20px' width='20px' />
      </div>
      <div className='content'>
        <StyledSkeletonLine />
      </div>
      <div className='price' style={{ width: '50px' }}>
        <StyledSkeletonLine />
      </div>
    </StyledOpenSocialShoppingPanel>
  </Panel>
);

export const GroupDialogMobileSkeleton: React.FC = () => {
  return (
    <>
      <StyledContent>
        <StyledHeader>
          <StyledSkeletonLine height='32px' width='180px' />
        </StyledHeader>
        <div style={{ height: '30px' }} />
        <StyledSkeletonLine />
        <StyledSkeletonLine />
        <StyledSkeletonLine width='80%' />
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
        <ProductDetailSkeleton />
        <PriceLevelSkeleton />
        <PriceLevelSkeleton />
        <PriceLevelSkeleton />
      </StyledContent>
      <DrawerFooter>
        <StyledSkeletonLine height='32px' width='180px' />
      </DrawerFooter>
    </>
  );
};

export const GroupDialogDesktopSkeleton: React.FC = () => {
  return (
    <div style={{ maxWidth: '1100px' }}>
      <StyledDesktopContent>
        <LeftSide>
          <div style={{ padding: '30px 0' }}>
            <StyledSkeletonLine width='300px' height='25px' />
          </div>
          <StyledSkeletonLine width='540px' />
          <StyledSkeletonLine width='540px' />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <StyledSkeletonLine width='300px' height='25px' />
          </div>
          <SkeletonListItem />
          <SkeletonListItem />
          <SkeletonListItem />
          <SkeletonListItem />
        </LeftSide>
        <RightSide>
          <ProductDetailDesktopSkeleton />
          <ProductDetailDesktopSkeleton />
          <ProductDetailDesktopSkeleton />
        </RightSide>
      </StyledDesktopContent>
    </div>
  );
};
