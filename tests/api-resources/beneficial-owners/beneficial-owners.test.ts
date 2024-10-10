// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dwolla from 'dwolla-stainless-node';
import { Response } from 'node-fetch';

const client = new Dwolla({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource beneficialOwners', () => {
  test('retrieve', async () => {
    const responsePromise = client.beneficialOwners.retrieve('id');
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
      client.beneficialOwners.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Dwolla.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.beneficialOwners.update('id', {
      address: { address1: '462 Main Street', city: 'Des Moines', country: 'USA', stateProvinceRegion: 'IA' },
      dateOfBirth: 'dateOfBirth',
      firstName: 'firstName',
      lastName: 'lastName',
      ssn: 'ssn',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.beneficialOwners.update('id', {
      address: {
        address1: '462 Main Street',
        city: 'Des Moines',
        country: 'USA',
        stateProvinceRegion: 'IA',
        address2: 'Suite 123',
        address3: 'Unit 123',
        postalCode: '50309',
      },
      dateOfBirth: 'dateOfBirth',
      firstName: 'firstName',
      lastName: 'lastName',
      ssn: 'ssn',
    });
  });

  test('delete', async () => {
    const responsePromise = client.beneficialOwners.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.beneficialOwners.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dwolla.NotFoundError,
    );
  });
});
