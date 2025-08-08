// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@stainless-api/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds.diagnostics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/builds/{buildId}/diagnostics',
};

export const tool: Tool = {
  name: 'list_builds_diagnostics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet diagnostics for a build\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'string'\n          },\n          ignored: {\n            type: 'boolean'\n          },\n          level: {\n            type: 'string',\n            enum: [              'fatal',\n              'error',\n              'warning',\n              'note'\n            ]\n          },\n          message: {\n            type: 'string'\n          },\n          config_ref: {\n            type: 'string'\n          },\n          oas_ref: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'ignored',\n          'level',\n          'message'\n        ]\n      }\n    },\n    has_more: {\n      type: 'boolean'\n    },\n    next_cursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'has_more'\n  ]\n}\n```",
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
        description: 'Maximum number of diagnostics to return, defaults to 100 (maximum: 100)',
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
          $ref: '#/$defs/target',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['buildId'],
    $defs: {
      target: {
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { buildId, jq_filter, ...body } = args as any;
  const response = await client.builds.diagnostics.list(buildId, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
