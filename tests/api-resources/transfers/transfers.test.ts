// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transfers', () => {
  test('retrieve', async () => {
    const responsePromise = client.transfers.retrieve('id');
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
    await expect(client.transfers.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.transfers.cancel('id', { status: 'cancelled' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.transfers.cancel('id', { status: 'cancelled' });
  });

  test('initiate: only required params', async () => {
    const responsePromise = client.transfers.initiate({
      _links: {},
      amount: { currency: 'USD', value: '5.00' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiate: required and optional params', async () => {
    const response = await client.transfers.initiate({
      _links: { destination: { href: 'href' }, source: { href: 'href' } },
      amount: { currency: 'USD', value: '5.00' },
      achDetails: {
        destination: { addenda: { values: ['string', 'string', 'string'] } },
        source: { addenda: { values: ['string', 'string', 'string'] } },
      },
      clearing: { destination: 'destination', source: 'source' },
      correlationId: 'correlationId',
      fees: [
        { _links: { 'charge-to': { href: 'href' } }, amount: { amount: 'amount', currency: 'currency' } },
        { _links: { 'charge-to': { href: 'href' } }, amount: { amount: 'amount', currency: 'currency' } },
        { _links: { 'charge-to': { href: 'href' } }, amount: { amount: 'amount', currency: 'currency' } },
      ],
      metadata: {},
      processingChannel: { destination: 'real-time-payments' },
      rtpDetails: { destination: { remittanceData: 'remittanceData' } },
    });
  });
});
