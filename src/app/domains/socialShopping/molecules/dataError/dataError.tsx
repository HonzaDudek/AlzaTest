import React, { FunctionComponent } from 'react';
import CssClasses from './dataError.module.scss';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonTextAlign,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { useTranslation } from 'react-i18next';

type SocialShoppingShareErrorProps = {
  onReloadClick: () => void;
};

/**
 * Social shopping share error state block
 * @param props Props
 */
export const SharingError: FunctionComponent<SocialShoppingShareErrorProps> = props => {
  const { t } = useTranslation(['socialShopping']);
  return (
    <>
      <div className={CssClasses.text}>{t('SocialShoppingShare_Error')}</div>
      <Button
        textAlign={ButtonTextAlign.Center}
        color={ButtonColor.Blue}
        size={ButtonSize.Normal}
        width={ButtonWidth.FullWidth}
        onClick={props.onReloadClick}
      >
        {t('SocialShoppingShare_Error_Reload')}
      </Button>
    </>
  );
};

export default SharingError;
