import React from 'react';
import { render } from '@testing-library/react';
import GroupOccupancy from './groupOccupancy';
import { socialShoppingShareGroupType } from '../../organisms/groupSharing/shareComponent.types';
import { DeviceProvider } from '../../../../services/deviceContext';

describe('GroupOccupancy: ', function() {
  const group: socialShoppingShareGroupType = {
    hash: 'abc123',
    groupSize: 15,
    capacityLeft: 8,
    capacityLeftText: 'Zbývá 1 zájemce',
    commodity: {
      id: 1,
      discountPrice: '',
      img: '',
      name: '',
      originalPrice: '',
      priceDifference: '',
      url: '',
    },
    texts: {
      description: 'Až vás bude dostatek, můžete si zboží převzít.',
      shareButton: 'Sdílet slevu',
      title: 'Sdílej a ušetři',
    },
    sharingDialog: {
      buttonText: 'Zkopírovat odkaz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://legolas.alza.cz/url/gKZNboreae',
      title: 'Sleva 1 na OPTY propojovací 4pin konektor na Alza.cz',
    },
  };

  test('text', async () => {
    const { getByText } = render(
      <DeviceProvider isMobile={true}>
        <GroupOccupancy group={group}>Button</GroupOccupancy>
      </DeviceProvider>
    );

    getByText('Zbývá 1 zájemce');
  });

  test('progress bar', async () => {
    const { getByRole } = render(
      <DeviceProvider isMobile={true}>
        <GroupOccupancy group={group}>Button</GroupOccupancy>
      </DeviceProvider>
    );

    const progressbar = getByRole('progressbar');
    expect(
      progressbar.getAttribute('aria-valuemax') === group.groupSize.toString()
    ).toBeTruthy();

    expect(
      progressbar.getAttribute('aria-valuenow') ===
        (group.groupSize - group.capacityLeft).toString()
    ).toBeTruthy();
  });
});
