import React, { FC } from 'react';
import CssClassesDesktop from '../groupSharing-desktop.module.scss';
import CssClassesMobile from '../groupSharing-mobile.module.scss';
import { socialShoppingShareGroupType } from '../shareComponent.types';
import { useDeviceContext } from '../../../../../services/deviceContext';

type peopleProps = {
  group: socialShoppingShareGroupType;
};
const PriceContent: FC<peopleProps> = ({ group }) => {
  const isMobile = useDeviceContext();
  const cssClasses = isMobile ? CssClassesMobile : CssClassesDesktop;

  return (
    <div className={cssClasses.priceCnt}>
      <div className={cssClasses.comparePrice}>
        {group.commodity.originalPrice}
      </div>
      <div className={cssClasses.price}>{group.commodity.discountPrice}</div>
    </div>
  );
};

export default PriceContent;
