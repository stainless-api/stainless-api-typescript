// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds.target_outputs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/build_target_outputs',
};

export const tool: Tool = {
  name: 'retrieve_builds_target_outputs',
  description: 'Download the output of a build target',
  inputSchema: {
    type: 'object',
    properties: {
      build_id: {
        type: 'string',
        description: 'Build ID',
      },
      target: {
        type: 'string',
        description: 'SDK language target name',
        enum: [
          'node',
          'typescript',
          'python',
          'go',
          'java',
          'kotlin',
          'ruby',
          'terraform',
          'cli',
          'php',
          'csharp',
        ],
      },
      type: {
        type: 'string',
        enum: ['source', 'dist', 'wheel'],
      },
      output: {
        type: 'string',
        description: 'Output format: url (download URL) or git (temporary access token)',
        enum: ['url', 'git'],
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.builds.targetOutputs.retrieve(body));
};

export default { metadata, tool, handler };
