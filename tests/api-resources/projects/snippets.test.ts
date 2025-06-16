// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from 'stainless-v0';

const client = new Stainless({
  apiKey: 'My API Key',
  project: 'example-project',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snippets', () => {
  // skipped: tests are disabled for the time being
  test.skip('createRequest: only required params', async () => {
    const responsePromise = client.projects.snippets.createRequest('projectName', {
      language: 'node',
      request: { method: 'method', parameters: [{ in: 'path', name: 'name' }], path: 'path' },
      version: 'next',
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
  test.skip('createRequest: required and optional params', async () => {
    const response = await client.projects.snippets.createRequest('projectName', {
      language: 'node',
      request: {
        method: 'method',
        parameters: [{ in: 'path', name: 'name', value: {} }],
        path: 'path',
        body: { fileParam: 'fileParam', filePath: 'filePath' },
      },
      version: 'next',
    });
  });
});
