// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/projects/{project}/branches/{branch}',
};

export const tool: Tool = {
  name: 'retrieve_projects_branches',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a project branch",
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
      },
    },
    required: ['project', 'branch'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return asTextContentResult(await client.projects.branches.retrieve(branch, body));
};

export default { metadata, tool, handler };
