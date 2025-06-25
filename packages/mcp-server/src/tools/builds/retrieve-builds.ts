// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/builds/{buildId}',
};

export const tool: Tool = {
  name: 'retrieve_builds',
  description: 'Retrieve a build by ID',
  inputSchema: {
    type: 'object',
    properties: {
      buildId: {
        type: 'string',
        description: 'Build ID',
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { buildId, ...body } = args as any;
  return asTextContentResult(await client.builds.retrieve(buildId));
};

export default { metadata, tool, handler };
