import React, { FunctionComponent, ReactNode, Suspense } from 'react';
import GroupOccupancy from './groupOccupancy';
import { socialShoppingShareGroupType } from '../../organisms/groupSharing/shareComponent.types';
import { DeviceProvider } from '../../../../services/deviceContext';

export default {
  component: GroupOccupancy,
  title: 'Domains/Social Shopping/Molecules/Group occupancy',
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={{ maxWidth: '300px', margin: '15px' }}>{story()}</div>
    ),
  ],
};

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

export const groupOccupancy: FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeviceProvider isMobile={true}>
        <GroupOccupancy group={group} />
      </DeviceProvider>
    </Suspense>
  );
};
