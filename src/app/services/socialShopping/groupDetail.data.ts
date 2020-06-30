import {
  AppAction,
  NamedAction,
  SocialShoppingCommodityDetailV1 as CommodityDetail,
} from '../../../utils/apiDataTypes';
import { GroupDetailTexts } from '../../domains/socialShopping/pages/groupDetail/groupDetail.data';

export const GroupDetailApiUrl = (groupHash?: string): string => {
  let groupApiUrl = '/api/socialShopping/v1/groups/';

  if (groupHash) {
    groupApiUrl += groupHash;
  }

  return groupApiUrl;
};

export type Participant = {
  name: string;
  city: string;
};

export type commodity = {
  self?: AppAction;
  id: string;
  name: string;
  descriptionCollapse: string;
  img: string;
  originalPrice: string;
  discountPrice: string;
  discount: string;
  discountAmount: string;
  deadline: string;
  shareUrl: string;
  url: string;
};

export type group = {
  state: string;
  commodity: commodity;
  participants: Participant[];
  remainingParticipants: {
    actual: number;
    total: number;
  };
};

export type GroupDetailResponse = {
  data?: GroupDetailData;
  isLoading?: boolean;
  isError?: boolean;
};

export type SharingDialogType = {
  buttonText: string;
  dialogTitle: string;
  shareUrl: string;
  title: string;
} | null;

export type GroupDetailData = {
  self?: AppAction;
  participants: Participant[] | null;
  hash: string;
  status: GroupStatus;
  commodity: CommodityDetail;
  groupSize: number;
  capacityLeft: number; // Useless we can count this from groupSize and participants.length
  capacityLeftText?: string;
  capacityLeftTextDecorated?: string;
  shareUrl: string | null;
  sharingDialog?: SharingDialogType;
  redirectOrderDetailAction?: NamedAction | null;
  redirectProductDetailAction?: NamedAction | null;
  createNewGroupAction?: NamedAction | null;
  backOfficeAction?: NamedAction | null;
  joinGroupAction?: NamedAction | null;
  addToBasketAction?: NamedAction | null;
  moreInfo?: NamedAction | null;
  isInStock: boolean;
  texts: GroupDetailTexts;
  expirationDate?: string;
};

export type SocialShoppingMoreInfo = {
  url: string;
  icon?: string;
  text: string;
};

export enum GroupStatus {
  None = 0,
  Active = 1,
  Expired = 2,
  Full = 3,
  GroupNotAvailable = 4,
  ProductNotAvailable = 5,
  NotLoaded = 6,
  InGroupActive = 7,
  InGroupNotActive = 8,
  InGroupNotAvailable = 9,
}

export type GroupDetailRequest = (
  groupApiUrl: string,
  groupHash: string | null
) => void;

export type GroupDetailHookData = {
  groupDetailResponse: GroupDetailResponse;
  loadGroupDetailData: GroupDetailRequest;
};
