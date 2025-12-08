// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from '@stainless-api/sdk';

const client = new Stainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource builds', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.builds.create({ project: 'project', revision: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.builds.create({
      project: 'project',
      revision: 'string',
      allow_empty: true,
      branch: 'branch',
      commit_message: 'commit_message',
      target_commit_messages: {
        cli: 'cli',
        csharp: 'csharp',
        go: 'go',
        java: 'java',
        kotlin: 'kotlin',
        node: 'node',
        php: 'php',
        python: 'python',
        ruby: 'ruby',
        terraform: 'terraform',
        typescript: 'typescript',
      },
      targets: ['node'],
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.builds.list({ project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.builds.list({
      project: 'project',
      branch: 'branch',
      cursor: 'cursor',
      limit: 1,
      revision: 'string',
    });
  });

  // Prism tests are disabled
  test.skip('compare: only required params', async () => {
    const responsePromise = client.builds.compare({
      base: { branch: 'branch', revision: 'string' },
      head: { branch: 'branch', revision: 'string' },
      project: 'project',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('compare: required and optional params', async () => {
    const response = await client.builds.compare({
      base: { branch: 'branch', revision: 'string', commit_message: 'commit_message' },
      head: { branch: 'branch', revision: 'string', commit_message: 'commit_message' },
      project: 'project',
      targets: ['node'],
    });
  });
});
