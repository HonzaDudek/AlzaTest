import React, { FC } from 'react';
import cn from 'classnames';
import CssClasses from './alzaLink.module.scss';

import { IconSVG } from '../iconSVG/iconSVG';

type AlzaLinkProps = {
  text: string;
  href?: string;
  newWindow?: boolean;
};

const AlzaLink: FC<AlzaLinkProps> = ({
  text = '',
  href = '',
  newWindow = false,
  children,
}) => {
  return (
    <a
      href={href}
      target={newWindow ? '_blank' : ''}
      className={cn(CssClasses.alzaLink)}
    >
      {newWindow && (
        <IconSVG
          src={'/Styles/images/svg/icon-new-window.svg'}
          className={CssClasses.alzaLinkIcon}
        />
      )}
      {text}
      {children}
    </a>
  );
};

export default AlzaLink;
