// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Kba extends APIResource {
  /**
   * Retrieve KBA Questions
   */
  retrieveQuestions(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KbaRetrieveQuestionsResponse> {
    return this._client.get(`/kba/${id}`, options);
  }

  /**
   * Verify KBA Questions
   */
  verify(
    id: string,
    body: KbaVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KbaVerifyResponse> {
    return this._client.post(`/kba/${id}`, { body, ...options });
  }
}

export interface KbaRetrieveQuestionsResponse {
  id?: string;

  _links?: KbaRetrieveQuestionsResponse._Links;

  questions?: Array<KbaRetrieveQuestionsResponse.Question>;
}

export namespace KbaRetrieveQuestionsResponse {
  export interface _Links {
    answer?: _Links.Answer;
  }

  export namespace _Links {
    export interface Answer {
      href?: string;

      'resource-type'?: string;

      type?: string;
    }
  }

  export interface Question {
    id?: string;

    answers?: Array<Question.Answer>;

    text?: string;
  }

  export namespace Question {
    export interface Answer {
      id?: string;

      text?: string;
    }
  }
}

export interface KbaVerifyResponse {
  _links?: KbaVerifyResponse._Links;

  verificationStatus?: string;
}

export namespace KbaVerifyResponse {
  export interface _Links {
    customer?: _Links.Customer;
  }

  export namespace _Links {
    export interface Customer {
      href?: string;

      'resource-type'?: string;

      type?: string;
    }
  }
}

export interface KbaVerifyParams {
  answers: Array<KbaVerifyParams.Answer>;
}

export namespace KbaVerifyParams {
  export interface Answer {
    answerId?: string;

    questionId?: string;
  }
}

export declare namespace Kba {
  export {
    type KbaRetrieveQuestionsResponse as KbaRetrieveQuestionsResponse,
    type KbaVerifyResponse as KbaVerifyResponse,
    type KbaVerifyParams as KbaVerifyParams,
  };
}
