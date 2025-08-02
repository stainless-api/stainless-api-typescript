// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/builds',
};

export const tool: Tool = {
  name: 'list_builds',
  description: 'List builds for a project',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
        description: 'Project name',
      },
      branch: {
        type: 'string',
        description: 'Branch name',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor from a previous response',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of builds to return, defaults to 10 (maximum: 100)',
      },
      revision: {
        anyOf: [
          {
            type: 'string',
            description: 'A config commit SHA used for the build',
          },
          {
            type: 'object',
            description: 'Hash of the files used for the build',
          },
        ],
        description: 'A config commit SHA used for the build',
      },
    },
    required: ['project'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.builds.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
