// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'stainless-v0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Stainless from 'stainless-v0';

export const metadata: Metadata = {
  resource: 'generate',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/generate/spec',
};

export const tool: Tool = {
  name: 'create_spec_generate',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      source: {
        anyOf: [
          {
            type: 'object',
            properties: {
              revision: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['git'],
              },
            },
            required: ['revision', 'type'],
          },
          {
            type: 'object',
            properties: {
              openapi_spec: {
                type: 'string',
              },
              stainless_config: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['upload'],
              },
            },
            required: ['openapi_spec', 'stainless_config', 'type'],
          },
        ],
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.generate.createSpec(body));
};

export default { metadata, tool, handler };
