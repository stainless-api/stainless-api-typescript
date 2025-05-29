// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from 'stainless-v0';

const client = new Stainless({
  apiKey: 'My API Key',
  project: 'example-project',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.configs.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.projects.configs.retrieve({ project: 'project', branch: 'branch' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.configs.retrieve(
        { project: 'project', branch: 'branch' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stainless.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('guess: only required params', async () => {
    const responsePromise = client.projects.configs.guess({ spec: 'spec' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('guess: required and optional params', async () => {
    const response = await client.projects.configs.guess({
      project: 'project',
      spec: 'spec',
      branch: 'branch',
    });
  });
});
