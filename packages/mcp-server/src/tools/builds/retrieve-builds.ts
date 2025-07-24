// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a build by ID",
  inputSchema: {
    type: 'object',
    properties: {
      buildId: {
        type: 'string',
        description: 'Build ID',
      },
    },
    required: ['buildId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { buildId, ...body } = args as any;
  return asTextContentResult(await client.builds.retrieve(buildId));
};

export default { metadata, tool, handler };
