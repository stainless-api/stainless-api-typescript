// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'stainless-v0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Stainless from 'stainless-v0';

export const metadata: Metadata = {
  resource: 'builds.diagnostics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/builds/{buildId}/diagnostics',
};

export const tool: Tool = {
  name: 'list_builds_diagnostics',
  description: 'Get diagnostics for a build',
  inputSchema: {
    type: 'object',
    properties: {
      buildId: {
        type: 'string',
        description: 'Build ID',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor from a previous response',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of diagnostics to return, defaults to 10 (maximum: 100)',
      },
      severity: {
        type: 'string',
        description: 'Includes the given severity and above (fatal > error > warning > note).',
        enum: ['fatal', 'error', 'warning', 'note'],
      },
      targets: {
        type: 'array',
        description: 'Optional list of language targets to filter diagnostics by',
        items: {
          type: 'string',
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
      },
    },
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { buildId, ...body } = args as any;
  return asTextContentResult(await client.builds.diagnostics.list(buildId, body));
};

export default { metadata, tool, handler };
