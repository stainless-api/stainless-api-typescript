// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/projects/{project}/configs',
};

export const tool: Tool = {
  name: 'retrieve_projects_configs',
  description: 'Retrieve configuration files for a project',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
        description: 'Branch name, defaults to "main"',
      },
      include: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.projects.configs.retrieve(body));
};

export default { metadata, tool, handler };
