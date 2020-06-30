/* Diable any type error - need test if Web Share API exists */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Hooks for social shopping sharing
 */

import { useState } from 'react';
import { socialShoppingShareGroupType } from '../organisms/groupSharing/shareComponent.types';

export type socialShoppingShareDialogHook = {
  isShareDialogOpen: boolean;
  shareDialogGroup?: socialShoppingShareGroupType;
  openShareDialog: (groupHash?: string) => void;
  closeShareDialog: () => void;
  openDialog?: (group: socialShoppingShareGroupType) => void;
};

/**
 * Hook for toggle dialog with sharing options
 */
export const useSocialShoppingShareDialog = (
  data?: socialShoppingShareGroupType[]
): socialShoppingShareDialogHook => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<
    socialShoppingShareGroupType
  >();

  const openDialog = (group: socialShoppingShareGroupType): void => {
    if (group) {
      const browser = window.navigator as any;
      if (browser.share) {
        // shows native share
        browser
          .share({
            title: group.texts?.title,
            text: group.sharingDialog?.title,
            url: group.sharingDialog?.shareUrl,
          })
          .catch((err: any) => console.error(err));
      } else {
        // fallback - navigator.share not supported - show web share dialog
        setDialogOpen(true);
      }
    } else {
      throw new Error(
        'No group information available for sharing, did you pass groupInfo to sharing dialog?'
      );
    }
  };

  const closeDialog = (): void => {
    setDialogOpen(false);
  };

  const openShareGroupDialog = (groupHash?: string): void => {
    const group = data?.find(group => group.hash === groupHash);
    setSelectedGroup(group);
    openDialog(group as socialShoppingShareGroupType);
  };

  return {
    isShareDialogOpen: isDialogOpen,
    shareDialogGroup: selectedGroup,
    openShareDialog: openShareGroupDialog,
    closeShareDialog: closeDialog,
    openDialog: openDialog,
  };
};
