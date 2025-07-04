// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'orgs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/orgs/{org}',
};

export const tool: Tool = {
  name: 'retrieve_orgs',
  description: 'Retrieve an organization by name',
  inputSchema: {
    type: 'object',
    properties: {
      org: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { org, ...body } = args as any;
  return asTextContentResult(await client.orgs.retrieve(org));
};

export default { metadata, tool, handler };
