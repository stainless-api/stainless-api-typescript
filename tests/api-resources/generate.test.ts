// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from 'stainless-v0';

const client = new Stainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generate', () => {
  // skipped: tests are disabled for the time being
  test.skip('createSpec: only required params', async () => {
    const responsePromise = client.generate.createSpec({
      project: 'project',
      source: { revision: 'revision', type: 'git' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createSpec: required and optional params', async () => {
    const response = await client.generate.createSpec({
      project: 'project',
      source: { revision: 'revision', type: 'git' },
    });
  });
});
