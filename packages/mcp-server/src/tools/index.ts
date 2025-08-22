// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_projects from './projects/create-projects';
import retrieve_projects from './projects/retrieve-projects';
import update_projects from './projects/update-projects';
import list_projects from './projects/list-projects';
import create_projects_branches from './projects/branches/create-projects-branches';
import retrieve_projects_branches from './projects/branches/retrieve-projects-branches';
import list_projects_branches from './projects/branches/list-projects-branches';
import delete_projects_branches from './projects/branches/delete-projects-branches';
import rebase_projects_branches from './projects/branches/rebase-projects-branches';
import retrieve_projects_configs from './projects/configs/retrieve-projects-configs';
import guess_projects_configs from './projects/configs/guess-projects-configs';
import create_builds from './builds/create-builds';
import retrieve_builds from './builds/retrieve-builds';
import list_builds from './builds/list-builds';
import list_builds_diagnostics from './builds/diagnostics/list-builds-diagnostics';
import retrieve_builds_target_outputs from './builds/target-outputs/retrieve-builds-target-outputs';
import retrieve_orgs from './orgs/retrieve-orgs';
import list_orgs from './orgs/list-orgs';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_projects);
addEndpoint(retrieve_projects);
addEndpoint(update_projects);
addEndpoint(list_projects);
addEndpoint(create_projects_branches);
addEndpoint(retrieve_projects_branches);
addEndpoint(list_projects_branches);
addEndpoint(delete_projects_branches);
addEndpoint(rebase_projects_branches);
addEndpoint(retrieve_projects_configs);
addEndpoint(guess_projects_configs);
addEndpoint(create_builds);
addEndpoint(retrieve_builds);
addEndpoint(list_builds);
addEndpoint(list_builds_diagnostics);
addEndpoint(retrieve_builds_target_outputs);
addEndpoint(retrieve_orgs);
addEndpoint(list_orgs);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
