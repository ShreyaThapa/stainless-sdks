// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla-stainless-node';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customers.create({
      email: 'accountAdmin@email.com',
      firstName: 'Account',
      lastName: 'Admin',
      type: 'receive-only',
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
    const response = await client.customers.create({
      email: 'accountAdmin@email.com',
      firstName: 'Account',
      lastName: 'Admin',
      type: 'receive-only',
      businessName: 'Jane Corp llc',
      correlationId: 'fc451a7a-ae30-4404-aB95-e3553fcd733',
      ipAddress: '143.156.7.8',
      phone: 'phone',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.customers.retrieve('id');
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
    await expect(client.customers.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.customers.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.customers.update('id', { status: 'deactivated' });
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.customers.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.update('id', { status: 'deactivated' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Dwolla.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.customers.list();
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
    await expect(client.customers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.list(
        { limit: 'limit', offset: 'offset', search: 'search', status: 'status' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dwolla.NotFoundError);
  });
});
