// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/projects/{project}/branches',
};

export const tool: Tool = {
  name: 'create_projects_branches',
  description:
    'Create a new branch for a project.\n\nThe branch inherits the config files from the revision pointed to by the\n`branch_from` parameter. In addition, if the revision is a branch name,\nthe branch will also inherit custom code changes from that branch.',
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
        description: 'Branch name',
      },
      branch_from: {
        type: 'string',
        description: 'Branch or commit SHA to branch from',
      },
      force: {
        type: 'boolean',
        description: 'Whether to throw an error if the branch already exists. Defaults to false.',
      },
    },
    required: ['project', 'branch', 'branch_from'],
  },
  annotations: {},
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.projects.branches.create(body));
};

export default { metadata, tool, handler };
