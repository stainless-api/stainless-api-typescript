// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/projects/{project}/branches/{branch}',
};

export const tool: Tool = {
  name: 'retrieve_projects_branches',
  description: 'Retrieve a project branch',
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
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return asTextContentResult(await client.projects.branches.retrieve(branch, body));
};

export default { metadata, tool, handler };
