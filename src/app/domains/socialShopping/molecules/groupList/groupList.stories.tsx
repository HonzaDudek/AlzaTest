import React, { CSSProperties, ReactNode } from 'react';
import { GroupList, EmptySlot } from './groupList';
import { baseTheme } from '../../../../../utils/theme';
import { Person } from '../../atoms/groupListItem/groupListItem';

const styles: CSSProperties = {
  height: '500px',
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
};

export default {
  component: GroupList,
  title: 'Domains/Social Shopping/Molecules/Group List',
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>
        <div
          style={{
            height: '210px',
            width: '375px',
            backgroundColor: baseTheme.colors.grey1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {story()}
        </div>
      </div>
    ),
  ],
};

const PeopleData: Person[] = [
  {
    name: 'Lukáš',
    city: 'Opava',
  },
  {
    name: 'Margin',
    city: 'Dobruška',
  },
  {
    name: 'Natálie',
    city: 'Poprad',
  },
];

const EmptySlotData: EmptySlot = {
  emptySlotName: 'Volno',
  emptySlotLinkText: 'Připojte se',
};

const GroupSize = 5;

export const MobileGroupList: React.FunctionComponent = () => {
  return (
    <GroupList
      people={PeopleData}
      emptySlot={EmptySlotData}
      groupSize={3}
      isMobile={true}
    />
  );
};

export const DesktopGroupList: React.FunctionComponent = () => {
  return (
    <GroupList
      people={PeopleData}
      emptySlot={EmptySlotData}
      groupSize={GroupSize}
      isMobile={false}
    />
  );
};
