// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@stainless-api/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/projects/{project}/configs',
};

export const tool: Tool = {
  name: 'retrieve_projects_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve configuration files for a project\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Config files contents'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      branch: {
        type: 'string',
        description: 'Branch name, defaults to "main"',
      },
      include: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['project'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.projects.configs.retrieve(body)));
};

export default { metadata, tool, handler };
