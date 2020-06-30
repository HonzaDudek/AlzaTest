import { render } from '@testing-library/react';
import React from 'react';
import { OfferDescription } from './offerDescription';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';
import { activeOrderDetailMockData } from '../../pages/orderDetail/__fixtures__/activeGroupOrderMockData';
import { expiredOrderDetailMockData } from '../../pages/orderDetail/__fixtures__/expiredGroupOrderMockData';

describe('Tests for offers description text in Order Detail', () => {
  test('There is a span with "nabídka vypršela" text for expired group', async () => {
    const { getByText } = render(
      <OfferDescription
        status={GroupStatus.Expired}
        description={expiredOrderDetailMockData.socialShoppingInfo.description}
      />
    );

    expect(
      getByText(
        'Je nám líto, nabídka vypršela 18. 12. Vyberte si, co chcete se zbožím udělat.'
      )
    ).toBeTruthy();
  });

  test('There is a correct status text for full group', async () => {
    const { getByText } = render(
      <OfferDescription
        status={GroupStatus.Active}
        description={activeOrderDetailMockData.socialShoppingInfo.description}
      />
    );

    expect(getByText('Sdílejte nabídku,', { exact: false })).toBeTruthy();
  });
});
