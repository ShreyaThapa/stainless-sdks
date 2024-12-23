// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla-stainless-node';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchanges', () => {
  test('create', async () => {
    const responsePromise = client.exchanges.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.exchanges.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.exchanges.create(
        {
          _links: {
            'exchange-partner': {
              href: 'https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4',
            },
          },
          finicity: {
            customerId: 'customerId',
            partnerId: 2445583946651,
            products: [
              {
                accessPeriod: { endTime: '2022-08-16T06:06:20Z', startTime: '2022-07-06', type: 'timeframe' },
                accountId: 'accountId',
                product: 'moneyTransferDetails',
              },
            ],
            profile: 3,
            receiptId: 'cr_4N47ou7SlppuIxq0ZUtACh10vYcloY',
            receiptVersion: 'receiptVersion',
            timestamp: '2022-07-11T06:06:23Z',
            version: 'version',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dwolla.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.exchanges.retrieve('292317ec-e252-47d8-93c3-2d128e037aa4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.exchanges.retrieve('292317ec-e252-47d8-93c3-2d128e037aa4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Dwolla.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.exchanges.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.exchanges.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });
});
