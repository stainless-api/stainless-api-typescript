// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/projects',
};

export const tool: Tool = {
  name: 'create_projects',
  description: 'Create a new project',
  inputSchema: {
    type: 'object',
    properties: {
      display_name: {
        type: 'string',
        description: 'Human-readable project name',
      },
      org: {
        type: 'string',
        description: 'Organization name',
      },
      revision: {
        type: 'object',
        description: 'File contents to commit',
      },
      slug: {
        type: 'string',
        description: 'Project name/slug',
      },
      targets: {
        type: 'array',
        description: 'Targets to generate for',
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
  const body = args as any;
  return asTextContentResult(await client.projects.create(body));
};

export default { metadata, tool, handler };
