// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from '@stainless-api/sdk';

const client = new Stainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.create({
      display_name: 'display_name',
      org: 'org',
      revision: { foo: { content: 'content' } },
      slug: 'slug',
      targets: ['node'],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.projects.create({
      display_name: 'display_name',
      org: 'org',
      revision: { foo: { content: 'content' } },
      slug: 'slug',
      targets: ['node'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.retrieve({ project: 'project' });
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
    const response = await client.projects.retrieve({ project: 'project' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.update({ project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.projects.update({ project: 'project', display_name: 'display_name' });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.list({ cursor: 'cursor', limit: 1, org: 'org' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Stainless.NotFoundError);
  });
});
