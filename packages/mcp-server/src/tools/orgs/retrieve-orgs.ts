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
  httpPath: '/v0/orgs/{org}',
};

export const tool: Tool = {
  name: 'retrieve_orgs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve an organization by name\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/org',\n  $defs: {\n    org: {\n      type: 'object',\n      properties: {\n        display_name: {\n          type: 'string'\n        },\n        object: {\n          type: 'string',\n          enum: [            'org'\n          ]\n        },\n        slug: {\n          type: 'string'\n        }\n      },\n      required: [        'display_name',\n        'object',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      org: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['org'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { org, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.orgs.retrieve(org)));
};

export default { metadata, tool, handler };
