import { AppAction, NamedAction } from '../../../../../utils/apiDataTypes';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';

export type OrderDetailSocialShoppingParticipantV1 = {
  name: string;
  city: string;
  isOrderClient?: boolean;
};

export type OrderDetailSocialShoppingItemV1 = {
  self?: AppAction;
  shareButtonText?: string;
  capacityLeftText: string;
  description: string;
  groupSize: number;
  originalPrice: string;
  participants: OrderDetailSocialShoppingParticipantV1[];
  participantShareText?: string;
  paymentAction: NamedAction | null;
  priceDifference: string;
  refundAction: NamedAction | null;
  sharingDialog: {
    title: string;
    dialogTitle: string;
    shareUrl: string;
    buttonText: string;
  };
  shareUrl: string;
  status: GroupStatus;
  statusText: string | null;
  memberStatusText?: string;
};

export type SocialShoppingOrderDetailProps = {
  self: AppAction;
  commodityId: number;
  commodityName: string;
  commodityUrl: string;
  imageUrl: string;
  status: string;
  count: number;
  pricePerItem: string;
  price: string;
  socialShoppingInfo: OrderDetailSocialShoppingItemV1;
  commodityDetail: NamedAction;
  addServiceAction: NamedAction | null;
  addServiceForm: NamedAction | null;
  incrementCountAction: NamedAction | null;
  decrementCountAction: NamedAction | null;
  removeItemAction: NamedAction | null;
};
