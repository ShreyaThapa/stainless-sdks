// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla-stainless-node';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource massPayments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.massPayments.create({ _links: {}, items: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.massPayments.create({
      _links: {
        source: { href: 'https://api.dwolla.com/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4' },
      },
      items: [
        {
          _links: {
            destination: {
              href: 'https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db',
            },
          },
          achDetails: { destination: { addenda: { values: ['XYZ987_AddendaValue'] } } },
          amount: { currency: 'USD', value: '5.00' },
          clearing: { destination: 'next-available' },
          correlationId: 'ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841',
          metadata: {},
          processingChannel: { destination: 'real-time-payments' },
        },
      ],
      achDetails: { source: { addenda: { values: ['ZYX987_AddendaValue'] } } },
      clearing: { source: 'next-available' },
      correlationId: 'ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841',
      metadata: {},
      status: 'deferred',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.massPayments.retrieve('id');
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
    await expect(client.massPayments.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.massPayments.update('id', { status: 'pending' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.massPayments.update('id', { status: 'pending' });
  });
});
