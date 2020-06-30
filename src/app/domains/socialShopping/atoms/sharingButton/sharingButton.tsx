import React, { FC } from 'react';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { useDeviceContext } from '../../../../services/deviceContext';
import { useAnalyticsContext } from '../../../../services/analyticsContext';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import styled from 'styled-components';

type SharingButtonProps = {
  groupHash?: string;
  openShareDialog: (groupHash?: string) => void;
  title: string;
  size?: ButtonSize;
  width?: ButtonWidth;
};

const StyledSharingIcon = styled.div<Partial<SharingButtonProps>>`
  div {
    width: ${(props): string =>
      props.size === ButtonSize.Normal ? '20px' : '25px'};
    height: ${(props): string =>
      props.size === ButtonSize.Normal ? '20px' : '25px'};
    margin-right: 10px;
  }
`;

/**
 * Button component for sharing social shopping group
 * @param groupHash - group hash
 * @param openShareDialog - function called on button click
 * @param title - text on a button
 * @param size
 * @param width
 */
const SharingButton: FC<SharingButtonProps> = ({
  groupHash,
  openShareDialog,
  title,
  size = ButtonSize.Normal,
  width = ButtonWidth.FullWidth,
}) => {
  const isMobile = useDeviceContext();
  const { Analytics } = useAnalyticsContext();
  return (
    <Button
      color={ButtonColor.Blue}
      size={size}
      width={width}
      onClick={(): void => {
        Analytics.gaEvent('Social Shopping', 'Share Button Clicked');
        openShareDialog(groupHash);
      }}
      data-testid={isMobile ? 'shareBtnMobile' : 'shareBtnDesktop'}
    >
      <StyledSharingIcon size={size}>
        <IconSVG
          src={getImageUrl('/Styles/images/svg/icon-share.svg')}
          width={size === ButtonSize.Normal ? 20 : 25}
          height={size === ButtonSize.Normal ? 20 : 25}
        />
      </StyledSharingIcon>
      {title}
    </Button>
  );
};

export default SharingButton;
