import Popover from 'react-tiny-popover';
import React, {
  CSSProperties,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import usePopoverHideOnScroll from '../../../services/hooks/usePopoverHideOnScroll';
import { baseTheme } from '../../../../utils/theme';
import { ArrowContainer } from '../../atoms/arrowContainer/arrowContainer';

export enum alzaPopoverPositionOptions {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

export interface AlzaPopoverProps {
  /**
   * defines whether the popover is open
   */
  isOpen: boolean;
  onChange: (nextState: boolean) => void;
  popoverTrigger: JSX.Element;
  popoverContent: JSX.Element;
  style?: Partial<CSSStyleDeclaration>;
  position?: alzaPopoverPositionOptions;
  hasArrow?: boolean;
  arrowStyle?: Partial<CSSProperties>;
  arrowColor?: string;
  hidePopoverOnScroll?: boolean;
  arrowSize?: number;
  outsideClickKeepsOpen?: boolean;
}

const setPopoverMargin = (
  position: alzaPopoverPositionOptions,
  arrowSize: number
): string => {
  switch (position) {
    case alzaPopoverPositionOptions.Top:
      return `-${arrowSize}px 0 0 0`;
    case alzaPopoverPositionOptions.Bottom:
      return `${arrowSize}px 0 0 0`;
    case alzaPopoverPositionOptions.Left:
      return `0 0 0 -${arrowSize}px `;
    case alzaPopoverPositionOptions.Right:
      return `0 0 0 ${arrowSize}px`;
    default:
      return `${arrowSize}px 0 0 0`;
  }
};

const setArrowPosition = (
  position: alzaPopoverPositionOptions,
  arrowColor: string
): Partial<CSSProperties> => {
  switch (position) {
    case alzaPopoverPositionOptions.Top:
      return {
        height: '0',
        bottom: '-10px',
        borderTop: `10px solid ${arrowColor}`,
      };
    case alzaPopoverPositionOptions.Bottom:
      return {
        height: '0',
        top: '-10px',
        borderBottom: `10px solid ${arrowColor}`,
      };
    case alzaPopoverPositionOptions.Left:
      return {
        height: '0',
        right: '-10px',
        borderLeft: `10px solid ${arrowColor}`,
      };
    case alzaPopoverPositionOptions.Right:
      return {
        height: '0',
        left: '-10px',
        borderRight: `10px solid ${arrowColor}`,
      };
    default:
      return {
        bottom: '-10px',
      };
  }
};

/** Popover component to show tooltips or different options*/
export const AlzaPopover: React.FC<AlzaPopoverProps> = ({
  popoverTrigger,
  popoverContent,
  isOpen,
  style,
  arrowStyle,
  onChange,
  position = alzaPopoverPositionOptions.Left,
  hasArrow = true,
  arrowColor = baseTheme.colors.white,
  arrowSize = 10,
  hidePopoverOnScroll = true,
  outsideClickKeepsOpen = false,
}: AlzaPopoverProps) => {
  const popoverRef = useRef(null);
  const [isPopoverHidden, setIsPopoverHidden] = useState(false);

  usePopoverHideOnScroll(
    isOpen,
    isPopoverHidden,
    setIsPopoverHidden,
    popoverRef,
    hidePopoverOnScroll
  );

  let arrowStyles: Partial<CSSProperties> = {};

  if (hasArrow) {
    arrowStyles = setArrowPosition(position, arrowColor);
    if (arrowStyle) {
      Object.assign(arrowStyles, arrowStyles, arrowStyle);
    }
  }

  let containerStyle: Partial<CSSStyleDeclaration> = { ...style };
  containerStyle = {
    ...containerStyle,
    margin: setPopoverMargin(position, arrowSize),
  };

  // Sets margin accordingly to popover position
  useEffect(() => {
    const popover: RefObject<any> = popoverRef;
    if (popover && popover.current.popoverDiv) {
      popover.current.popoverDiv.style.margin = setPopoverMargin(position, 10);
    }
  }, [isOpen, position]);

  // Hides popover when scrolled
  useEffect(() => {
    const popover: RefObject<any> = popoverRef;
    const isPopoverRenderedAndOpen =
      isOpen && popover && popover.current.popoverDiv;
    const isPopoverNotVisible = isPopoverRenderedAndOpen && isPopoverHidden;
    const isPopoverVisible = isPopoverRenderedAndOpen && !isPopoverHidden;

    if (isPopoverNotVisible) {
      popover.current.popoverDiv.style.display = 'none';
    } else if (isPopoverVisible) {
      popover.current.popoverDiv.style.display = 'flex';
    }
  }, [isPopoverHidden]);

  const handleOutsideClick = (): void => {
    if (outsideClickKeepsOpen) {
      return;
    } else {
      onChange(false);
    }
  };

  return (
    <Popover
      disableReposition={true}
      ref={popoverRef}
      isOpen={isOpen}
      containerStyle={containerStyle}
      position={position}
      onClickOutside={(): void => handleOutsideClick()}
      content={({ position, targetRect, popoverRect }): React.ReactElement =>
        hasArrow ? (
          <ArrowContainer
            position={position}
            popoverRect={popoverRect}
            targetRect={targetRect}
            arrowStyle={arrowStyles}
          >
            {popoverContent}
          </ArrowContainer>
        ) : (
          popoverContent
        )
      }
    >
      {popoverTrigger}
    </Popover>
  );
};

export default AlzaPopover;
