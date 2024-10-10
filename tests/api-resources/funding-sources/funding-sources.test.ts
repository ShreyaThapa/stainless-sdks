// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla-stainless-node';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fundingSources', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fundingSources.create({
      accountNumber: 'accountNumber',
      bankAccountType: 'checking',
      name: 'name',
      routingNumber: 'routingNumber',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fundingSources.create({
      accountNumber: 'accountNumber',
      bankAccountType: 'checking',
      name: 'name',
      routingNumber: 'routingNumber',
      _links: { exchange: { href: 'href' } },
      channels: ['string', 'string', 'string'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.fundingSources.retrieve('id');
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
    await expect(client.fundingSources.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.fundingSources.update('id', { name: 'Jane Doe’s Checking' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.fundingSources.update('id', {
      name: 'Jane Doe’s Checking',
      accountNumber: 'accountNumber',
      bankAccountType: 'checking',
      routingNumber: 'routingNumber',
    });
  });
});
