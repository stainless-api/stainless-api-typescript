// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v0/projects/{project}/branches/{branch}/rebase',
};

export const tool: Tool = {
  name: 'rebase_projects_branches',
  description: 'Rebase a project branch',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
      },
      base: {
        type: 'string',
        description: 'The branch or commit SHA to rebase onto. Defaults to "main".',
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
  return asTextContentResult(await client.projects.branches.rebase(branch, body));
};

export default { metadata, tool, handler };
