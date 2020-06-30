import { HowToType } from '../../organisms/groupDialog/groupDialog';

export type FAQType = {
  question: string;
  answer: string;
};

export type GroupDetailTexts = {
  availability: string;
  commonTitle: string | null;
  commonTitleDecorated: string | null;
  dummyParticipantName?: string;
  dummyParticipantText?: string;
  expirationDateText?: string;
  faq?: FAQType[];
  faqTitle?: string;
  groupDetailTitle: string;
  groupDetailTitleDecorated?: string;
  groupDetailHeadDescription?: string | null;
  groupDetailStatusText?: string;
  howTo?: HowToType[];
  howToTitle?: string;
  howToTitleDecorated?: string;
  loadingButtonText?: string;
  loadingInfoDescription?: string;
  loadingInfoTitle?: string;
  memberStatus?: string;
  moreProductInfoLabel?: string;
  saleLabel: string;
  shareAndSaveLabel: string;
  sharingButtonText?: string;
  sharingDescription?: string;
  sharingTitle?: string;
};
