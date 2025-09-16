// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v0/projects/{project}/branches/{branch}',
};

export const tool: Tool = {
  name: 'delete_projects_branches',
  description: 'Delete a project branch by name.',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
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
  return asTextContentResult((await client.projects.branches.delete(branch, body)) as object);
};

export default { metadata, tool, handler };
