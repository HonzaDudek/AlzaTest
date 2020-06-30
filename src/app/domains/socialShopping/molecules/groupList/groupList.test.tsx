import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { EmptySlot, GroupList } from './groupList';

describe('GroupList: ', () => {
  const emptySlotData: EmptySlot = {
    emptySlotName: 'Volno',
    emptySlotLinkText: 'Připojit se',
  };

  test('renders proper count of items', async () => {
    const { queryAllByRole } = render(
      <GroupList emptySlot={emptySlotData} groupSize={5} people={[]} />
    );
    expect(await queryAllByRole('listitem')).toHaveLength(5);
  });

  test('renders vacant positions for missing members of group', () => {
    const { queryAllByRole } = render(
      <GroupList
        emptySlot={emptySlotData}
        groupSize={5}
        people={[
          { name: 'Honza', city: 'Praha' },
          { name: 'Jakub', city: 'Brno' },
        ]}
      />
    );

    expect(queryAllByRole('listitem')).toHaveLength(5);
  });

  test('renders all provided members of group', () => {
    const { getByText } = render(
      <GroupList
        emptySlot={emptySlotData}
        groupSize={5}
        people={[
          { name: 'Honza', city: 'Praha' },
          { name: 'Jakub', city: 'Brno' },
        ]}
      />
    );

    expect(getByText('Honza'));
    expect(getByText('Jakub'));
  });

  test('calls provided action for adding new person to group', () => {
    const callback = jest.fn();

    const { getAllByText } = render(
      <GroupList
        emptySlot={emptySlotData}
        onEmptySlotClick={callback}
        groupSize={5}
        people={[
          { name: 'Honza', city: 'Praha' },
          { name: 'Jakub', city: 'Brno' },
        ]}
      />
    );

    getAllByText('Připojit se').map(node => {
      fireEvent.click(node);
    });

    expect(callback).toHaveBeenCalledTimes(3);
  });
});
