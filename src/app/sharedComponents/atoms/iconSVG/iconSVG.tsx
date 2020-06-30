import React, { FunctionComponent } from 'react';
import { getImageUrl } from '../../../../utils/getImageUrl';
import { ReactSVG } from 'react-svg';

/**
 * SVG icon props
 */
export type IconSVGProps = {
  /**
   * Icon source. Can be relative or absolute url.
   */
  src: string;

  /**
   * When true and src contains relative url, prepends CDN image domain url.
   */
  useCDN?: boolean;

  /**
   * CSS class name
   */
  className?: string;

  /**
   * Width
   */
  width?: number;

  /**
   * Height
   */
  height?: number;

  /**
   * OnClick action
   */
  onClick?: () => void;
};

/**
 * SVG Icon
 * @param param0 props
 */
export const IconSVG: FunctionComponent<IconSVGProps> = ({
  src,
  useCDN = true,
  className,
  width,
  height,
  onClick,
}) => {
  if (useCDN && !src.startsWith('https://') && !src.startsWith('http://'))
    src = getImageUrl(src);

  let styleAttr = '';
  if (width) styleAttr += `width:${width}px;`;
  if (height) styleAttr += `height:${height}px;`;

  return (
    <ReactSVG
      src={src}
      beforeInjection={(svg): void => {
        if (styleAttr) svg.setAttribute('style', styleAttr);
      }}
      className={className}
      onClick={onClick}
    />
  );
};

export default IconSVG;
