// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from '@stainless-api/sdk';

const client = new Stainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diagnostics', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.builds.diagnostics.list('buildId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.diagnostics.list(
        'buildId',
        {
          cursor: 'cursor',
          limit: 1,
          severity: 'fatal',
          targets: 'targets',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stainless.NotFoundError);
  });
});
