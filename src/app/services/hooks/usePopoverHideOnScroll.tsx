import { RefObject, useEffect } from 'react';
import { PopoverInfo } from 'react-tiny-popover';

/**
 * @param isPopperOpen
 * @param isPopoverHidden
 * @param setIsPopoverHidden - hides element on scroll, this does not actually close the popover
 * @param popoverRef
 * @param hidePopoverOnScroll - disables popover ability to hide when scrolled out of viewport
 */

const usePopoverHideOnScroll = (
  isPopperOpen: boolean,
  isPopoverHidden: boolean,
  setIsPopoverHidden: (popperStatus: boolean) => void,
  popoverRef: RefObject<PopoverInfo | null>,
  hidePopoverOnScroll: boolean
): void => {
  const scrollListener = (): void => {
    if (
      popoverRef &&
      popoverRef.current !== null &&
      popoverRef.current.targetRect
    ) {
      const popoverElementTop = popoverRef.current.targetRect.top;
      const isPopoverInViewport =
        popoverElementTop < 0 || popoverElementTop >= window.innerHeight;
      setIsPopoverHidden(isPopoverInViewport);
    }
  };

  useEffect(() => {
    if (!isPopperOpen || !hidePopoverOnScroll) {
      return;
    }
    window.addEventListener('scroll', scrollListener);
    return (): void => window.removeEventListener('scroll,', scrollListener);
  }, [isPopperOpen]);
};

export default usePopoverHideOnScroll;
