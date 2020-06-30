import CssClassesDesktop from '../groupSharing-desktop.module.scss';
import GroupSharingContainerDesktop from '../../../atoms/groupSharingContainer/groupSharingContainer-desktop';
import GroupSharingContainerMobile from '../../../atoms/groupSharingContainer/groupSharingContainer-mobile';
import GroupOccupancy from '../../../molecules/groupOccupancy/groupOccupancy';
import PriceContent from '../molecules/PriceContent';
import ModalDialog from '../../../../../sharedComponents/atoms/modalDialog/modalDialog';
import DialogContent from '../molecules/dialogContent';
import React, { FC } from 'react';
import { useSocialShoppingShareDialog } from '../../../hooks/useSocialShoppingShare';
import { GroupSharingTitle } from '../../../atoms/groupSharingTitle/groupSharingTitle';
import { useDeviceContext } from '../../../../../services/deviceContext';
import CssClassesMobile from '../groupSharing-mobile.module.scss';
import { Portal } from 'react-portal';
import SharingButton from '../../../atoms/sharingButton/sharingButton';
import AlzaDrawer from '../../../../../sharedComponents/organisms/drawer/alzaDrawer';
import { socialShoppingShareGroupType } from '../shareComponent.types';

type mainContentProps = {
  socialShoppingGroupSharingData: socialShoppingShareGroupType[];
};
const MainContent: FC<mainContentProps> = ({
  socialShoppingGroupSharingData,
}) => {
  const {
    isShareDialogOpen,
    shareDialogGroup,
    openShareDialog,
    closeShareDialog,
  } = useSocialShoppingShareDialog(socialShoppingGroupSharingData);
  const isMobile = useDeviceContext();

  if (isMobile) {
    return (
      <>
        {socialShoppingGroupSharingData?.map(group => {
          return (
            <div key={group.hash} className={CssClassesMobile.groupCnt}>
              <GroupSharingContainerMobile>
                <GroupSharingTitle>
                  {group.texts?.title ?? 'Sdílej a ušetři'}
                </GroupSharingTitle>
                <div className={CssClassesMobile.infoText}>
                  {group.texts?.description ??
                    'Až vás bude dostatek, můžete si zboží převzít.'}
                </div>

                <div>
                  <div className={CssClassesMobile.shareInfo}>
                    <div className={CssClassesMobile.productInfo}>
                      <a href={group.commodity.url}>
                        <img
                          src={group.commodity.img}
                          alt={group.commodity.name}
                          width={42}
                          height={42}
                        />
                      </a>
                      <PriceContent group={group} />
                    </div>
                    <GroupOccupancy group={group} />
                  </div>
                  <div>
                    <SharingButton
                      groupHash={group.hash}
                      openShareDialog={openShareDialog}
                      title={group.texts?.shareButton ?? 'Sdílej slevu'}
                    />
                  </div>
                </div>
              </GroupSharingContainerMobile>
            </div>
          );
        })}
        <Portal>
          <AlzaDrawer
            isOpen={isShareDialogOpen}
            onChange={closeShareDialog}
            fullScreen={false}
          >
            {shareDialogGroup && <DialogContent group={shareDialogGroup} />}
          </AlzaDrawer>
        </Portal>
      </>
    );
  } else {
    return (
      <>
        {socialShoppingGroupSharingData?.map(group => {
          return (
            <div key={group.hash} className={CssClassesDesktop.groupCnt}>
              <GroupSharingContainerDesktop>
                <div className={CssClassesDesktop.content}>
                  {/* Left part - info about sharing */}
                  <div className='left'>
                    <GroupSharingTitle>
                      {group.texts?.title ?? 'Sdílej'}
                    </GroupSharingTitle>
                    <div className={CssClassesDesktop.infoText}>
                      {group.texts?.description ??
                        'Až vás bude dostatek, můžete si zboží převzít.'}
                    </div>

                    <GroupOccupancy group={group} />

                    <div className={CssClassesDesktop.btnCnt}>
                      <SharingButton
                        groupHash={group.hash}
                        openShareDialog={openShareDialog}
                        title={group.texts?.shareButton ?? 'Sdílej slevu'}
                      />
                    </div>
                  </div>

                  {/* Right part - info about commodity */}
                  <div className={CssClassesDesktop.productInfo}>
                    <div className={CssClassesDesktop.namePriceCnt}>
                      <a
                        className={CssClassesDesktop.name}
                        href={group.commodity.url}
                      >
                        {group.commodity.name}
                      </a>
                      <PriceContent group={group} />
                    </div>

                    <a href={group.commodity.url}>
                      <img
                        src={group.commodity.img}
                        alt={group.commodity.name}
                        width={165}
                        height={165}
                      />
                    </a>
                  </div>
                </div>
              </GroupSharingContainerDesktop>
            </div>
          );
        })}

        <ModalDialog
          isOpen={isShareDialogOpen}
          onChange={closeShareDialog}
          maxWidth='500px'
        >
          {shareDialogGroup && <DialogContent group={shareDialogGroup} />}
        </ModalDialog>
      </>
    );
  }
};

export default MainContent;
