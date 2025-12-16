// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

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
  description: 'Retrieve a build by its ID.',
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
  try {
    return asTextContentResult(await client.builds.retrieve(buildId));
  } catch (error) {
    if (error instanceof Stainless.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
