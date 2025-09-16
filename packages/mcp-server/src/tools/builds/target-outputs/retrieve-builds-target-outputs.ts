// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@stainless-api/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@stainless-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Stainless from '@stainless-api/sdk';

export const metadata: Metadata = {
  resource: 'builds.target_outputs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/build_target_outputs',
};

export const tool: Tool = {
  name: 'retrieve_builds_target_outputs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a method to download an output for a given build target.\n\nIf the requested type of output is `source`, and the requested output\nmethod is `url`, a download link to a tarball of the source files is\nreturned. If the requested output method is `git`, a Git remote, ref,\nand access token (if necessary) is returned.\n\nOtherwise, the possible types of outputs are specific to the requested\ntarget, and the output method _must_ be `url`. See the documentation for\n`type` for more information.\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        output: {\n          type: 'string',\n          enum: [            'url'\n          ]\n        },\n        target: {\n          $ref: '#/$defs/target'\n        },\n        type: {\n          type: 'string',\n          enum: [            'source',\n            'dist',\n            'wheel'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'URL for direct download'\n        }\n      },\n      required: [        'output',\n        'target',\n        'type',\n        'url'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        token: {\n          type: 'string',\n          description: 'Temporary GitHub access token'\n        },\n        output: {\n          type: 'string',\n          enum: [            'git'\n          ]\n        },\n        ref: {\n          type: 'string',\n          description: 'Git reference (commit SHA, branch, or tag)'\n        },\n        target: {\n          $ref: '#/$defs/target'\n        },\n        type: {\n          type: 'string',\n          enum: [            'source',\n            'dist',\n            'wheel'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'URL to git remote'\n        }\n      },\n      required: [        'token',\n        'output',\n        'ref',\n        'target',\n        'type',\n        'url'\n      ]\n    }\n  ],\n  $defs: {\n    target: {\n      type: 'string',\n      enum: [        'node',\n        'typescript',\n        'python',\n        'go',\n        'java',\n        'kotlin',\n        'ruby',\n        'terraform',\n        'cli',\n        'php',\n        'csharp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      build_id: {
        type: 'string',
        description: 'Build ID',
      },
      target: {
        type: 'string',
        description: 'SDK language target name',
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
      type: {
        type: 'string',
        enum: ['source', 'dist', 'wheel'],
      },
      output: {
        type: 'string',
        description: 'Output format: url (download URL) or git (temporary access token).',
        enum: ['url', 'git'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['build_id', 'target', 'type'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Stainless, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.builds.targetOutputs.retrieve(body)));
};

export default { metadata, tool, handler };
