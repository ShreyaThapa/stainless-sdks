// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource labels', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customers.labels.create('id', { amount: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.customers.labels.create('id', {
      amount: { currency: 'currency', value: 'USD' },
    });
  });

  test('list', async () => {
    const responsePromise = client.customers.labels.list('id');
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
    await expect(client.customers.labels.list('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.labels.list(
        'id',
        { limit: 'limit', offset: 'offset' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dwolla.NotFoundError);
  });
});
