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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new branch for a project",
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
        description: 'Name of the new project branch.',
      },
      branch_from: {
        type: 'string',
        description: 'Branch or commit SHA to branch from.',
      },
      force: {
        type: 'boolean',
        description: 'Whether to throw an error if the branch already exists. Defaults to false.',
      },
    },
    required: ['project', 'branch', 'branch_from'],
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.projects.branches.create(body));
};

export default { metadata, tool, handler };
