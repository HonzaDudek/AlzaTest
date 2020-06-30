// @ts-nocheck
import React, { FC, useEffect, useRef, useState } from 'react';
import {
  StyledBackdrop,
  StyledDrawer,
  StyledDrawerContent,
  StyledTitle,
} from './drawer.styles';
import { DrawerCloseButton } from '../../atoms/drawerCloseButton/drawerCloseButton';
import { Manager, Pan } from 'hammerjs';

export type DrawerProps = {
  isOpen: boolean;
  fullScreen?: boolean;
  onChange?: () => void;
};

const swipe = box => (ev: TouchInput): void => {
  box.style.transform = `translateY(${Math.max(ev.deltaY, 0)}px)`;
};

const scroll = (box, scrollStart) => (ev: TouchInput): void => {
  box.scrollTop = scrollStart - ev.deltaY;
};

export const Drawer: FC<DrawerProps> = (props): DrawerProps => {
  const containerRef = useRef<HTMLElement>();
  const contentRef = useRef<HTMLElement>();
  const [manager, setManager] = useState();

  const [scrollStart, setScrollStart] = useState(0);

  const [status, setStatus] = useState('default');
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  const calculateMaxHeight = (): void => {
    const drawerWrapper = containerRef.current;
    // Getting 2nd element from childNodes because firs t one is drawer header
    if (drawerWrapper) {
      const drawerContent = drawerWrapper.children[1];
      if (drawerWrapper && drawerContent && props.isOpen) {
        // Adding 70px for header height and padding
        setMaxHeight(drawerContent.getBoundingClientRect().height + 70);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const m = new Manager(containerRef.current);

    m.add(new Pan({}));

    setManager(m);

    return (): void => {
      m.destroy();
    };
  }, []);

  useEffect(() => {
    if (!manager) {
      return;
    }
    manager.on('panstart', () => {
      containerRef.current.classList.remove('slow-transition');
      containerRef.current.style.transitionDuration = '';
      setScrollStart(containerRef.current.scrollTop);
    });

    const panEndHanlder = (ev: TouchInput): void => {
      if (status === 'swipe') {
        if (ev.deltaY > document.documentElement.clientHeight * 0.4) {
          if (props.onChange) {
            containerRef.current.classList.add('slow-transition');
            containerRef.current.style.transform = null;
            setStatus('default');
            props.onChange();
            return;
          }
        }
      }
      containerRef.current.style.transitionDuration = '1000ms';
      containerRef.current.style.transform = 'translate(0px)';
      setStatus('default');
      setScrollStart(containerRef.current.scrollTop);
    };
    manager.on('panend', panEndHanlder);
    return (): void => {
      manager.off('panend', panEndHanlder);
    };
  }, [manager, status]);

  useEffect(() => {
    if (!manager) {
      return;
    }

    const cb = (ev: TouchInput): { status: string } => {
      setStatus((status: string): string | null => {
        if (status !== 'default') {
          return status;
        }
        if (scrollStart !== 0) {
          return 'scroll';
        }
        if (status === 'default') {
          if (ev.type === 'panup') {
            return 'scroll';
          } else {
            return 'swipe';
          }
        }
        return null;
      });
    };

    manager.on('panup pandown', cb);

    return (): void => {
      manager.off('panup pandown', cb);
    };
  }, [manager, scrollStart]);

  useEffect(() => {
    if (!manager) {
      return;
    }
    let eventHandler;
    switch (status) {
      case 'swipe':
        eventHandler = swipe(containerRef.current);
        break;
      case 'scroll':
        eventHandler = scroll(containerRef.current, scrollStart);
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        eventHandler = (): void => {};
    }
    manager.on('panup pandown', eventHandler);
    return (): void => {
      manager.off('panup pandown', eventHandler);
    };
  }, [manager, status, scrollStart]);

  useEffect(() => {
    calculateMaxHeight();
  }, [props.isOpen]);

  return (
    <>
      <StyledDrawer
        ref={containerRef}
        className={'slow-transition ' + (props.isOpen ? 'open' : 'closed')}
        maxHeight={!props.fullScreen ? `${maxHeight}px` : '100%'}
      >
        <StyledTitle
          isOpen={props.isOpen}
          maxHeight={!props.fullScreen ? `${maxHeight}px` : '100%'}
        >
          {/*empty div for centering purposes */}
          <div />
          <div className='alzaDrawer__touchButton' />
          <DrawerCloseButton
            onClick={(): void | {} => {
              if (props.onChange) {
                containerRef.current.classList.add('slow-transition');
                containerRef.current.style.transform = null;
                setStatus('default');
                props.onChange();
                return;
              }
            }}
          />
        </StyledTitle>
        <StyledDrawerContent
          isOpen={props.isOpen}
          className='alzaDrawer__content'
          ref={contentRef}
        >
          {props.children}
        </StyledDrawerContent>
      </StyledDrawer>
      {props.isOpen ? <StyledBackdrop /> : null}
    </>
  );
};
