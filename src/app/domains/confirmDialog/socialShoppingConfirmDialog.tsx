import React from 'react';
import AlzaDrawer from '../../sharedComponents/organisms/drawer/alzaDrawer';
import { CrossIcon } from '../../../assets/icons/crossIcon';
import { BuyBasketIcon } from '../../../assets/icons/buyBasketIcon';
import { baseTheme } from '../../../utils/theme';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../sharedComponents/atoms/button/button';
import { StyledConfirmDialog } from './socialShoppingConfirmDialog.styles';

type SocialShoppingConfirmDialogType = {
  isOpen: boolean | false;
  setDrawerState: (drawerState: boolean) => void;
  confirm?: () => void;
  cancel?: () => void;
};

export const SocialShoppingConfirmDialog: React.FunctionComponent<SocialShoppingConfirmDialogType> = ({
  isOpen,
  setDrawerState,
  confirm,
  cancel,
}: SocialShoppingConfirmDialogType) => {
  return (
    <AlzaDrawer
      isOpen={isOpen}
      fullScreen={false}
      onChange={(): void => setDrawerState(false)}
    >
      <StyledConfirmDialog>
        <Button
          size={ButtonSize.Normal}
          width={ButtonWidth.FullWidth}
          color={ButtonColor.Green}
          onClick={confirm}
        >
          <BuyBasketIcon />
          Doplatit 400Kč a koupit
        </Button>
        <Button
          size={ButtonSize.Normal}
          width={ButtonWidth.FullWidth}
          color={ButtonColor.Grey}
          onClick={cancel}
        >
          <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
          Zboží nechci, chci zpět peníze
        </Button>
      </StyledConfirmDialog>
    </AlzaDrawer>
  );
};
