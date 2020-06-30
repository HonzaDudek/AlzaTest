import React from 'react';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { GroupDetailData } from '../../../../services/socialShopping/groupDetail.data';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { getImageUrl } from '../../../../../utils/getImageUrl';

type JoinGroupButtonProps = Partial<React.HTMLProps<HTMLButtonElement>> & {
  joinGroupAction: () => void;
  groupDetails: GroupDetailData;
  isMobile: boolean;
};

export const JoinGroupButton: React.FC<JoinGroupButtonProps> = ({
  joinGroupAction,
  groupDetails,
  isMobile,
  disabled,
}: JoinGroupButtonProps) => {
  return (
    <Button
      color={ButtonColor.Green}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={joinGroupAction}
      data-testid='test-btn-joinTeam'
      disabled={disabled}
    >
      <IconSVG
        src={getImageUrl('Styles/images/svg/f-add-person.svg')}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn btn__icn__addUser--white'
      />
      {groupDetails.joinGroupAction?.name ?? 'Připojit se a získat slevu'}
    </Button>
  );
};
