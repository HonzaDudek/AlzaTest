import React from 'react';
import { Portal } from 'react-portal';
import { baseTheme } from '../../../../../utils/theme';
import {
  StyledGroupStatusDesktop,
  StyledGroupStatusMobile,
} from '../../pages/groupDetail/groupDetail.styles';
import { StyledButtonGroup } from '../../pages/groupDetail/components/groupStatus.style';
import {
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import {
  GroupDetailData,
  GroupStatus,
} from '../../../../services/socialShopping/groupDetail.data';
import AlzaDrawer from '../../../../sharedComponents/organisms/drawer/alzaDrawer';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import DialogContent from '../groupSharing/molecules/dialogContent';
import ModalDialog from '../../../../sharedComponents/atoms/modalDialog/modalDialog';
import SharingButton from '../../atoms/sharingButton/sharingButton';
import {
  BuyForFullPriceGreenButton,
  BuyForFullPriceWhiteButton,
} from '../../atoms/groupDetailButtons/buyForFullPriceButton';
import { CreateNewTeamButton } from '../../atoms/groupDetailButtons/createNewTeamButton';
import { DisplayOrderButton } from '../../atoms/groupDetailButtons/displayOrderButton';
import { GroupDetailActionHeader } from '../../atoms/groupDetailActionHeader/groupDetailActionHeader';
import { GroupList } from '../../molecules/groupList/groupList';
import { JoinGroupButton } from '../../atoms/groupDetailButtons/joinGroupButton';
import { LPButtonProps } from '../../pages/groupDetail/components/groupStatus';
import { ProductInfoButton } from '../../atoms/groupDetailButtons/productInfoButton';
import { ShareDialog } from '../../sharedComponents/shareDialog/shareDialog';
import { useSocialShoppingShareDialog } from '../../hooks/useSocialShoppingShare';

type InGroupActiveDesktopActionsProps = LPButtonProps & {
  isModalOpen?: boolean;
  openModalDialog: (nextState: boolean) => void;
  redirectUrl?: string;
  joinGroupAction: () => void;
};

const GroupActions: React.FC<InGroupActiveDesktopActionsProps> = ({
  groupDetails,
  isModalOpen = false,
  openModalDialog,
  redirectUrl,
  isMobile,
  joinGroupAction,
}: InGroupActiveDesktopActionsProps) => {
  const {
    isShareDialogOpen,
    shareDialogGroup,
    openShareDialog,
    closeShareDialog,
  } = useSocialShoppingShareDialog([groupDetails]);

  const BuyButtonComponent =
    (groupDetails.status === GroupStatus.InGroupNotActive &&
      groupDetails.createNewGroupAction === null) ||
    groupDetails.status === GroupStatus.GroupNotAvailable ||
    groupDetails.status === GroupStatus.InGroupNotAvailable
      ? BuyForFullPriceGreenButton
      : BuyForFullPriceWhiteButton;

  const getEmptySlotClickAction = (groupDetails: GroupDetailData): void => {
    if (groupDetails.joinGroupAction) {
      joinGroupAction();
      return;
    }
    if (isMobile) {
      openShareDialog(groupDetails.hash);
    } else {
      openModalDialog(true);
    }
  };

  // TODO: This should be handled from BL, but we have to wait for MOB to be ready
  const getActionRowHeader = (
    groupDetails: GroupDetailData
  ): React.ReactNode => {
    if (groupDetails.status === GroupStatus.Active) {
      return (
        <GroupDetailActionHeader
          title={groupDetails.capacityLeftText ?? ''}
          titleDecorated={groupDetails.capacityLeftTextDecorated}
          description={groupDetails.texts.groupDetailHeadDescription}
          isMobile={isMobile}
        />
      );
    } else if (
      groupDetails.status === GroupStatus.InGroupActive ||
      (groupDetails.status === GroupStatus.InGroupNotActive &&
        groupDetails.capacityLeft === 0)
    )
      return (
        <GroupDetailActionHeader
          title={groupDetails.texts.groupDetailTitle ?? ''}
          titleDecorated={groupDetails.texts.groupDetailTitleDecorated}
          description={''}
          isMobile={isMobile}
        />
      );
    else {
      return (
        <GroupDetailActionHeader
          title={groupDetails.texts.groupDetailTitle ?? ''}
          titleDecorated={groupDetails.texts.groupDetailTitleDecorated}
          description={groupDetails.texts.groupDetailHeadDescription}
          isMobile={isMobile}
        />
      );
    }
  };

  const content = (
    <>
      {getActionRowHeader(groupDetails)}
      {groupDetails.texts.expirationDateText && (
        <AlzaText
          size='14px'
          color={baseTheme.colors.grey5}
          centered={true}
          className='expirationDateText'
        >
          {groupDetails.texts.expirationDateText}
        </AlzaText>
      )}
      <StyledButtonGroup isMobile={isMobile} className='buttonGroup'>
        {groupDetails.status === GroupStatus.InGroupActive && (
          <SharingButton
            groupHash={groupDetails.hash}
            title={groupDetails.texts.sharingTitle ?? 'Sdílet'}
            openShareDialog={(): void =>
              isMobile && openShareDialog
                ? openShareDialog(groupDetails.hash)
                : openModalDialog(true)
            }
            size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
            width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
          />
        )}
        {groupDetails.joinGroupAction && (
          <JoinGroupButton
            joinGroupAction={joinGroupAction}
            groupDetails={groupDetails}
            isMobile={isMobile}
          />
        )}
        {groupDetails.createNewGroupAction && (
          <CreateNewTeamButton
            groupDetails={groupDetails}
            isMobile={isMobile}
          />
        )}
        {groupDetails.addToBasketAction && (
          <BuyButtonComponent groupDetails={groupDetails} isMobile={isMobile} />
        )}
        {groupDetails.redirectProductDetailAction && (
          <ProductInfoButton
            buttonText={groupDetails.redirectProductDetailAction?.name}
            productUrl={groupDetails.commodity.url}
            isMobile={isMobile}
          />
        )}

        {redirectUrl && groupDetails.redirectOrderDetailAction ? (
          <DisplayOrderButton
            groupDetails={groupDetails}
            redirectUrl={redirectUrl}
            isMobile={isMobile}
          />
        ) : null}
      </StyledButtonGroup>
      {groupDetails.participants &&
        (groupDetails.status === GroupStatus.Active ||
          groupDetails.status === GroupStatus.InGroupActive ||
          groupDetails.status === GroupStatus.InGroupNotActive) && (
          <GroupList
            people={groupDetails.participants}
            groupSize={groupDetails.groupSize}
            emptySlot={{
              emptySlotName: groupDetails.texts.dummyParticipantName,
              emptySlotLinkText: groupDetails.texts.dummyParticipantText,
            }}
            onEmptySlotClick={(): void => getEmptySlotClickAction(groupDetails)}
            isMobile={isMobile}
            otherMembersText={groupDetails.texts.memberStatus}
          />
        )}
    </>
  );

  const dialog = groupDetails.sharingDialog ? (
    <>
      {isMobile ? (
        <Portal>
          <AlzaDrawer
            isOpen={isShareDialogOpen}
            onChange={closeShareDialog}
            fullScreen={false}
          >
            {shareDialogGroup && <DialogContent group={shareDialogGroup} />}
          </AlzaDrawer>
        </Portal>
      ) : (
        <ModalDialog
          isOpen={isModalOpen}
          onChange={(): void => openModalDialog(!isModalOpen)}
        >
          <ShareDialog
            url={
              groupDetails.sharingDialog?.shareUrl ??
              groupDetails.shareUrl ??
              ''
            }
            description={
              groupDetails.sharingDialog?.title ??
              `Sleva ${groupDetails.commodity.priceDifference} Kč na ${groupDetails.commodity.name} na Alza.cz`
            }
            commodityImg={groupDetails.commodity.img}
            commodityName={groupDetails.commodity.name}
            buttonText={groupDetails.sharingDialog?.buttonText}
            title={groupDetails.sharingDialog?.dialogTitle}
          />
        </ModalDialog>
      )}
    </>
  ) : null;

  return isMobile ? (
    <StyledGroupStatusMobile>
      {content}
      {dialog ? dialog : null}
    </StyledGroupStatusMobile>
  ) : (
    <StyledGroupStatusDesktop>
      {content}
      {dialog ? dialog : null}
    </StyledGroupStatusDesktop>
  );
};

export default GroupActions;
