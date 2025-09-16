// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@stainless-api/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v0/projects/{project}',
};

export const tool: Tool = {
  name: 'update_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a project's properties.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/project',\n  $defs: {\n    project: {\n      type: 'object',\n      description: 'A project is a collection of SDKs generated from the same set of config files.',\n      properties: {\n        config_repo: {\n          type: 'string'\n        },\n        display_name: {\n          type: 'string'\n        },\n        object: {\n          type: 'string',\n          enum: [            'project'\n          ]\n        },\n        org: {\n          type: 'string'\n        },\n        slug: {\n          type: 'string'\n        },\n        targets: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/target'\n          }\n        }\n      },\n      required: [        'config_repo',\n        'display_name',\n        'object',\n        'org',\n        'slug',\n        'targets'\n      ]\n    },\n    target: {\n      type: 'string',\n      enum: [        'node',\n        'typescript',\n        'python',\n        'go',\n        'java',\n        'kotlin',\n        'ruby',\n        'terraform',\n        'cli',\n        'php',\n        'csharp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      display_name: {
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
  annotations: {},
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.projects.update(body)));
};

export default { metadata, tool, handler };
