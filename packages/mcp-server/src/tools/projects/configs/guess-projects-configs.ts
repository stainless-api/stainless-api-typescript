// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.configs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/projects/{project}/configs/guess',
};

export const tool: Tool = {
  name: 'guess_projects_configs',
  description: 'Generate configuration suggestions based on an OpenAPI spec',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      spec: {
        type: 'string',
        description: 'OpenAPI spec',
      },
      branch: {
        type: 'string',
        description: 'Branch name',
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.projects.configs.guess(body));
};

export default { metadata, tool, handler };
