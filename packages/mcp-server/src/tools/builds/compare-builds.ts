// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/builds/compare',
};

export const tool: Tool = {
  name: 'compare_builds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates two builds whose outputs can be compared directly",
  inputSchema: {
    type: 'object',
    properties: {
      base: {
        type: 'object',
        description: 'Parameters for the base build',
        properties: {
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
            description: 'Specifies what to build: a branch name, a commit SHA, or file contents',
          },
          branch: {
            type: 'string',
            description:
              'Optional branch to use. If not specified, defaults to "main". When using a branch name as revision, this must match or be omitted.',
          },
          commit_message: {
            type: 'string',
            description: 'Optional commit message to use when creating a new commit.',
          },
        },
        required: ['revision'],
      },
      head: {
        type: 'object',
        description: 'Parameters for the head build',
        properties: {
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
            description: 'Specifies what to build: a branch name, a commit SHA, or file contents',
          },
          branch: {
            type: 'string',
            description:
              'Optional branch to use. If not specified, defaults to "main". When using a branch name as revision, this must match or be omitted.',
          },
          commit_message: {
            type: 'string',
            description: 'Optional commit message to use when creating a new commit.',
          },
        },
        required: ['revision'],
      },
      project: {
        type: 'string',
        description: 'Project name',
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
    required: ['base', 'head', 'project'],
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.builds.compare(body));
};

export default { metadata, tool, handler };
