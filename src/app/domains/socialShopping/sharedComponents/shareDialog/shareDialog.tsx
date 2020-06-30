import React, { FunctionComponent } from 'react';
import CssClasses from './shareDialog.module.scss';
import Button, {
  ButtonColor,
  ButtonTextAlign,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from '../../../../../utils/textUtils';

type SocialShoppingShareDialogProps = {
  url: string;
  commodityImg: string;
  commodityName: string;
  description: string;
  title?: string;
  buttonText?: string;
};

/**
 * Dialog for sharing social shopping url.
 * It's a fallback dialog, on phones should open native share dialog.
 * @param props Properties
 */
export const ShareDialog: FunctionComponent<SocialShoppingShareDialogProps> = props => {
  const copyToClipboard = (): void => {
    const text = document.getElementById('shareLinkDiv')?.innerHTML ?? '';
    CopyToClipboard(text);
  };

  return (
    <div className={CssClasses.container}>
      <div className={CssClasses.title}>{props.title}</div>
      <div className={CssClasses.desc}>
        <img
          src={props.commodityImg}
          alt={props.commodityName}
          className={CssClasses.img}
        />
        <span className={CssClasses.text}>{props.description}</span>
      </div>
      <div className={CssClasses.shareCnt}>
        <FacebookShareButton url={props.url}>
          <FacebookIcon size={80} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={props.url}>
          <TwitterIcon size={80} round={true} />
        </TwitterShareButton>
        <EmailShareButton url={props.url}>
          <EmailIcon
            size={80}
            round={true}
            bgStyle={{ fill: CssClasses.emailBgColor }}
          />
        </EmailShareButton>
      </div>
      <div>
        <div
          id='shareLinkDiv'
          data-testid='shareLinkDiv'
          className={CssClasses.shareLink}
        >
          {props.url}
        </div>
        <Button
          width={ButtonWidth.FullWidth}
          color={ButtonColor.Blue}
          textAlign={ButtonTextAlign.Center}
          onClick={copyToClipboard}
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};
