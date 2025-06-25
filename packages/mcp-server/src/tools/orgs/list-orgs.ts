// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'orgs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/orgs',
};

export const tool: Tool = {
  name: 'list_orgs',
  description: 'List organizations the user has access to',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.orgs.list());
};

export default { metadata, tool, handler };
