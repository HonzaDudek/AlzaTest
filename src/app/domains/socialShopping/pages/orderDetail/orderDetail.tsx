import React, { useState } from 'react';
import { Portal } from 'react-portal';
// Import custom components
import AlzaDrawer from '../../../../sharedComponents/organisms/drawer/alzaDrawer';
import { LinerBorder } from '../groupDetail/groupDetail.styles';
import { OrderDetailContent } from '../../organisms/orderDetailContent/orderDetailContent';
import { OrderDetailHeader } from '../../organisms/orderDetailHeader/orderDetailHeader';
import { SocialShoppingOrderDetailProps } from './orderDetail.data';
import { StyledOrderDetailPanel } from './orderDetail.styles';
// Import hooks
import { useSocialShoppingShareDialog } from '../../hooks/useSocialShoppingShare';
import { handleFormAction } from '../../../../services/formHandler';
import { ShareDialogContent } from '../groupDetail/components/shareDialog';
import { StyledConfirmDialog } from '../../../confirmDialog/socialShoppingConfirmDialog.styles';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { BuyBasketIcon } from '../../../../../assets/icons/buyBasketIcon';
import { CrossIcon } from '../../../../../assets/icons/crossIcon';
import { baseTheme } from '../../../../../utils/theme';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';

export type OrderDetailProps = {
  orderItemInfo: SocialShoppingOrderDetailProps;
  isMobile?: boolean;
};

/**
 * Order detail types
 */
export type OrderDetailContentProps = {
  openConfirmationDialog?: () => void;
  orderItemInfo: SocialShoppingOrderDetailProps;
  buyProduct?: (() => void) | null;
  className?: string;
  isMobile?: boolean;
  removeProduct?: (() => void) | null;
  share?: () => void;
  renderActions?: boolean;
};

const OrderDetail: React.FC<OrderDetailProps> = ({
  orderItemInfo,
  isMobile = true,
}: OrderDetailProps) => {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const analytics = Analytics.getInstance();
  analytics.initChannels(
    window?.Alza?.Shared?.PageData?.googleAnalyticsChannels ?? []
  );

  const groupInfo = [
    {
      groupSize: orderItemInfo.socialShoppingInfo.groupSize,
      capacityLeft:
        orderItemInfo.socialShoppingInfo.groupSize -
        orderItemInfo.socialShoppingInfo.participants.length,
      capacityLeftText: orderItemInfo.socialShoppingInfo.capacityLeftText
        ? orderItemInfo.socialShoppingInfo.capacityLeftText
        : '',
      shareUrl: orderItemInfo.socialShoppingInfo.shareUrl,
      commodity: {
        id: orderItemInfo.commodityId,
        img: orderItemInfo.imageUrl,
        name: orderItemInfo.commodityName,
        url: orderItemInfo.commodityUrl,
        originalPrice: orderItemInfo.socialShoppingInfo.originalPrice,
        // TODO: get discount price from BL
        discountPrice: orderItemInfo.price,
        // TODO: get discount price from BL
        priceDifference: orderItemInfo.socialShoppingInfo.priceDifference,
        // TODO: get commodity specification from BL
        specification: orderItemInfo.commodityName,
      },
      sharingDialog: orderItemInfo.socialShoppingInfo.sharingDialog,
      texts: {},
    },
  ];

  const paymentAction = orderItemInfo.socialShoppingInfo.paymentAction;
  const refundAction = orderItemInfo.socialShoppingInfo.refundAction;

  const handleRemoveProduct = (): void => {
    handleFormAction(orderItemInfo.socialShoppingInfo.refundAction?.form, '#');
  };

  const handleBuyProduct = (): void => {
    handleFormAction(orderItemInfo.socialShoppingInfo.paymentAction?.form, '#');
  };

  const {
    isShareDialogOpen,
    openDialog,
    closeShareDialog,
  } = useSocialShoppingShareDialog(groupInfo);

  return (
    <AnalyticsProvider Analytics={analytics}>
      <StyledOrderDetailPanel orderItemInfo={orderItemInfo} isMobile={isMobile}>
        <OrderDetailHeader
          orderItemInfo={orderItemInfo}
          isMobile={isMobile}
          removeProduct={
            refundAction ? (): void => handleRemoveProduct() : null
          }
          buyProduct={paymentAction ? (): void => handleBuyProduct() : null}
          openConfirmationDialog={(): void => setIsConfirmDialogOpen(true)}
          renderActions={refundAction !== null || paymentAction !== null}
        />
        <LinerBorder />
        <OrderDetailContent
          orderItemInfo={orderItemInfo}
          removeProduct={
            refundAction ? (): void => handleRemoveProduct() : null
          }
          buyProduct={paymentAction ? (): void => handleBuyProduct() : null}
          openConfirmationDialog={(): void => setIsConfirmDialogOpen(true)}
          renderActions={refundAction !== null || paymentAction !== null}
          share={(): void | {} => (openDialog ? openDialog(groupInfo[0]) : {})}
          isMobile={isMobile}
          className='orderDetailContent'
        />
        <Portal>
          <AlzaDrawer
            isOpen={isShareDialogOpen}
            onChange={closeShareDialog}
            fullScreen={false}
          >
            <ShareDialogContent groupInfo={groupInfo[0]} />
          </AlzaDrawer>
          {isMobile ? (
            <AlzaDrawer
              isOpen={isConfirmDialogOpen}
              onChange={(): void => setIsConfirmDialogOpen(false)}
              fullScreen={false}
            >
              <StyledConfirmDialog>
                {orderItemInfo.socialShoppingInfo.paymentAction !== null && (
                  <Button
                    size={ButtonSize.Normal}
                    width={ButtonWidth.FullWidth}
                    color={ButtonColor.Green}
                    onClick={handleBuyProduct}
                  >
                    <BuyBasketIcon />
                    {orderItemInfo.socialShoppingInfo.paymentAction.name}
                  </Button>
                )}
                {orderItemInfo.socialShoppingInfo.refundAction !== null ? (
                  <Button
                    size={ButtonSize.Normal}
                    width={ButtonWidth.FullWidth}
                    color={ButtonColor.Grey}
                    onClick={handleRemoveProduct}
                  >
                    <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
                    {orderItemInfo.socialShoppingInfo.refundAction.name}
                  </Button>
                ) : null}
              </StyledConfirmDialog>
            </AlzaDrawer>
          ) : null}
        </Portal>
      </StyledOrderDetailPanel>
    </AnalyticsProvider>
  );
};

export default OrderDetail;
