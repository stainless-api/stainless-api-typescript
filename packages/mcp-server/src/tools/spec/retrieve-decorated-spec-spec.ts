// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'spec',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/spec/application/{clientId}/{projectName}',
};

export const tool: Tool = {
  name: 'retrieve_decorated_spec_spec',
  description: '\n    Retrieve the decorated spec for a given application and project.\n  ',
  inputSchema: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
      },
      projectName: {
        type: 'string',
      },
    },
    required: ['clientId', 'projectName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { projectName, ...body } = args as any;
  return asTextContentResult((await client.spec.retrieveDecoratedSpec(projectName, body)) as object);
};

export default { metadata, tool, handler };
