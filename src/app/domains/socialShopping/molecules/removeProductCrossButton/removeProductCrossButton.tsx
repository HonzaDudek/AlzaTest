import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { CrossIcon } from '../../../../../assets/icons/crossIcon';
import { baseTheme } from '../../../../../utils/theme';
import {
  PopoverContainerStyles,
  StyledOrderDetailPopover,
} from '../../pages/orderDetail/orderDetail.styles';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import { ClickableWrapper } from '../../../../sharedComponents/atoms/clickableWrapper/clickableWrapper';
import {
  AlzaPopover,
  alzaPopoverPositionOptions,
} from '../../../../sharedComponents/molecules/alzaPopover/alzaPopover';

type RemoveProductCrossButton = {
  removeProduct: (() => void) | null;
  buyProduct: (() => void) | null;
  openConfirmationDialog?: () => void;
  isMobile?: boolean;
  testId?: number;
  renderActions?: boolean;
  popoverContent: {
    buttonTexts: {
      confirmButtonText?: string;
      refundButtonText?: string;
    };
  };
};

export const RemoveProductCrossButton: React.FC<RemoveProductCrossButton> = ({
  removeProduct,
  buyProduct,
  openConfirmationDialog,
  isMobile,
  popoverContent,
  renderActions,
}) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  if (isMobile) {
    return (
      <CrossIcon
        fill={baseTheme.colors.black}
        size={12}
        onClick={(): void =>
          openConfirmationDialog && renderActions
            ? openConfirmationDialog()
            : console.error(
                'Handler for confirmation dialog was not passed to component'
              )
        }
        data-testid={`removeProductCrossButton`}
      />
    );
  } else {
    return (
      <AlzaPopover
        isOpen={isPopperOpen}
        popoverContent={
          <StyledOrderDetailPopover>
            {buyProduct && (
              <Button
                color={ButtonColor.Green}
                size={ButtonSize.Normal}
                width={ButtonWidth.FullWidth}
                onClick={(): void => buyProduct()}
                data-testid='btn__buyForFullPrice'
              >
                <ReactSVG
                  src={getImageUrl('Styles/images/svg/shopping-cart.svg')}
                />
                {popoverContent.buttonTexts.confirmButtonText}
              </Button>
            )}
            {removeProduct && (
              <Button
                color={ButtonColor.Grey}
                size={ButtonSize.Normal}
                width={ButtonWidth.FullWidth}
                onClick={removeProduct}
                data-testid='btn__refund'
              >
                <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
                {popoverContent.buttonTexts.refundButtonText}
              </Button>
            )}
          </StyledOrderDetailPopover>
        }
        popoverTrigger={
          <ClickableWrapper
            onClick={(): void => setIsPopperOpen(true)}
            pointer={true}
          >
            <CrossIcon
              fill={baseTheme.colors.grey50}
              size={14}
              onClick={(): void => setIsPopperOpen(true)}
              data-testid={`removeProductCrossButton`}
            />
          </ClickableWrapper>
        }
        style={PopoverContainerStyles}
        position={alzaPopoverPositionOptions.Left}
        hasArrow={true}
        onChange={(nextState: boolean): void => setIsPopperOpen(nextState)}
        arrowColor={baseTheme.colors.white}
      />
    );
  }
};
