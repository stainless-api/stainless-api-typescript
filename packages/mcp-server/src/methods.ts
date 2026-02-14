// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.projects.create',
    fullyQualifiedName: 'projects.create',
    httpMethod: 'post',
    httpPath: '/v0/projects',
  },
  {
    clientCallName: 'client.projects.retrieve',
    fullyQualifiedName: 'projects.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/projects/{project}',
  },
  {
    clientCallName: 'client.projects.update',
    fullyQualifiedName: 'projects.update',
    httpMethod: 'patch',
    httpPath: '/v0/projects/{project}',
  },
  {
    clientCallName: 'client.projects.list',
    fullyQualifiedName: 'projects.list',
    httpMethod: 'get',
    httpPath: '/v0/projects',
  },
  {
    clientCallName: 'client.projects.generateCommitMessage',
    fullyQualifiedName: 'projects.generateCommitMessage',
    httpMethod: 'post',
    httpPath: '/v0/projects/{project}/generate_commit_message',
  },
  {
    clientCallName: 'client.projects.branches.create',
    fullyQualifiedName: 'projects.branches.create',
    httpMethod: 'post',
    httpPath: '/v0/projects/{project}/branches',
  },
  {
    clientCallName: 'client.projects.branches.retrieve',
    fullyQualifiedName: 'projects.branches.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/projects/{project}/branches/{branch}',
  },
  {
    clientCallName: 'client.projects.branches.list',
    fullyQualifiedName: 'projects.branches.list',
    httpMethod: 'get',
    httpPath: '/v0/projects/{project}/branches',
  },
  {
    clientCallName: 'client.projects.branches.delete',
    fullyQualifiedName: 'projects.branches.delete',
    httpMethod: 'delete',
    httpPath: '/v0/projects/{project}/branches/{branch}',
  },
  {
    clientCallName: 'client.projects.branches.rebase',
    fullyQualifiedName: 'projects.branches.rebase',
    httpMethod: 'put',
    httpPath: '/v0/projects/{project}/branches/{branch}/rebase',
  },
  {
    clientCallName: 'client.projects.branches.reset',
    fullyQualifiedName: 'projects.branches.reset',
    httpMethod: 'put',
    httpPath: '/v0/projects/{project}/branches/{branch}/reset',
  },
  {
    clientCallName: 'client.projects.configs.retrieve',
    fullyQualifiedName: 'projects.configs.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/projects/{project}/configs',
  },
  {
    clientCallName: 'client.projects.configs.guess',
    fullyQualifiedName: 'projects.configs.guess',
    httpMethod: 'post',
    httpPath: '/v0/projects/{project}/configs/guess',
  },
  {
    clientCallName: 'client.builds.create',
    fullyQualifiedName: 'builds.create',
    httpMethod: 'post',
    httpPath: '/v0/builds',
  },
  {
    clientCallName: 'client.builds.retrieve',
    fullyQualifiedName: 'builds.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/builds/{buildId}',
  },
  {
    clientCallName: 'client.builds.list',
    fullyQualifiedName: 'builds.list',
    httpMethod: 'get',
    httpPath: '/v0/builds',
  },
  {
    clientCallName: 'client.builds.compare',
    fullyQualifiedName: 'builds.compare',
    httpMethod: 'post',
    httpPath: '/v0/builds/compare',
  },
  {
    clientCallName: 'client.builds.diagnostics.list',
    fullyQualifiedName: 'builds.diagnostics.list',
    httpMethod: 'get',
    httpPath: '/v0/builds/{buildId}/diagnostics',
  },
  {
    clientCallName: 'client.builds.targetOutputs.retrieve',
    fullyQualifiedName: 'builds.targetOutputs.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/build_target_outputs',
  },
  {
    clientCallName: 'client.orgs.retrieve',
    fullyQualifiedName: 'orgs.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/orgs/{org}',
  },
  {
    clientCallName: 'client.orgs.list',
    fullyQualifiedName: 'orgs.list',
    httpMethod: 'get',
    httpPath: '/v0/orgs',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
