// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StainlessV0 from 'stainless-v0';

const client = new StainlessV0({
  apiKey: 'My API Key',
  project: 'example-project',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource builds', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.builds.create({ revision: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.builds.create({
      project: 'project',
      revision: 'string',
      allow_empty: true,
      branch: 'branch',
      commit_message: 'commit_message',
      targets: ['node'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.builds.retrieve('buildId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.builds.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.builds.list({
      project: 'project',
      branch: 'branch',
      cursor: 'cursor',
      limit: 1,
      revision: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.list(
        { project: 'project', branch: 'branch', cursor: 'cursor', limit: 1, revision: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StainlessV0.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('compare: only required params', async () => {
    const responsePromise = client.builds.compare({
      base: { revision: 'string' },
      head: { revision: 'string' },
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
  test.skip('compare: required and optional params', async () => {
    const response = await client.builds.compare({
      base: { revision: 'string', branch: 'branch', commit_message: 'commit_message' },
      head: { revision: 'string', branch: 'branch', commit_message: 'commit_message' },
      project: 'project',
      targets: ['node'],
    });
  });
});
