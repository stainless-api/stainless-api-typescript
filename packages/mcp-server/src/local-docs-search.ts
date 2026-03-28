// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/v0/projects',
    httpMethod: 'post',
    summary: 'Create project',
    description: 'Create a new project.',
    stainlessPath: '(resource) projects > (method) create',
    qualified: 'client.projects.create',
    params: [
      'display_name: string;',
      'org: string;',
      'revision: object;',
      'slug: string;',
      'targets: string[];',
    ],
    response:
      "{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }",
    markdown:
      "## create\n\n`client.projects.create(display_name: string, org: string, revision: object, slug: string, targets: string[]): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**post** `/v0/projects`\n\nCreate a new project.\n\n### Parameters\n\n- `display_name: string`\n  Human-readable project name\n\n- `org: string`\n  Organization name\n\n- `revision: object`\n  File contents to commit\n\n- `slug: string`\n  Project name/slug\n\n- `targets: string[]`\n  Targets to generate for\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst project = await client.projects.create({\n  display_name: 'display_name',\n  org: 'org',\n  revision: { foo: { content: 'content' } },\n  slug: 'slug',\n  targets: ['node'],\n});\n\nconsole.log(project);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/projects/{project}',
    httpMethod: 'get',
    summary: 'Retrieve project',
    description: 'Retrieve a project by name.',
    stainlessPath: '(resource) projects > (method) retrieve',
    qualified: 'client.projects.retrieve',
    params: ['project: string;'],
    response:
      "{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }",
    markdown:
      "## retrieve\n\n`client.projects.retrieve(project: string): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**get** `/v0/projects/{project}`\n\nRetrieve a project by name.\n\n### Parameters\n\n- `project: string`\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst project = await client.projects.retrieve({ project: 'project' });\n\nconsole.log(project);\n```",
  },
  {
    name: 'update',
    endpoint: '/v0/projects/{project}',
    httpMethod: 'patch',
    summary: 'Update project',
    description: "Update a project's properties.",
    stainlessPath: '(resource) projects > (method) update',
    qualified: 'client.projects.update',
    params: ['project: string;', 'display_name?: string;'],
    response:
      "{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }",
    markdown:
      "## update\n\n`client.projects.update(project: string, display_name?: string): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**patch** `/v0/projects/{project}`\n\nUpdate a project's properties.\n\n### Parameters\n\n- `project: string`\n\n- `display_name?: string`\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst project = await client.projects.update({ project: 'project' });\n\nconsole.log(project);\n```",
  },
  {
    name: 'list',
    endpoint: '/v0/projects',
    httpMethod: 'get',
    summary: 'List projects',
    description: 'List projects in an organization, from oldest to newest.',
    stainlessPath: '(resource) projects > (method) list',
    qualified: 'client.projects.list',
    params: ['cursor?: string;', 'limit?: number;', 'org?: string;'],
    response:
      "{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }",
    markdown:
      "## list\n\n`client.projects.list(cursor?: string, limit?: number, org?: string): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**get** `/v0/projects`\n\nList projects in an organization, from oldest to newest.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor from a previous response\n\n- `limit?: number`\n  Maximum number of projects to return, defaults to 10 (maximum: 100).\n\n- `org?: string`\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\n// Automatically fetches more pages as needed.\nfor await (const project of client.projects.list()) {\n  console.log(project);\n}\n```",
  },
  {
    name: 'generate_commit_message',
    endpoint: '/v0/projects/{project}/generate_commit_message',
    httpMethod: 'post',
    summary: 'Generate an AI commit message for a specific SDK',
    description: 'Generates an AI commit message by comparing two git refs in the SDK repository.',
    stainlessPath: '(resource) projects > (method) generate_commit_message',
    qualified: 'client.projects.generateCommitMessage',
    params: ['project: string;', 'target: string;', 'base_ref: string;', 'head_ref: string;'],
    response: '{ ai_commit_message: string; }',
    markdown:
      "## generate_commit_message\n\n`client.projects.generateCommitMessage(project: string, target: string, base_ref: string, head_ref: string): { ai_commit_message: string; }`\n\n**post** `/v0/projects/{project}/generate_commit_message`\n\nGenerates an AI commit message by comparing two git refs in the SDK repository.\n\n### Parameters\n\n- `project: string`\n\n- `target: string`\n  Language target\n\n- `base_ref: string`\n  Base ref for comparison\n\n- `head_ref: string`\n  Head ref for comparison\n\n### Returns\n\n- `{ ai_commit_message: string; }`\n\n  - `ai_commit_message: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst response = await client.projects.generateCommitMessage({\n  project: 'project',\n  target: 'python',\n  base_ref: 'base_ref',\n  head_ref: 'head_ref',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v0/projects/{project}/branches',
    httpMethod: 'post',
    summary: 'Create a new project branch',
    description:
      'Create a new branch for a project.\n\nThe branch inherits the config files from the revision pointed to by the\n`branch_from` parameter. In addition, if the revision is a branch name,\nthe branch will also inherit custom code changes from that branch.',
    stainlessPath: '(resource) projects.branches > (method) create',
    qualified: 'client.projects.branches.create',
    params: ['project: string;', 'branch: string;', 'branch_from: string;', 'force?: boolean;'],
    response:
      "{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }",
    markdown:
      "## create\n\n`client.projects.branches.create(project: string, branch: string, branch_from: string, force?: boolean): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**post** `/v0/projects/{project}/branches`\n\nCreate a new branch for a project.\n\nThe branch inherits the config files from the revision pointed to by the\n`branch_from` parameter. In addition, if the revision is a branch name,\nthe branch will also inherit custom code changes from that branch.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n  Branch name\n\n- `branch_from: string`\n  Branch or commit SHA to branch from\n\n- `force?: boolean`\n  Whether to throw an error if the branch already exists. Defaults to false.\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst projectBranch = await client.projects.branches.create({\n  project: 'project',\n  branch: 'branch',\n  branch_from: 'branch_from',\n});\n\nconsole.log(projectBranch);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/projects/{project}/branches/{branch}',
    httpMethod: 'get',
    summary: 'Retrieve a project branch',
    description: 'Retrieve a project branch by name.',
    stainlessPath: '(resource) projects.branches > (method) retrieve',
    qualified: 'client.projects.branches.retrieve',
    params: ['project: string;', 'branch: string;'],
    response:
      "{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }",
    markdown:
      "## retrieve\n\n`client.projects.branches.retrieve(project: string, branch: string): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**get** `/v0/projects/{project}/branches/{branch}`\n\nRetrieve a project branch by name.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst projectBranch = await client.projects.branches.retrieve('branch', { project: 'project' });\n\nconsole.log(projectBranch);\n```",
  },
  {
    name: 'list',
    endpoint: '/v0/projects/{project}/branches',
    httpMethod: 'get',
    summary: 'List project branches',
    description: 'Retrieve a project branch by name.',
    stainlessPath: '(resource) projects.branches > (method) list',
    qualified: 'client.projects.branches.list',
    params: ['project: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build_id: string; object: 'project_branch'; org: string; project: string; }",
    markdown:
      "## list\n\n`client.projects.branches.list(project: string, cursor?: string, limit?: number): { branch: string; config_commit: object; latest_build_id: string; object: 'project_branch'; org: string; project: string; }`\n\n**get** `/v0/projects/{project}/branches`\n\nRetrieve a project branch by name.\n\n### Parameters\n\n- `project: string`\n\n- `cursor?: string`\n  Pagination cursor from a previous response\n\n- `limit?: number`\n  Maximum number of items to return, defaults to 10 (maximum: 100).\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build_id: string; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build_id: string`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\n// Automatically fetches more pages as needed.\nfor await (const branchListResponse of client.projects.branches.list({ project: 'project' })) {\n  console.log(branchListResponse);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/v0/projects/{project}/branches/{branch}',
    httpMethod: 'delete',
    summary: 'Delete a project branch',
    description: 'Delete a project branch by name.',
    stainlessPath: '(resource) projects.branches > (method) delete',
    qualified: 'client.projects.branches.delete',
    params: ['project: string;', 'branch: string;'],
    response: 'object',
    markdown:
      "## delete\n\n`client.projects.branches.delete(project: string, branch: string): object`\n\n**delete** `/v0/projects/{project}/branches/{branch}`\n\nDelete a project branch by name.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst branch = await client.projects.branches.delete('branch', { project: 'project' });\n\nconsole.log(branch);\n```",
  },
  {
    name: 'rebase',
    endpoint: '/v0/projects/{project}/branches/{branch}/rebase',
    httpMethod: 'put',
    summary: 'Rebase a project branch',
    description:
      'Rebase a project branch.\n\nThe branch is rebased onto the `base` branch or commit SHA, inheriting\nany config and custom code changes.',
    stainlessPath: '(resource) projects.branches > (method) rebase',
    qualified: 'client.projects.branches.rebase',
    params: ['project: string;', 'branch: string;', 'base?: string;'],
    response:
      "{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }",
    markdown:
      "## rebase\n\n`client.projects.branches.rebase(project: string, branch: string, base?: string): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**put** `/v0/projects/{project}/branches/{branch}/rebase`\n\nRebase a project branch.\n\nThe branch is rebased onto the `base` branch or commit SHA, inheriting\nany config and custom code changes.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n- `base?: string`\n  The branch or commit SHA to rebase onto. Defaults to \"main\".\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst projectBranch = await client.projects.branches.rebase('branch', { project: 'project' });\n\nconsole.log(projectBranch);\n```",
  },
  {
    name: 'reset',
    endpoint: '/v0/projects/{project}/branches/{branch}/reset',
    httpMethod: 'put',
    summary: '',
    description:
      'Reset a project branch.\n\nIf `branch` === `main`, the branch is reset to `target_config_sha`. Otherwise, the\nbranch is reset to `main`.',
    stainlessPath: '(resource) projects.branches > (method) reset',
    qualified: 'client.projects.branches.reset',
    params: ['project: string;', 'branch: string;', 'target_config_sha?: string;'],
    response:
      "{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }",
    markdown:
      "## reset\n\n`client.projects.branches.reset(project: string, branch: string, target_config_sha?: string): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**put** `/v0/projects/{project}/branches/{branch}/reset`\n\nReset a project branch.\n\nIf `branch` === `main`, the branch is reset to `target_config_sha`. Otherwise, the\nbranch is reset to `main`.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n- `target_config_sha?: string`\n  The commit SHA to reset the main branch to. Required if resetting the main branch; disallowed otherwise.\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst projectBranch = await client.projects.branches.reset('branch', { project: 'project' });\n\nconsole.log(projectBranch);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/projects/{project}/configs',
    httpMethod: 'get',
    summary: 'Retrieve configuration files',
    description: '\n    Retrieve the configuration files for a given project.',
    stainlessPath: '(resource) projects.configs > (method) retrieve',
    qualified: 'client.projects.configs.retrieve',
    params: ['project: string;', 'branch?: string;', 'include?: string;'],
    response: 'object',
    markdown:
      "## retrieve\n\n`client.projects.configs.retrieve(project: string, branch?: string, include?: string): object`\n\n**get** `/v0/projects/{project}/configs`\n\n\n    Retrieve the configuration files for a given project.\n\n### Parameters\n\n- `project: string`\n\n- `branch?: string`\n  Branch name, defaults to \"main\".\n\n- `include?: string`\n\n### Returns\n\n- `object`\n  Config files contents\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst config = await client.projects.configs.retrieve({ project: 'project' });\n\nconsole.log(config);\n```",
  },
  {
    name: 'guess',
    endpoint: '/v0/projects/{project}/configs/guess',
    httpMethod: 'post',
    summary: 'Generate config suggestions',
    description: '\n    Generate suggestions for changes to config files based on an OpenAPI spec.',
    stainlessPath: '(resource) projects.configs > (method) guess',
    qualified: 'client.projects.configs.guess',
    params: ['project: string;', 'spec: string;', 'branch?: string;'],
    response: 'object',
    markdown:
      "## guess\n\n`client.projects.configs.guess(project: string, spec: string, branch?: string): object`\n\n**post** `/v0/projects/{project}/configs/guess`\n\n\n    Generate suggestions for changes to config files based on an OpenAPI spec.\n\n### Parameters\n\n- `project: string`\n\n- `spec: string`\n  OpenAPI spec\n\n- `branch?: string`\n  Branch name\n\n### Returns\n\n- `object`\n  Config files contents\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst response = await client.projects.configs.guess({ project: 'project', spec: 'spec' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v0/builds',
    httpMethod: 'post',
    summary: 'Create build',
    description:
      'Create a build, on top of a project branch, against a given input revision.\n\nThe project branch will be modified so that its latest set of config files\npoints to the one specified by the input revision.',
    stainlessPath: '(resource) builds > (method) create',
    qualified: 'client.builds.create',
    params: [
      'project: string;',
      'revision: string | object;',
      'allow_empty?: boolean;',
      'branch?: string;',
      'commit_message?: string;',
      'enable_ai_commit_message?: boolean;',
      'target_commit_messages?: { cli?: string; csharp?: string; go?: string; java?: string; kotlin?: string; node?: string; openapi?: string; php?: string; python?: string; ruby?: string; sql?: string; terraform?: string; typescript?: string; };',
      'targets?: string[];',
    ],
    response:
      "{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }",
    markdown:
      "## create\n\n`client.builds.create(project: string, revision: string | object, allow_empty?: boolean, branch?: string, commit_message?: string, enable_ai_commit_message?: boolean, target_commit_messages?: { cli?: string; csharp?: string; go?: string; java?: string; kotlin?: string; node?: string; openapi?: string; php?: string; python?: string; ruby?: string; sql?: string; terraform?: string; typescript?: string; }, targets?: string[]): { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }`\n\n**post** `/v0/builds`\n\nCreate a build, on top of a project branch, against a given input revision.\n\nThe project branch will be modified so that its latest set of config files\npoints to the one specified by the input revision.\n\n### Parameters\n\n- `project: string`\n  Project name\n\n- `revision: string | object`\n  Specifies what to build: a branch name, commit SHA, merge command\n(\"base..head\"), or file contents.\n\n- `allow_empty?: boolean`\n  Whether to allow empty commits (no changes). Defaults to false.\n\n- `branch?: string`\n  The project branch to use for the build. If not specified, the\nbranch is inferred from the `revision`, and will 400 when that\nis not possible.\n\n- `commit_message?: string`\n  Optional commit message to use when creating a new commit.\n\n- `enable_ai_commit_message?: boolean`\n  Whether to generate AI-powered commit messages for the build.\nCannot be combined with `commit_message` or `target_commit_messages`.\n\n- `target_commit_messages?: { cli?: string; csharp?: string; go?: string; java?: string; kotlin?: string; node?: string; openapi?: string; php?: string; python?: string; ruby?: string; sql?: string; terraform?: string; typescript?: string; }`\n  Optional commit messages to use for each SDK when making a new commit.\nSDKs not represented in this object will fallback to the optional\n`commit_message` parameter, or will fallback further to the default\ncommit message.\n  - `cli?: string`\n  - `csharp?: string`\n  - `go?: string`\n  - `java?: string`\n  - `kotlin?: string`\n  - `node?: string`\n  - `openapi?: string`\n  - `php?: string`\n  - `python?: string`\n  - `ruby?: string`\n  - `sql?: string`\n  - `terraform?: string`\n  - `typescript?: string`\n\n- `targets?: string[]`\n  Optional list of SDK targets to build. If not specified, all configured\ntargets will be built.\n\n### Returns\n\n- `{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n  - `id: string`\n  - `config_commit: string`\n  - `created_at: string`\n  - `documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }`\n  - `object: 'build'`\n  - `org: string`\n  - `project: string`\n  - `targets: { cli?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; csharp?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; go?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; java?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; kotlin?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; node?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; openapi?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; php?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; python?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; ruby?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; sql?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; terraform?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; typescript?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst build = await client.builds.create({ project: 'project', revision: 'string' });\n\nconsole.log(build);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/builds/{buildId}',
    httpMethod: 'get',
    summary: 'Retrieve build',
    description: 'Retrieve a build by its ID.',
    stainlessPath: '(resource) builds > (method) retrieve',
    qualified: 'client.builds.retrieve',
    params: ['buildId: string;'],
    response:
      "{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.builds.retrieve(buildId: string): { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }`\n\n**get** `/v0/builds/{buildId}`\n\nRetrieve a build by its ID.\n\n### Parameters\n\n- `buildId: string`\n  Build ID\n\n### Returns\n\n- `{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n  - `id: string`\n  - `config_commit: string`\n  - `created_at: string`\n  - `documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }`\n  - `object: 'build'`\n  - `org: string`\n  - `project: string`\n  - `targets: { cli?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; csharp?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; go?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; java?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; kotlin?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; node?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; openapi?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; php?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; python?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; ruby?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; sql?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; terraform?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; typescript?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst build = await client.builds.retrieve('buildId');\n\nconsole.log(build);\n```",
  },
  {
    name: 'list',
    endpoint: '/v0/builds',
    httpMethod: 'get',
    summary: 'List project builds',
    description:
      'List user-triggered builds for a given project.\n\nAn optional revision can be specified to filter by config commit SHA, or\nhashes of file contents.',
    stainlessPath: '(resource) builds > (method) list',
    qualified: 'client.builds.list',
    params: [
      'project: string;',
      'branch?: string;',
      'cursor?: string;',
      'limit?: number;',
      'revision?: string | object;',
    ],
    response:
      "{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }",
    markdown:
      "## list\n\n`client.builds.list(project: string, branch?: string, cursor?: string, limit?: number, revision?: string | object): { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }`\n\n**get** `/v0/builds`\n\nList user-triggered builds for a given project.\n\nAn optional revision can be specified to filter by config commit SHA, or\nhashes of file contents.\n\n### Parameters\n\n- `project: string`\n  Project name\n\n- `branch?: string`\n  Branch name\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `limit?: number`\n  Maximum number of builds to return, defaults to 10 (maximum: 100).\n\n- `revision?: string | object`\n  A config commit SHA used for the build\n\n### Returns\n\n- `{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n  - `id: string`\n  - `config_commit: string`\n  - `created_at: string`\n  - `documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }`\n  - `object: 'build'`\n  - `org: string`\n  - `project: string`\n  - `targets: { cli?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; csharp?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; go?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; java?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; kotlin?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; node?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; openapi?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; php?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; python?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; ruby?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; sql?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; terraform?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; typescript?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\n// Automatically fetches more pages as needed.\nfor await (const build of client.builds.list({ project: 'project' })) {\n  console.log(build);\n}\n```",
  },
  {
    name: 'compare',
    endpoint: '/v0/builds/compare',
    httpMethod: 'post',
    summary: 'Creates two comparable builds',
    description:
      'Create two builds whose outputs can be directly compared with each other.\n\nCreated builds _modify_ their project branches so that their latest sets of\nconfig files point to the ones specified by the input revision.\n\nThis endpoint is useful because a build has more inputs than the set of\nconfig files it uses, so comparing two builds directly may return spurious\ndifferences. Builds made via this endpoint are guaranteed to have\ndifferences arising from the set of config files, and any custom code.',
    stainlessPath: '(resource) builds > (method) compare',
    qualified: 'client.builds.compare',
    params: [
      'base: { branch: string; revision: string | object; commit_message?: string; };',
      'head: { branch: string; revision: string | object; commit_message?: string; };',
      'project: string;',
      'targets?: string[];',
    ],
    response:
      "{ base: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; head: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; }",
    markdown:
      "## compare\n\n`client.builds.compare(base: { branch: string; revision: string | object; commit_message?: string; }, head: { branch: string; revision: string | object; commit_message?: string; }, project: string, targets?: string[]): { base: build; head: build; }`\n\n**post** `/v0/builds/compare`\n\nCreate two builds whose outputs can be directly compared with each other.\n\nCreated builds _modify_ their project branches so that their latest sets of\nconfig files point to the ones specified by the input revision.\n\nThis endpoint is useful because a build has more inputs than the set of\nconfig files it uses, so comparing two builds directly may return spurious\ndifferences. Builds made via this endpoint are guaranteed to have\ndifferences arising from the set of config files, and any custom code.\n\n### Parameters\n\n- `base: { branch: string; revision: string | object; commit_message?: string; }`\n  Parameters for the base build\n  - `branch: string`\n    Branch to use. When using a branch name as revision, this must match or be\nomitted.\n  - `revision: string | object`\n    Specifies what to build: a branch name, a commit SHA, or file contents.\n  - `commit_message?: string`\n    Optional commit message to use when creating a new commit.\n\n- `head: { branch: string; revision: string | object; commit_message?: string; }`\n  Parameters for the head build\n  - `branch: string`\n    Branch to use. When using a branch name as revision, this must match or be\nomitted.\n  - `revision: string | object`\n    Specifies what to build: a branch name, a commit SHA, or file contents.\n  - `commit_message?: string`\n    Optional commit message to use when creating a new commit.\n\n- `project: string`\n  Project name\n\n- `targets?: string[]`\n  Optional list of SDK targets to build. If not specified, all configured\ntargets will be built.\n\n### Returns\n\n- `{ base: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; head: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; }`\n\n  - `base: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `head: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst response = await client.builds.compare({\n  base: { branch: 'branch', revision: 'string' },\n  head: { branch: 'branch', revision: 'string' },\n  project: 'project',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v0/builds/{buildId}/diagnostics',
    httpMethod: 'get',
    summary: 'Get diagnostics for a build',
    description:
      'Get the list of diagnostics for a given build.\n\nIf no language targets are specified, diagnostics for all languages are returned.',
    stainlessPath: '(resource) builds.diagnostics > (method) list',
    qualified: 'client.builds.diagnostics.list',
    params: [
      'buildId: string;',
      'cursor?: string;',
      'limit?: number;',
      "severity?: 'fatal' | 'error' | 'warning' | 'note';",
      'targets?: string;',
    ],
    response:
      "{ code: string; ignored: boolean; level: 'fatal' | 'error' | 'warning' | 'note'; message: string; more: { markdown: string; type: 'markdown'; } | { raw: string; type: 'raw'; }; config_ref?: string; oas_ref?: string; }",
    markdown:
      "## list\n\n`client.builds.diagnostics.list(buildId: string, cursor?: string, limit?: number, severity?: 'fatal' | 'error' | 'warning' | 'note', targets?: string): { code: string; ignored: boolean; level: 'fatal' | 'error' | 'warning' | 'note'; message: string; more: build_diagnostic_more; config_ref?: string; oas_ref?: string; }`\n\n**get** `/v0/builds/{buildId}/diagnostics`\n\nGet the list of diagnostics for a given build.\n\nIf no language targets are specified, diagnostics for all languages are returned.\n\n### Parameters\n\n- `buildId: string`\n  Build ID\n\n- `cursor?: string`\n  Pagination cursor from a previous response\n\n- `limit?: number`\n  Maximum number of diagnostics to return, defaults to 100 (maximum: 100)\n\n- `severity?: 'fatal' | 'error' | 'warning' | 'note'`\n  Includes the given severity and above (fatal > error > warning > note).\n\n- `targets?: string`\n  Optional comma-delimited list of language targets to filter diagnostics by\n\n### Returns\n\n- `{ code: string; ignored: boolean; level: 'fatal' | 'error' | 'warning' | 'note'; message: string; more: { markdown: string; type: 'markdown'; } | { raw: string; type: 'raw'; }; config_ref?: string; oas_ref?: string; }`\n\n  - `code: string`\n  - `ignored: boolean`\n  - `level: 'fatal' | 'error' | 'warning' | 'note'`\n  - `message: string`\n  - `more: { markdown: string; type: 'markdown'; } | { raw: string; type: 'raw'; }`\n  - `config_ref?: string`\n  - `oas_ref?: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\n// Automatically fetches more pages as needed.\nfor await (const buildDiagnostic of client.builds.diagnostics.list('buildId')) {\n  console.log(buildDiagnostic);\n}\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/build_target_outputs',
    httpMethod: 'get',
    summary: 'Download build target output',
    description:
      'Retrieve a method to download an output for a given build target.\n\nIf the requested type of output is `source`, and the requested output\nmethod is `url`, a download link to a tarball of the source files is\nreturned. If the requested output method is `git`, a Git remote, ref,\nand access token (if necessary) is returned.\n\nOtherwise, the possible types of outputs are specific to the requested\ntarget, and the output method _must_ be `url`. See the documentation for\n`type` for more information.',
    stainlessPath: '(resource) builds.target_outputs > (method) retrieve',
    qualified: 'client.builds.targetOutputs.retrieve',
    params: [
      'build_id: string;',
      'target: string;',
      'type: string;',
      "output?: 'url' | 'git';",
      'path?: string;',
    ],
    response:
      "{ output: 'url'; target: string; type: string; url: string; path?: string; } | { token: string; output: 'git'; ref: string; target: string; type: string; url: string; }",
    markdown:
      "## retrieve\n\n`client.builds.targetOutputs.retrieve(build_id: string, target: string, type: string, output?: 'url' | 'git', path?: string): { output: 'url'; target: target; type: string; url: string; path?: string; } | { token: string; output: 'git'; ref: string; target: target; type: string; url: string; }`\n\n**get** `/v0/build_target_outputs`\n\nRetrieve a method to download an output for a given build target.\n\nIf the requested type of output is `source`, and the requested output\nmethod is `url`, a download link to a tarball of the source files is\nreturned. If the requested output method is `git`, a Git remote, ref,\nand access token (if necessary) is returned.\n\nOtherwise, the possible types of outputs are specific to the requested\ntarget, and the output method _must_ be `url`. See the documentation for\n`type` for more information.\n\n### Parameters\n\n- `build_id: string`\n  Build ID\n\n- `target: string`\n  SDK language target name\n\n- `type: string`\n\n- `output?: 'url' | 'git'`\n  Output format: url (download URL) or git (temporary access token).\n\n- `path?: string`\n  The path of the file to get when used with \"type\": \"file\".\n\n### Returns\n\n- `{ output: 'url'; target: string; type: string; url: string; path?: string; } | { token: string; output: 'git'; ref: string; target: string; type: string; url: string; }`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst targetOutput = await client.builds.targetOutputs.retrieve({\n  build_id: 'build_id',\n  target: 'node',\n  type: 'source',\n});\n\nconsole.log(targetOutput);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/orgs/{org}',
    httpMethod: 'get',
    summary: 'Retrieve an organization',
    description: 'Retrieve an organization by name.',
    stainlessPath: '(resource) orgs > (method) retrieve',
    qualified: 'client.orgs.retrieve',
    params: ['org: string;'],
    response: "{ display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }",
    markdown:
      "## retrieve\n\n`client.orgs.retrieve(org: string): { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }`\n\n**get** `/v0/orgs/{org}`\n\nRetrieve an organization by name.\n\n### Parameters\n\n- `org: string`\n\n### Returns\n\n- `{ display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }`\n\n  - `display_name: string`\n  - `enable_ai_commit_messages: boolean`\n  - `object: 'org'`\n  - `slug: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst org = await client.orgs.retrieve('org');\n\nconsole.log(org);\n```",
  },
  {
    name: 'list',
    endpoint: '/v0/orgs',
    httpMethod: 'get',
    summary: 'List organizations',
    description: 'List organizations accessible to the current authentication method.',
    stainlessPath: '(resource) orgs > (method) list',
    qualified: 'client.orgs.list',
    response:
      "{ data: { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }[]; has_more: boolean; next_cursor?: string; }",
    markdown:
      "## list\n\n`client.orgs.list(): { data: org[]; has_more: boolean; next_cursor?: string; }`\n\n**get** `/v0/orgs`\n\nList organizations accessible to the current authentication method.\n\n### Returns\n\n- `{ data: { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }[]; has_more: boolean; next_cursor?: string; }`\n\n  - `data: { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst orgs = await client.orgs.list();\n\nconsole.log(orgs);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/user',
    httpMethod: 'get',
    summary: 'Retrieve the current user',
    description: "Retrieve the currently authenticated user's information.",
    stainlessPath: '(resource) user > (method) retrieve',
    qualified: 'client.user.retrieve',
    response: "{ id: string; email: string; github: { username: string; }; name: string; object: 'user'; }",
    markdown:
      "## retrieve\n\n`client.user.retrieve(): { id: string; email: string; github: object; name: string; object: 'user'; }`\n\n**get** `/v0/user`\n\nRetrieve the currently authenticated user's information.\n\n### Returns\n\n- `{ id: string; email: string; github: { username: string; }; name: string; object: 'user'; }`\n\n  - `id: string`\n  - `email: string`\n  - `github: { username: string; }`\n  - `name: string`\n  - `object: 'user'`\n\n### Example\n\n```typescript\nimport Stainless from '@stainless-api/sdk';\n\nconst client = new Stainless();\n\nconst user = await client.user.retrieve();\n\nconsole.log(user);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
