// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@stainless-api/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'orgs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/orgs',
};

export const tool: Tool = {
  name: 'list_orgs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList organizations the user has access to\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/org'\n      }\n    },\n    has_more: {\n      type: 'boolean'\n    },\n    next_cursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'has_more'\n  ],\n  $defs: {\n    org: {\n      type: 'object',\n      properties: {\n        display_name: {\n          type: 'string'\n        },\n        object: {\n          type: 'string',\n          enum: [            'org'\n          ]\n        },\n        slug: {\n          type: 'string'\n        }\n      },\n      required: [        'display_name',\n        'object',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.orgs.list()));
};

export default { metadata, tool, handler };
