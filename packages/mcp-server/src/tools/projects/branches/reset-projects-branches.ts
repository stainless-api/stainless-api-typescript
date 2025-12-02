// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v0/projects/{project}/branches/{branch}/reset',
};

export const tool: Tool = {
  name: 'reset_projects_branches',
  description:
    'Reset a project branch.\n\nIf `branch` === `main`, the branch is reset to `target_config_sha`. Otherwise, the\nbranch is reset to `main`.',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
      },
      target_config_sha: {
        type: 'string',
        description:
          'The commit SHA to reset the main branch to. Required if resetting the main branch; disallowed otherwise.',
      },
    },
    required: ['project', 'branch'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  try {
    return asTextContentResult(await client.projects.branches.reset(branch, body));
  } catch (error) {
    if (error instanceof Stainless.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
