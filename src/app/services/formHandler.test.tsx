import { formatFormV2 } from '../../utils/formFormatter';
import axios from 'axios';

import {
  addBasketActionMockData,
  mockAddToBasketAction,
} from './__fixtures__/formHandler.data';
import { groupUnavailableMockData } from '../domains/socialShopping/pages/groupDetail/__fixtures__/groupUnavailable';
import { handleFormAction } from './formHandler';
import { fullGroupMockData } from '../domains/socialShopping/pages/groupDetail/__fixtures__/fullGroup';

jest.mock('axios', () => {
  return {
    post: jest.fn(),
  };
});

describe('Tests to check if we format HATEOAS forms correctly', () => {
  test('addToBasketAction test', () => {
    const action = mockAddToBasketAction.addToBasketAction.form;

    const output = formatFormV2(action.value);

    expect(output).toStrictEqual({
      items: [
        {
          commodityId: 5458864,
          count: 1,
          services: [],
          hooks: [],
        },
      ],
    });
  });

  test('addBasketAction test', () => {
    const action = addBasketActionMockData.addBasketAction.form;

    const output = formatFormV2(action.value);

    expect(output).toStrictEqual({
      commodityId: 5442246,
      count: 1,
      services: [],
      hooks: [],
      groupId: 0,
    });
  });
});

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
});

describe('Tests to check if we send correct requests to API', () => {
  test('handleFormAction calls correct method', async () => {
    const data = groupUnavailableMockData.data;
    (axios.post as jest.MockedFunction<
      typeof axios.post
    >).mockResolvedValueOnce(200);

    await handleFormAction(data.addToBasketAction.form, '/Order1.htm');

    expect(axios.post).toHaveBeenCalled();
    expect(axios.post).toHaveBeenCalledWith(
      'https://malfa.alza.cz/api/basket/v1/items',
      { items: [{ commodityId: 5458864, count: 1, services: [], hooks: [] }] },
      { headers: { 'Accept-Language': 'cs-CZ' } }
    );
  });

  test('createNewGroupAction should be called with proper requestBody', async () => {
    const data = fullGroupMockData.data;

    (axios.post as jest.MockedFunction<
      typeof axios.post
    >).mockResolvedValueOnce(200);

    await handleFormAction(data.createNewGroupAction.form, '/Order1.htm');

    expect(axios.post).toHaveBeenCalled();
    expect(axios.post).toHaveBeenCalledWith(
      'https://frodo.alza.cz/api/socialShopping/v1/commodities/4844942',
      { commodityId: 4844942, count: 1, services: [], hooks: [] },
      { headers: { 'Accept-Language': 'cs-CZ' } }
    );
  });
});
