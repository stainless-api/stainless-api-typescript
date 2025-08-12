// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from '@stainless-api/sdk';

const client = new Stainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configs', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.configs.retrieve({ project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.projects.configs.retrieve({
      project: 'project',
      branch: 'branch',
      include: 'include',
    });
  });

  // Prism tests are disabled
  test.skip('guess: only required params', async () => {
    const responsePromise = client.projects.configs.guess({ project: 'project', spec: 'spec' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('guess: required and optional params', async () => {
    const response = await client.projects.configs.guess({
      project: 'project',
      spec: 'spec',
      branch: 'branch',
    });
  });
});
