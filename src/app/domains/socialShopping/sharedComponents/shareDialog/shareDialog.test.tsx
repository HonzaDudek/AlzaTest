import React from 'react';
import { render } from '@testing-library/react';
import { ShareDialog } from './shareDialog';

const testData = {
  url: 'https://www.alza.cz',
  description: 'popis test',
  commodityImg: 'imageUrl',
  commodityName: 'commodity name',
  title: 'Sdilej',
  buttonText: 'klikej',
};

describe('Order 5 Sharing dialog content: ', function() {
  test('shows order 5 share block - description', async () => {
    const { getByText } = render(<ShareDialog {...testData} />);
    getByText(testData.description);
  });

  test('shows order 5 share block - link', async () => {
    const { getByTestId } = render(<ShareDialog {...testData} />);
    const urlCnt = getByTestId('shareLinkDiv');
    expect(urlCnt.innerHTML).toBe(testData.url);
  });

  test('shows order 5 share block - img', async () => {
    const { getByRole } = render(<ShareDialog {...testData} />);
    const img = getByRole('img');
    expect(img.attributes.getNamedItem('src')?.value).toBe(
      testData.commodityImg
    );
  });
});
