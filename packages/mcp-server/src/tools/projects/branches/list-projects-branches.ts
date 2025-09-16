// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@stainless-api/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'projects.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/projects/{project}/branches',
};

export const tool: Tool = {
  name: 'list_projects_branches',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a project branch by name.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A project branch names a line of development for a project. Like a Git\\nbranch, it points to a Git commit with a set of config files. In addition, a\\nproject branch also points to a set of custom code changes, corresponding to\\nGit branches in the staging repos.',\n        properties: {\n          branch: {\n            type: 'string',\n            description: 'Branch name'\n          },\n          config_commit: {\n            type: 'object',\n            description: 'A Git commit that points to the latest set of config files on a given\\nbranch.',\n            properties: {\n              repo: {\n                type: 'object',\n                properties: {\n                  branch: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  owner: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'branch',\n                  'name',\n                  'owner'\n                ]\n              },\n              sha: {\n                type: 'string'\n              }\n            },\n            required: [              'repo',\n              'sha'\n            ]\n          },\n          latest_build_id: {\n            type: 'string'\n          },\n          object: {\n            type: 'string',\n            enum: [              'project_branch'\n            ]\n          },\n          org: {\n            type: 'string'\n          },\n          project: {\n            type: 'string',\n            description: 'Project name'\n          }\n        },\n        required: [          'branch',\n          'config_commit',\n          'latest_build_id',\n          'object',\n          'org',\n          'project'\n        ]\n      }\n    },\n    has_more: {\n      type: 'boolean'\n    },\n    next_cursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'has_more'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      project: {
        type: 'string',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor from a previous response',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of items to return, defaults to 10 (maximum: 100).',
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
  const { jq_filter, ...body } = args as any;
  const response = await client.projects.branches.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
