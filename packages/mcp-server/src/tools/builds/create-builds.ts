// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@stainless-api/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/builds',
};

export const tool: Tool = {
  name: 'create_builds',
  description: 'Create a new build',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
        description: 'Project name',
      },
      revision: {
        anyOf: [
          {
            type: 'string',
            description: 'A branch name, commit SHA, or merge command in the format "base..head"',
          },
          {
            type: 'object',
            description: 'File contents to commit directly',
          },
        ],
        description:
          'Specifies what to build: a branch name, commit SHA, merge command ("base..head"), or file contents',
      },
      allow_empty: {
        type: 'boolean',
        description: 'Whether to allow empty commits (no changes). Defaults to false.',
      },
      branch: {
        type: 'string',
        description:
          'Optional branch to use. If not specified, defaults to "main". When using a branch name or merge command as revision, this must match or be omitted.',
      },
      commit_message: {
        type: 'string',
        description: 'Optional commit message to use when creating a new commit.',
      },
      targets: {
        type: 'array',
        description:
          'Optional list of SDK targets to build. If not specified, all configured targets will be built.',
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
  return asTextContentResult(await client.builds.create(body));
};

export default { metadata, tool, handler };
