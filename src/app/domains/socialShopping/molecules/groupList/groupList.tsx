import React, { useEffect, useState } from 'react';
import { StyledDesktopUl, StyledMobileUl } from './groupList.styles';
import GroupEmptyListItem from '../../atoms/groupListItem/groupEmptyListItem';
import GroupListItem, { Person } from '../../atoms/groupListItem/groupListItem';
import GroupListItemWithPopover from '../../atoms/groupListItem/groupListItemWithPopover';
import { StyledOrderDetailPopover } from '../../pages/orderDetail/orderDetail.styles';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { baseTheme } from '../../../../../utils/theme';
import { CrossIcon } from '../../../../../assets/icons/crossIcon';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import { ReactSVG } from 'react-svg';
import { ExpandableGroupList } from './expandableGroupList';

export type EmptySlot = {
  emptySlotName?: string;
  emptySlotLinkText?: string;
  onClick?: () => void;
};

export type PopoverProps = {
  popoverContent?: {
    buyProduct: (() => void) | null;
    removeProduct: (() => void) | null;
    buttonTexts: {
      confirmButtonText?: string;
      refundButtonText?: string;
    };
  };
};

export type Group = PopoverProps & {
  people: Person[];
  groupSize: number;
  emptySlot?: EmptySlot;
  isMobile?: boolean | true;
  onFullSlotClick?: () => void;
  onEmptySlotClick?: () => void;
  className?: string;
  renderActions?: boolean;
  otherMembersText?: string;
  isGroupFull?: boolean;
};

export const GroupList: React.FC<Group> = ({
  people,
  groupSize,
  emptySlot,
  isMobile = true,
  onEmptySlotClick,
  onFullSlotClick,
  popoverContent,
  renderActions,
  className = 'groupList',
  otherMembersText,
  isGroupFull,
}: Group) => {
  let items = [];
  let itemsLeft: ConcatArray<JSX.Element> = [];

  const MOBILE_TRESHOLD = 3;
  const DESKTOP_TRESHOLD = 6;

  const [isExpanded, setIsExpanded] = useState(items.length > MOBILE_TRESHOLD);

  useEffect(() => {
    if (!isMobile) {
      setIsExpanded(items.length > DESKTOP_TRESHOLD);
    }
  }, []);

  if (popoverContent) {
    items = people.map((person: Person, index: number) => {
      if (person.isOrderClient) {
        return (
          // eslint-disable-next-line react/jsx-no-undef
          <GroupListItemWithPopover
            key={`personItem-${index}`}
            person={person}
            onClick={onFullSlotClick}
            renderActions={
              person.isOrderClient &&
              (popoverContent.buyProduct !== null ||
                popoverContent.removeProduct !== null)
            }
            popoverContent={
              <StyledOrderDetailPopover>
                {popoverContent.buyProduct && (
                  <Button
                    color={ButtonColor.Green}
                    size={ButtonSize.Normal}
                    width={ButtonWidth.FullWidth}
                    onClick={popoverContent?.buyProduct}
                    data-testid='btn__buyForFullPrice'
                  >
                    <ReactSVG
                      src={getImageUrl('Styles/images/svg/shopping-cart.svg')}
                    />
                    {popoverContent.buttonTexts.confirmButtonText}
                  </Button>
                )}
                {popoverContent.removeProduct && (
                  <Button
                    color={ButtonColor.Grey}
                    size={ButtonSize.Normal}
                    width={ButtonWidth.FullWidth}
                    onClick={popoverContent?.removeProduct}
                    data-testid='btn__refund'
                  >
                    <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
                    {popoverContent.buttonTexts.refundButtonText}
                  </Button>
                )}
              </StyledOrderDetailPopover>
            }
            index={index}
          />
        );
      } else {
        return (
          <GroupListItem
            key={`personItem-${index}`}
            person={person}
            onClick={onFullSlotClick}
          />
        );
      }
    });
  } else {
    items = people.map((person: Person, index: number) => (
      <GroupListItem
        key={`personItem-${index}`}
        person={person}
        onClick={person.isOrderClient ? onFullSlotClick : onEmptySlotClick}
        renderActions={person.isOrderClient && renderActions}
      />
    ));
  }
  if (emptySlot !== undefined) {
    itemsLeft = Array.from(
      { length: groupSize - items.length },
      (slot: EmptySlot, index) => (
        <GroupEmptyListItem
          key={`emptySlotItem-${index}`}
          emptySlotName={emptySlot.emptySlotName}
          onClick={onEmptySlotClick}
          emptySlotLinkText={emptySlot.emptySlotLinkText}
        />
      )
    );
  }

  const result = items.concat(itemsLeft);

  const showExpandable = isMobile
    ? result.length > MOBILE_TRESHOLD
    : result.length > DESKTOP_TRESHOLD && !isGroupFull;

  if (showExpandable) {
    return (
      <ExpandableGroupList
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        buttonText={otherMembersText ?? ''}
      >
        {result}
      </ExpandableGroupList>
    );
  }

  return isMobile ? (
    <StyledMobileUl className={`${className ?? 'groupList'}`}>
      {result}
    </StyledMobileUl>
  ) : (
    <StyledDesktopUl className={`${className ?? 'groupList'}`}>
      {result}
    </StyledDesktopUl>
  );
};
