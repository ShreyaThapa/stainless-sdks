// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla-stainless-node';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource kba', () => {
  test('initiate', async () => {
    const responsePromise = client.customers.kba.initiate('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.customers.kba.initiate('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });
});