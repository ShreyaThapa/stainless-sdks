// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TokensAPI from './tokens';

export class Tokens extends APIResource {
  /**
   * Generates an access token that contains permissions scoped to the application
   * owner's Dwolla Client Account.
   */
  generate(body: TokenGenerateParams, options?: Core.RequestOptions): Core.APIPromise<TokenGenerateResponse> {
    return this._client.post('/token', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...options?.headers },
    });
  }
}

export interface TokenGenerateResponse {
  access_token?: string;

  expires_in?: number;

  token_type?: string;
}

export interface TokenGenerateParams {
  grant_type: string;
}

export namespace Tokens {
  export type TokenGenerateResponse = TokensAPI.TokenGenerateResponse;
  export type TokenGenerateParams = TokensAPI.TokenGenerateParams;
}
