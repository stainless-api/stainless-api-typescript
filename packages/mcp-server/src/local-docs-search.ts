// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
      "## retrieve\n\n`client.projects.retrieve(project: string): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**get** `/v0/projects/{project}`\n\nRetrieve a project by name.\n\n### Parameters\n\n- `project: string`\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst project = await client.projects.retrieve({ project: 'project' });\n\nconsole.log(project);\n```",
    perLanguage: {
      cli: {
        method: 'projects retrieve',
        example: "stl projects retrieve \\\n  --api-key 'My API Key' \\\n  --project project",
      },
      csharp: {
        method: 'Projects.Retrieve',
        example:
          'ProjectRetrieveParams parameters = new() { Project = "project" };\n\nvar project = await client.Projects.Retrieve(parameters);\n\nConsole.WriteLine(project);',
      },
      go: {
        method: 'client.Projects.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproject, err := client.Projects.Get(context.TODO(), stainless.ProjectGetParams{\n\t\tProject: stainless.String("project"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", project.ConfigRepo)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.Project;\nimport com.stainless.api.models.projects.ProjectRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        Project project = client.projects().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'projects().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.Project\nimport com.configure_me_stainless_v0.api.models.projects.ProjectRetrieveParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val project: Project = client.projects().retrieve()\n}',
      },
      php: {
        method: 'projects->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$project = $client->projects->retrieve(project: 'project');\n\nvar_dump($project);",
      },
      python: {
        method: 'projects.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject = client.projects.retrieve(\n    project="project",\n)\nprint(project.config_repo)',
      },
      ruby: {
        method: 'projects.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject = stainless18.projects.retrieve(project: "project")\n\nputs(project)',
      },
      typescript: {
        method: 'client.projects.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.retrieve({ project: 'project' });\n\nconsole.log(project.config_repo);",
      },
    },
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
      "## update\n\n`client.projects.update(project: string, display_name?: string): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**patch** `/v0/projects/{project}`\n\nUpdate a project's properties.\n\n### Parameters\n\n- `project: string`\n\n- `display_name?: string`\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst project = await client.projects.update({ project: 'project' });\n\nconsole.log(project);\n```",
    perLanguage: {
      cli: {
        method: 'projects update',
        example: "stl projects update \\\n  --api-key 'My API Key' \\\n  --project project",
      },
      csharp: {
        method: 'Projects.Update',
        example:
          'ProjectUpdateParams parameters = new() { Project = "project" };\n\nvar project = await client.Projects.Update(parameters);\n\nConsole.WriteLine(project);',
      },
      go: {
        method: 'client.Projects.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproject, err := client.Projects.Update(context.TODO(), stainless.ProjectUpdateParams{\n\t\tProject: stainless.String("project"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", project.ConfigRepo)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT \\\n    -X PATCH \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().update',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.Project;\nimport com.stainless.api.models.projects.ProjectUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        Project project = client.projects().update();\n    }\n}',
      },
      kotlin: {
        method: 'projects().update',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.Project\nimport com.configure_me_stainless_v0.api.models.projects.ProjectUpdateParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val project: Project = client.projects().update()\n}',
      },
      php: {
        method: 'projects->update',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$project = $client->projects->update(\n  project: 'project', displayName: 'display_name'\n);\n\nvar_dump($project);",
      },
      python: {
        method: 'projects.update',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject = client.projects.update(\n    project="project",\n)\nprint(project.config_repo)',
      },
      ruby: {
        method: 'projects.update',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject = stainless18.projects.update(project: "project")\n\nputs(project)',
      },
      typescript: {
        method: 'client.projects.update',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.update({ project: 'project' });\n\nconsole.log(project.config_repo);",
      },
    },
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
      "## list\n\n`client.projects.list(cursor?: string, limit?: number, org?: string): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**get** `/v0/projects`\n\nList projects in an organization, from oldest to newest.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor from a previous response\n\n- `limit?: number`\n  Maximum number of projects to return, defaults to 10 (maximum: 100).\n\n- `org?: string`\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\n// Automatically fetches more pages as needed.\nfor await (const project of client.projects.list()) {\n  console.log(project);\n}\n```",
    perLanguage: {
      cli: {
        method: 'projects list',
        example: "stl projects list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Projects.List',
        example:
          'ProjectListParams parameters = new();\n\nvar page = await client.Projects.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Projects.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Projects.List(context.TODO(), stainless.ProjectListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().list',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.ProjectListPage;\nimport com.stainless.api.models.projects.ProjectListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        ProjectListPage page = client.projects().list();\n    }\n}',
      },
      kotlin: {
        method: 'projects().list',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.ProjectListPage\nimport com.configure_me_stainless_v0.api.models.projects.ProjectListParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val page: ProjectListPage = client.projects().list()\n}',
      },
      php: {
        method: 'projects->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$page = $client->projects->list(cursor: 'cursor', limit: 1, org: 'org');\n\nvar_dump($page);",
      },
      python: {
        method: 'projects.list',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\npage = client.projects.list()\npage = page.data[0]\nprint(page.config_repo)',
      },
      ruby: {
        method: 'projects.list',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\npage = stainless18.projects.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.projects.list',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const project of client.projects.list()) {\n  console.log(project.config_repo);\n}",
      },
    },
  },
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
      "## create\n\n`client.projects.create(display_name: string, org: string, revision: object, slug: string, targets: string[]): { config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: target[]; }`\n\n**post** `/v0/projects`\n\nCreate a new project.\n\n### Parameters\n\n- `display_name: string`\n  Human-readable project name\n\n- `org: string`\n  Organization name\n\n- `revision: object`\n  File contents to commit\n\n- `slug: string`\n  Project name/slug\n\n- `targets: string[]`\n  Targets to generate for\n\n### Returns\n\n- `{ config_repo: string; display_name: string; object: 'project'; org: string; slug: string; targets: string[]; }`\n  A project is a collection of SDKs generated from the same set of config files.\n\n  - `config_repo: string`\n  - `display_name: string`\n  - `object: 'project'`\n  - `org: string`\n  - `slug: string`\n  - `targets: string[]`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst project = await client.projects.create({\n  display_name: 'display_name',\n  org: 'org',\n  revision: { foo: { content: 'content' } },\n  slug: 'slug',\n  targets: ['node'],\n});\n\nconsole.log(project);\n```",
    perLanguage: {
      cli: {
        method: 'projects create',
        example:
          "stl projects create \\\n  --api-key 'My API Key' \\\n  --display-name display_name \\\n  --org org \\\n  --revision '{foo: {content: content}}' \\\n  --slug slug \\\n  --target node",
      },
      csharp: {
        method: 'Projects.Create',
        example:
          'ProjectCreateParams parameters = new()\n{\n    DisplayName = "display_name",\n    Org = "org",\n    Revision = new Dictionary<string, FileInput>()\n    {\n        { "foo", new Content("content") }\n    },\n    Slug = "slug",\n    Targets =\n    [\n        Target.Node\n    ],\n};\n\nvar project = await client.Projects.Create(parameters);\n\nConsole.WriteLine(project);',
      },
      go: {
        method: 'client.Projects.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n\t"github.com/stainless-api/stainless-api-go/shared"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproject, err := client.Projects.New(context.TODO(), stainless.ProjectNewParams{\n\t\tDisplayName: "display_name",\n\t\tOrg:         "org",\n\t\tRevision: map[string]shared.FileInputUnionParam{\n\t\t\t"foo": {\n\t\t\t\tOfFileInputContent: &shared.FileInputContentParam{\n\t\t\t\t\tContent: "content",\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t\tSlug:    "slug",\n\t\tTargets: []shared.Target{shared.TargetNode},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", project.ConfigRepo)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY" \\\n    -d \'{\n          "display_name": "display_name",\n          "org": "org",\n          "revision": {\n            "foo": {\n              "content": "content"\n            }\n          },\n          "slug": "slug",\n          "targets": [\n            "node"\n          ]\n        }\'',
      },
      java: {
        method: 'projects().create',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.core.JsonValue;\nimport com.stainless.api.models.Target;\nimport com.stainless.api.models.projects.Project;\nimport com.stainless.api.models.projects.ProjectCreateParams;\nimport java.util.Map;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        ProjectCreateParams params = ProjectCreateParams.builder()\n            .displayName("display_name")\n            .org("org")\n            .revision(ProjectCreateParams.Revision.builder()\n                .putAdditionalProperty("foo", JsonValue.from(Map.of(\n                  "content", "content"\n                )))\n                .build())\n            .slug("slug")\n            .addTarget(Target.NODE)\n            .build();\n        Project project = client.projects().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'projects().create',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.core.JsonValue\nimport com.configure_me_stainless_v0.api.models.Target\nimport com.configure_me_stainless_v0.api.models.projects.Project\nimport com.configure_me_stainless_v0.api.models.projects.ProjectCreateParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val params: ProjectCreateParams = ProjectCreateParams.builder()\n        .displayName("display_name")\n        .org("org")\n        .revision(ProjectCreateParams.Revision.builder()\n            .putAdditionalProperty("foo", JsonValue.from(mapOf("content" to "content")))\n            .build())\n        .slug("slug")\n        .addTarget(Target.NODE)\n        .build()\n    val project: Project = client.projects().create(params)\n}',
      },
      php: {
        method: 'projects->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$project = $client->projects->create(\n  displayName: 'display_name',\n  org: 'org',\n  revision: ['foo' => ['content' => 'content']],\n  slug: 'slug',\n  targets: [Target::NODE],\n);\n\nvar_dump($project);",
      },
      python: {
        method: 'projects.create',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject = client.projects.create(\n    display_name="display_name",\n    org="org",\n    revision={\n        "foo": {\n            "content": "content"\n        }\n    },\n    slug="slug",\n    targets=["node"],\n)\nprint(project.config_repo)',
      },
      ruby: {
        method: 'projects.create',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject = stainless18.projects.create(\n  display_name: "display_name",\n  org: "org",\n  revision: {foo: {content: "content"}},\n  slug: "slug",\n  targets: [:node]\n)\n\nputs(project)',
      },
      typescript: {
        method: 'client.projects.create',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.create({\n  display_name: 'display_name',\n  org: 'org',\n  revision: { foo: { content: 'content' } },\n  slug: 'slug',\n  targets: ['node'],\n});\n\nconsole.log(project.config_repo);",
      },
    },
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
      "## generate_commit_message\n\n`client.projects.generateCommitMessage(project: string, target: string, base_ref: string, head_ref: string): { ai_commit_message: string; }`\n\n**post** `/v0/projects/{project}/generate_commit_message`\n\nGenerates an AI commit message by comparing two git refs in the SDK repository.\n\n### Parameters\n\n- `project: string`\n\n- `target: string`\n  Language target\n\n- `base_ref: string`\n  Base ref for comparison\n\n- `head_ref: string`\n  Head ref for comparison\n\n### Returns\n\n- `{ ai_commit_message: string; }`\n\n  - `ai_commit_message: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst response = await client.projects.generateCommitMessage({\n  project: 'project',\n  target: 'python',\n  base_ref: 'base_ref',\n  head_ref: 'head_ref',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'projects generate_commit_message',
        example:
          "stl projects generate-commit-message \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --target python \\\n  --base-ref base_ref \\\n  --head-ref head_ref",
      },
      csharp: {
        method: 'Projects.GenerateCommitMessage',
        example:
          'ProjectGenerateCommitMessageParams parameters = new()\n{\n    Project = "project",\n    Target = Target.Python,\n    BaseRef = "base_ref",\n    HeadRef = "head_ref",\n};\n\nvar response = await client.Projects.GenerateCommitMessage(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Projects.GenerateCommitMessage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Projects.GenerateCommitMessage(context.TODO(), stainless.ProjectGenerateCommitMessageParams{\n\t\tProject: stainless.String("project"),\n\t\tTarget:  stainless.ProjectGenerateCommitMessageParamsTargetPython,\n\t\tBaseRef: "base_ref",\n\t\tHeadRef: "head_ref",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AICommitMessage)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/generate_commit_message \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY" \\\n    -d \'{\n          "base_ref": "base_ref",\n          "head_ref": "head_ref"\n        }\'',
      },
      java: {
        method: 'projects().generateCommitMessage',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.ProjectGenerateCommitMessageParams;\nimport com.stainless.api.models.projects.ProjectGenerateCommitMessageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        ProjectGenerateCommitMessageParams params = ProjectGenerateCommitMessageParams.builder()\n            .target(ProjectGenerateCommitMessageParams.Target.PYTHON)\n            .baseRef("base_ref")\n            .headRef("head_ref")\n            .build();\n        ProjectGenerateCommitMessageResponse response = client.projects().generateCommitMessage(params);\n    }\n}',
      },
      kotlin: {
        method: 'projects().generateCommitMessage',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.ProjectGenerateCommitMessageParams\nimport com.configure_me_stainless_v0.api.models.projects.ProjectGenerateCommitMessageResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val params: ProjectGenerateCommitMessageParams = ProjectGenerateCommitMessageParams.builder()\n        .target(ProjectGenerateCommitMessageParams.Target.PYTHON)\n        .baseRef("base_ref")\n        .headRef("head_ref")\n        .build()\n    val response: ProjectGenerateCommitMessageResponse = client.projects().generateCommitMessage(params)\n}',
      },
      php: {
        method: 'projects->generateCommitMessage',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$response = $client->projects->generateCommitMessage(\n  project: 'project', target: 'python', baseRef: 'base_ref', headRef: 'head_ref'\n);\n\nvar_dump($response);",
      },
      python: {
        method: 'projects.generate_commit_message',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.projects.generate_commit_message(\n    project="project",\n    target="python",\n    base_ref="base_ref",\n    head_ref="head_ref",\n)\nprint(response.ai_commit_message)',
      },
      ruby: {
        method: 'projects.generate_commit_message',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresponse = stainless18.projects.generate_commit_message(\n  project: "project",\n  target: :python,\n  base_ref: "base_ref",\n  head_ref: "head_ref"\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.projects.generateCommitMessage',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.projects.generateCommitMessage({\n  project: 'project',\n  target: 'python',\n  base_ref: 'base_ref',\n  head_ref: 'head_ref',\n});\n\nconsole.log(response.ai_commit_message);",
      },
    },
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
      "## create\n\n`client.projects.branches.create(project: string, branch: string, branch_from: string, force?: boolean): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**post** `/v0/projects/{project}/branches`\n\nCreate a new branch for a project.\n\nThe branch inherits the config files from the revision pointed to by the\n`branch_from` parameter. In addition, if the revision is a branch name,\nthe branch will also inherit custom code changes from that branch.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n  Branch name\n\n- `branch_from: string`\n  Branch or commit SHA to branch from\n\n- `force?: boolean`\n  Whether to throw an error if the branch already exists. Defaults to false.\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst projectBranch = await client.projects.branches.create({\n  project: 'project',\n  branch: 'branch',\n  branch_from: 'branch_from',\n});\n\nconsole.log(projectBranch);\n```",
    perLanguage: {
      cli: {
        method: 'branches create',
        example:
          "stl projects:branches create \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --branch branch \\\n  --branch-from branch_from",
      },
      csharp: {
        method: 'Projects.Branches.Create',
        example:
          'BranchCreateParams parameters = new()\n{\n    Project = "project",\n    Branch = "branch",\n    BranchFrom = "branch_from",\n};\n\nvar projectBranch = await client.Projects.Branches.Create(parameters);\n\nConsole.WriteLine(projectBranch);',
      },
      go: {
        method: 'client.Projects.Branches.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprojectBranch, err := client.Projects.Branches.New(context.TODO(), stainless.ProjectBranchNewParams{\n\t\tProject:    stainless.String("project"),\n\t\tBranch:     "branch",\n\t\tBranchFrom: "branch_from",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", projectBranch.Branch)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/branches \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY" \\\n    -d \'{\n          "branch": "branch",\n          "branch_from": "branch_from"\n        }\'',
      },
      java: {
        method: 'projects().branches().create',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.branches.BranchCreateParams;\nimport com.stainless.api.models.projects.branches.ProjectBranch;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        BranchCreateParams params = BranchCreateParams.builder()\n            .branch("branch")\n            .branchFrom("branch_from")\n            .build();\n        ProjectBranch projectBranch = client.projects().branches().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'projects().branches().create',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchCreateParams\nimport com.configure_me_stainless_v0.api.models.projects.branches.ProjectBranch\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val params: BranchCreateParams = BranchCreateParams.builder()\n        .branch("branch")\n        .branchFrom("branch_from")\n        .build()\n    val projectBranch: ProjectBranch = client.projects().branches().create(params)\n}',
      },
      php: {
        method: 'projects->branches->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$projectBranch = $client->projects->branches->create(\n  project: 'project', branch: 'branch', branchFrom: 'branch_from', force: true\n);\n\nvar_dump($projectBranch);",
      },
      python: {
        method: 'projects.branches.create',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject_branch = client.projects.branches.create(\n    project="project",\n    branch="branch",\n    branch_from="branch_from",\n)\nprint(project_branch.branch)',
      },
      ruby: {
        method: 'projects.branches.create',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject_branch = stainless18.projects.branches.create(project: "project", branch: "branch", branch_from: "branch_from")\n\nputs(project_branch)',
      },
      typescript: {
        method: 'client.projects.branches.create',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst projectBranch = await client.projects.branches.create({\n  project: 'project',\n  branch: 'branch',\n  branch_from: 'branch_from',\n});\n\nconsole.log(projectBranch.branch);",
      },
    },
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
      "## retrieve\n\n`client.projects.branches.retrieve(project: string, branch: string): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**get** `/v0/projects/{project}/branches/{branch}`\n\nRetrieve a project branch by name.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst projectBranch = await client.projects.branches.retrieve('branch', { project: 'project' });\n\nconsole.log(projectBranch);\n```",
    perLanguage: {
      cli: {
        method: 'branches retrieve',
        example:
          "stl projects:branches retrieve \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --branch branch",
      },
      csharp: {
        method: 'Projects.Branches.Retrieve',
        example:
          'BranchRetrieveParams parameters = new()\n{\n    Project = "project",\n    Branch = "branch",\n};\n\nvar projectBranch = await client.Projects.Branches.Retrieve(parameters);\n\nConsole.WriteLine(projectBranch);',
      },
      go: {
        method: 'client.Projects.Branches.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprojectBranch, err := client.Projects.Branches.Get(\n\t\tcontext.TODO(),\n\t\t"branch",\n\t\tstainless.ProjectBranchGetParams{\n\t\t\tProject: stainless.String("project"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", projectBranch.Branch)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/branches/$BRANCH \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().branches().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.branches.BranchRetrieveParams;\nimport com.stainless.api.models.projects.branches.ProjectBranch;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        ProjectBranch projectBranch = client.projects().branches().retrieve("branch");\n    }\n}',
      },
      kotlin: {
        method: 'projects().branches().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchRetrieveParams\nimport com.configure_me_stainless_v0.api.models.projects.branches.ProjectBranch\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val projectBranch: ProjectBranch = client.projects().branches().retrieve("branch")\n}',
      },
      php: {
        method: 'projects->branches->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$projectBranch = $client->projects->branches->retrieve(\n  'branch', project: 'project'\n);\n\nvar_dump($projectBranch);",
      },
      python: {
        method: 'projects.branches.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject_branch = client.projects.branches.retrieve(\n    branch="branch",\n    project="project",\n)\nprint(project_branch.branch)',
      },
      ruby: {
        method: 'projects.branches.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject_branch = stainless18.projects.branches.retrieve("branch", project: "project")\n\nputs(project_branch)',
      },
      typescript: {
        method: 'client.projects.branches.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst projectBranch = await client.projects.branches.retrieve('branch', { project: 'project' });\n\nconsole.log(projectBranch.branch);",
      },
    },
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
      "## list\n\n`client.projects.branches.list(project: string, cursor?: string, limit?: number): { branch: string; config_commit: object; latest_build_id: string; object: 'project_branch'; org: string; project: string; }`\n\n**get** `/v0/projects/{project}/branches`\n\nRetrieve a project branch by name.\n\n### Parameters\n\n- `project: string`\n\n- `cursor?: string`\n  Pagination cursor from a previous response\n\n- `limit?: number`\n  Maximum number of items to return, defaults to 10 (maximum: 100).\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build_id: string; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build_id: string`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\n// Automatically fetches more pages as needed.\nfor await (const branchListResponse of client.projects.branches.list({ project: 'project' })) {\n  console.log(branchListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'branches list',
        example: "stl projects:branches list \\\n  --api-key 'My API Key' \\\n  --project project",
      },
      csharp: {
        method: 'Projects.Branches.List',
        example:
          'BranchListParams parameters = new() { Project = "project" };\n\nvar page = await client.Projects.Branches.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Projects.Branches.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Projects.Branches.List(context.TODO(), stainless.ProjectBranchListParams{\n\t\tProject: stainless.String("project"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/branches \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().branches().list',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.branches.BranchListPage;\nimport com.stainless.api.models.projects.branches.BranchListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        BranchListPage page = client.projects().branches().list();\n    }\n}',
      },
      kotlin: {
        method: 'projects().branches().list',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchListPage\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchListParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val page: BranchListPage = client.projects().branches().list()\n}',
      },
      php: {
        method: 'projects->branches->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$page = $client->projects->branches->list(\n  project: 'project', cursor: 'cursor', limit: 1\n);\n\nvar_dump($page);",
      },
      python: {
        method: 'projects.branches.list',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\npage = client.projects.branches.list(\n    project="project",\n)\npage = page.data[0]\nprint(page.latest_build_id)',
      },
      ruby: {
        method: 'projects.branches.list',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\npage = stainless18.projects.branches.list(project: "project")\n\nputs(page)',
      },
      typescript: {
        method: 'client.projects.branches.list',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const branchListResponse of client.projects.branches.list({ project: 'project' })) {\n  console.log(branchListResponse.latest_build_id);\n}",
      },
    },
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
      "## delete\n\n`client.projects.branches.delete(project: string, branch: string): object`\n\n**delete** `/v0/projects/{project}/branches/{branch}`\n\nDelete a project branch by name.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst branch = await client.projects.branches.delete('branch', { project: 'project' });\n\nconsole.log(branch);\n```",
    perLanguage: {
      cli: {
        method: 'branches delete',
        example:
          "stl projects:branches delete \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --branch branch",
      },
      csharp: {
        method: 'Projects.Branches.Delete',
        example:
          'BranchDeleteParams parameters = new()\n{\n    Project = "project",\n    Branch = "branch",\n};\n\nvar branch = await client.Projects.Branches.Delete(parameters);\n\nConsole.WriteLine(branch);',
      },
      go: {
        method: 'client.Projects.Branches.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbranch, err := client.Projects.Branches.Delete(\n\t\tcontext.TODO(),\n\t\t"branch",\n\t\tstainless.ProjectBranchDeleteParams{\n\t\t\tProject: stainless.String("project"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", branch)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/branches/$BRANCH \\\n    -X DELETE \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().branches().delete',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.branches.BranchDeleteParams;\nimport com.stainless.api.models.projects.branches.BranchDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        BranchDeleteResponse branch = client.projects().branches().delete("branch");\n    }\n}',
      },
      kotlin: {
        method: 'projects().branches().delete',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchDeleteParams\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchDeleteResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val branch: BranchDeleteResponse = client.projects().branches().delete("branch")\n}',
      },
      php: {
        method: 'projects->branches->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$branch = $client->projects->branches->delete('branch', project: 'project');\n\nvar_dump($branch);",
      },
      python: {
        method: 'projects.branches.delete',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nbranch = client.projects.branches.delete(\n    branch="branch",\n    project="project",\n)\nprint(branch)',
      },
      ruby: {
        method: 'projects.branches.delete',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nbranch = stainless18.projects.branches.delete("branch", project: "project")\n\nputs(branch)',
      },
      typescript: {
        method: 'client.projects.branches.delete',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst branch = await client.projects.branches.delete('branch', { project: 'project' });\n\nconsole.log(branch);",
      },
    },
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
      "## rebase\n\n`client.projects.branches.rebase(project: string, branch: string, base?: string): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**put** `/v0/projects/{project}/branches/{branch}/rebase`\n\nRebase a project branch.\n\nThe branch is rebased onto the `base` branch or commit SHA, inheriting\nany config and custom code changes.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n- `base?: string`\n  The branch or commit SHA to rebase onto. Defaults to \"main\".\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst projectBranch = await client.projects.branches.rebase('branch', { project: 'project' });\n\nconsole.log(projectBranch);\n```",
    perLanguage: {
      cli: {
        method: 'branches rebase',
        example:
          "stl projects:branches rebase \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --branch branch",
      },
      csharp: {
        method: 'Projects.Branches.Rebase',
        example:
          'BranchRebaseParams parameters = new()\n{\n    Project = "project",\n    Branch = "branch",\n};\n\nvar projectBranch = await client.Projects.Branches.Rebase(parameters);\n\nConsole.WriteLine(projectBranch);',
      },
      go: {
        method: 'client.Projects.Branches.Rebase',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprojectBranch, err := client.Projects.Branches.Rebase(\n\t\tcontext.TODO(),\n\t\t"branch",\n\t\tstainless.ProjectBranchRebaseParams{\n\t\t\tProject: stainless.String("project"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", projectBranch.Branch)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/branches/$BRANCH/rebase \\\n    -X PUT \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().branches().rebase',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.branches.BranchRebaseParams;\nimport com.stainless.api.models.projects.branches.ProjectBranch;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        ProjectBranch projectBranch = client.projects().branches().rebase("branch");\n    }\n}',
      },
      kotlin: {
        method: 'projects().branches().rebase',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchRebaseParams\nimport com.configure_me_stainless_v0.api.models.projects.branches.ProjectBranch\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val projectBranch: ProjectBranch = client.projects().branches().rebase("branch")\n}',
      },
      php: {
        method: 'projects->branches->rebase',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$projectBranch = $client->projects->branches->rebase(\n  'branch', project: 'project', base: 'base'\n);\n\nvar_dump($projectBranch);",
      },
      python: {
        method: 'projects.branches.rebase',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject_branch = client.projects.branches.rebase(\n    branch="branch",\n    project="project",\n)\nprint(project_branch.branch)',
      },
      ruby: {
        method: 'projects.branches.rebase',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject_branch = stainless18.projects.branches.rebase("branch", project: "project")\n\nputs(project_branch)',
      },
      typescript: {
        method: 'client.projects.branches.rebase',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst projectBranch = await client.projects.branches.rebase('branch', { project: 'project' });\n\nconsole.log(projectBranch.branch);",
      },
    },
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
      "## reset\n\n`client.projects.branches.reset(project: string, branch: string, target_config_sha?: string): { branch: string; config_commit: object; latest_build: build; object: 'project_branch'; org: string; project: string; }`\n\n**put** `/v0/projects/{project}/branches/{branch}/reset`\n\nReset a project branch.\n\nIf `branch` === `main`, the branch is reset to `target_config_sha`. Otherwise, the\nbranch is reset to `main`.\n\n### Parameters\n\n- `project: string`\n\n- `branch: string`\n\n- `target_config_sha?: string`\n  The commit SHA to reset the main branch to. Required if resetting the main branch; disallowed otherwise.\n\n### Returns\n\n- `{ branch: string; config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }; latest_build: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; object: 'project_branch'; org: string; project: string; }`\n  A project branch names a line of development for a project. Like a Git\nbranch, it points to a Git commit with a set of config files. In addition, a\nproject branch also points to a set of custom code changes, corresponding to\nGit branches in the staging repos.\n\n  - `branch: string`\n  - `config_commit: { repo: { branch: string; host: string; name: string; owner: string; }; sha: string; stats: { additions: number; deletions: number; total: number; }; tree_oid: string; }`\n  - `latest_build: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `object: 'project_branch'`\n  - `org: string`\n  - `project: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst projectBranch = await client.projects.branches.reset('branch', { project: 'project' });\n\nconsole.log(projectBranch);\n```",
    perLanguage: {
      cli: {
        method: 'branches reset',
        example:
          "stl projects:branches reset \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --branch branch",
      },
      csharp: {
        method: 'Projects.Branches.Reset',
        example:
          'BranchResetParams parameters = new()\n{\n    Project = "project",\n    Branch = "branch",\n};\n\nvar projectBranch = await client.Projects.Branches.Reset(parameters);\n\nConsole.WriteLine(projectBranch);',
      },
      go: {
        method: 'client.Projects.Branches.Reset',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprojectBranch, err := client.Projects.Branches.Reset(\n\t\tcontext.TODO(),\n\t\t"branch",\n\t\tstainless.ProjectBranchResetParams{\n\t\t\tProject: stainless.String("project"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", projectBranch.Branch)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/branches/$BRANCH/reset \\\n    -X PUT \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().branches().reset',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.branches.BranchResetParams;\nimport com.stainless.api.models.projects.branches.ProjectBranch;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        ProjectBranch projectBranch = client.projects().branches().reset("branch");\n    }\n}',
      },
      kotlin: {
        method: 'projects().branches().reset',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.branches.BranchResetParams\nimport com.configure_me_stainless_v0.api.models.projects.branches.ProjectBranch\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val projectBranch: ProjectBranch = client.projects().branches().reset("branch")\n}',
      },
      php: {
        method: 'projects->branches->reset',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$projectBranch = $client->projects->branches->reset(\n  'branch', project: 'project', targetConfigSha: 'target_config_sha'\n);\n\nvar_dump($projectBranch);",
      },
      python: {
        method: 'projects.branches.reset',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nproject_branch = client.projects.branches.reset(\n    branch="branch",\n    project="project",\n)\nprint(project_branch.branch)',
      },
      ruby: {
        method: 'projects.branches.reset',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproject_branch = stainless18.projects.branches.reset("branch", project: "project")\n\nputs(project_branch)',
      },
      typescript: {
        method: 'client.projects.branches.reset',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst projectBranch = await client.projects.branches.reset('branch', { project: 'project' });\n\nconsole.log(projectBranch.branch);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v0/projects/{project}/configs',
    httpMethod: 'get',
    summary: 'Retrieve configuration files',
    description: '\n    Retrieve the configuration files for a given project.\n  ',
    stainlessPath: '(resource) projects.configs > (method) retrieve',
    qualified: 'client.projects.configs.retrieve',
    params: ['project: string;', 'branch?: string;', 'include?: string;'],
    response: 'object',
    markdown:
      "## retrieve\n\n`client.projects.configs.retrieve(project: string, branch?: string, include?: string): object`\n\n**get** `/v0/projects/{project}/configs`\n\n\n    Retrieve the configuration files for a given project.\n  \n\n### Parameters\n\n- `project: string`\n\n- `branch?: string`\n  Branch name, defaults to \"main\".\n\n- `include?: string`\n\n### Returns\n\n- `object`\n  Config files contents\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst config = await client.projects.configs.retrieve({ project: 'project' });\n\nconsole.log(config);\n```",
    perLanguage: {
      cli: {
        method: 'configs retrieve',
        example: "stl projects:configs retrieve \\\n  --api-key 'My API Key' \\\n  --project project",
      },
      csharp: {
        method: 'Projects.Configs.Retrieve',
        example:
          'ConfigRetrieveParams parameters = new() { Project = "project" };\n\nvar config = await client.Projects.Configs.Retrieve(parameters);\n\nConsole.WriteLine(config);',
      },
      go: {
        method: 'client.Projects.Configs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tconfig, err := client.Projects.Configs.Get(context.TODO(), stainless.ProjectConfigGetParams{\n\t\tProject: stainless.String("project"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", config)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/configs \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'projects().configs().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.configs.ConfigRetrieveParams;\nimport com.stainless.api.models.projects.configs.ConfigRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        ConfigRetrieveResponse config = client.projects().configs().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'projects().configs().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.configs.ConfigRetrieveParams\nimport com.configure_me_stainless_v0.api.models.projects.configs.ConfigRetrieveResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val config: ConfigRetrieveResponse = client.projects().configs().retrieve()\n}',
      },
      php: {
        method: 'projects->configs->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$config = $client->projects->configs->retrieve(\n  project: 'project', branch: 'branch', include: 'include'\n);\n\nvar_dump($config);",
      },
      python: {
        method: 'projects.configs.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nconfig = client.projects.configs.retrieve(\n    project="project",\n)\nprint(config)',
      },
      ruby: {
        method: 'projects.configs.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nconfig = stainless18.projects.configs.retrieve(project: "project")\n\nputs(config)',
      },
      typescript: {
        method: 'client.projects.configs.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst config = await client.projects.configs.retrieve({ project: 'project' });\n\nconsole.log(config);",
      },
    },
  },
  {
    name: 'guess',
    endpoint: '/v0/projects/{project}/configs/guess',
    httpMethod: 'post',
    summary: 'Generate config suggestions',
    description: '\n    Generate suggestions for changes to config files based on an OpenAPI spec.\n  ',
    stainlessPath: '(resource) projects.configs > (method) guess',
    qualified: 'client.projects.configs.guess',
    params: ['project: string;', 'spec: string;', 'branch?: string;'],
    response: 'object',
    markdown:
      "## guess\n\n`client.projects.configs.guess(project: string, spec: string, branch?: string): object`\n\n**post** `/v0/projects/{project}/configs/guess`\n\n\n    Generate suggestions for changes to config files based on an OpenAPI spec.\n  \n\n### Parameters\n\n- `project: string`\n\n- `spec: string`\n  OpenAPI spec\n\n- `branch?: string`\n  Branch name\n\n### Returns\n\n- `object`\n  Config files contents\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst response = await client.projects.configs.guess({ project: 'project', spec: 'spec' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'configs guess',
        example:
          "stl projects:configs guess \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --spec spec",
      },
      csharp: {
        method: 'Projects.Configs.Guess',
        example:
          'ConfigGuessParams parameters = new()\n{\n    Project = "project",\n    Spec = "spec",\n};\n\nvar response = await client.Projects.Configs.Guess(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Projects.Configs.Guess',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Projects.Configs.Guess(context.TODO(), stainless.ProjectConfigGuessParams{\n\t\tProject: stainless.String("project"),\n\t\tSpec:    "spec",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/projects/$PROJECT/configs/guess \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY" \\\n    -d \'{\n          "spec": "spec"\n        }\'',
      },
      java: {
        method: 'projects().configs().guess',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.projects.configs.ConfigGuessParams;\nimport com.stainless.api.models.projects.configs.ConfigGuessResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        ConfigGuessParams params = ConfigGuessParams.builder()\n            .spec("spec")\n            .build();\n        ConfigGuessResponse response = client.projects().configs().guess(params);\n    }\n}',
      },
      kotlin: {
        method: 'projects().configs().guess',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.projects.configs.ConfigGuessParams\nimport com.configure_me_stainless_v0.api.models.projects.configs.ConfigGuessResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val params: ConfigGuessParams = ConfigGuessParams.builder()\n        .spec("spec")\n        .build()\n    val response: ConfigGuessResponse = client.projects().configs().guess(params)\n}',
      },
      php: {
        method: 'projects->configs->guess',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$response = $client->projects->configs->guess(\n  project: 'project', spec: 'spec', branch: 'branch'\n);\n\nvar_dump($response);",
      },
      python: {
        method: 'projects.configs.guess',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.projects.configs.guess(\n    project="project",\n    spec="spec",\n)\nprint(response)',
      },
      ruby: {
        method: 'projects.configs.guess',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresponse = stainless18.projects.configs.guess(project: "project", spec: "spec")\n\nputs(response)',
      },
      typescript: {
        method: 'client.projects.configs.guess',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.projects.configs.guess({ project: 'project', spec: 'spec' });\n\nconsole.log(response);",
      },
    },
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
      "## list\n\n`client.builds.list(project: string, branch?: string, cursor?: string, limit?: number, revision?: string | object): { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }`\n\n**get** `/v0/builds`\n\nList user-triggered builds for a given project.\n\nAn optional revision can be specified to filter by config commit SHA, or\nhashes of file contents.\n\n### Parameters\n\n- `project: string`\n  Project name\n\n- `branch?: string`\n  Branch name\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `limit?: number`\n  Maximum number of builds to return, defaults to 10 (maximum: 100).\n\n- `revision?: string | object`\n  A config commit SHA used for the build\n\n### Returns\n\n- `{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n  - `id: string`\n  - `config_commit: string`\n  - `created_at: string`\n  - `documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }`\n  - `object: 'build'`\n  - `org: string`\n  - `project: string`\n  - `targets: { cli?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; csharp?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; go?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; java?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; kotlin?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; node?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; openapi?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; php?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; python?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; ruby?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; sql?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; terraform?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; typescript?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\n// Automatically fetches more pages as needed.\nfor await (const build of client.builds.list({ project: 'project' })) {\n  console.log(build);\n}\n```",
    perLanguage: {
      cli: {
        method: 'builds list',
        example: "stl builds list \\\n  --api-key 'My API Key' \\\n  --project project",
      },
      csharp: {
        method: 'Builds.List',
        example:
          'BuildListParams parameters = new() { Project = "project" };\n\nvar page = await client.Builds.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Builds.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Builds.List(context.TODO(), stainless.BuildListParams{\n\t\tProject: stainless.String("project"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/builds \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'builds().list',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.BuildListPage;\nimport com.stainless.api.models.builds.BuildListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.builder()\n            .fromEnv()\n            .project("example-project")\n            .build();\n\n        BuildListPage page = client.builds().list();\n    }\n}',
      },
      kotlin: {
        method: 'builds().list',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.BuildListPage\nimport com.configure_me_stainless_v0.api.models.builds.BuildListParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.builder()\n        .fromEnv()\n        .project("example-project")\n        .build()\n\n    val page: BuildListPage = client.builds().list()\n}',
      },
      php: {
        method: 'builds->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$page = $client->builds->list(\n  project: 'project',\n  branch: 'branch',\n  cursor: 'cursor',\n  limit: 1,\n  revision: 'string',\n);\n\nvar_dump($page);",
      },
      python: {
        method: 'builds.list',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\npage = client.builds.list(\n    project="project",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'builds.list',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\npage = stainless18.builds.list(project: "project")\n\nputs(page)',
      },
      typescript: {
        method: 'client.builds.list',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const build of client.builds.list({ project: 'project' })) {\n  console.log(build.id);\n}",
      },
    },
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
      "## create\n\n`client.builds.create(project: string, revision: string | object, allow_empty?: boolean, branch?: string, commit_message?: string, enable_ai_commit_message?: boolean, target_commit_messages?: { cli?: string; csharp?: string; go?: string; java?: string; kotlin?: string; node?: string; openapi?: string; php?: string; python?: string; ruby?: string; sql?: string; terraform?: string; typescript?: string; }, targets?: string[]): { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }`\n\n**post** `/v0/builds`\n\nCreate a build, on top of a project branch, against a given input revision.\n\nThe project branch will be modified so that its latest set of config files\npoints to the one specified by the input revision.\n\n### Parameters\n\n- `project: string`\n  Project name\n\n- `revision: string | object`\n  Specifies what to build: a branch name, commit SHA, merge command\n(\"base..head\"), or file contents.\n\n- `allow_empty?: boolean`\n  Whether to allow empty commits (no changes). Defaults to false.\n\n- `branch?: string`\n  The project branch to use for the build. If not specified, the\nbranch is inferred from the `revision`, and will 400 when that\nis not possible.\n\n- `commit_message?: string`\n  Optional commit message to use when creating a new commit.\n\n- `enable_ai_commit_message?: boolean`\n  Whether to generate AI-powered commit messages for the build.\nCannot be combined with `commit_message` or `target_commit_messages`.\n\n- `target_commit_messages?: { cli?: string; csharp?: string; go?: string; java?: string; kotlin?: string; node?: string; openapi?: string; php?: string; python?: string; ruby?: string; sql?: string; terraform?: string; typescript?: string; }`\n  Optional commit messages to use for each SDK when making a new commit.\nSDKs not represented in this object will fallback to the optional\n`commit_message` parameter, or will fallback further to the default\ncommit message.\n  - `cli?: string`\n  - `csharp?: string`\n  - `go?: string`\n  - `java?: string`\n  - `kotlin?: string`\n  - `node?: string`\n  - `openapi?: string`\n  - `php?: string`\n  - `python?: string`\n  - `ruby?: string`\n  - `sql?: string`\n  - `terraform?: string`\n  - `typescript?: string`\n\n- `targets?: string[]`\n  Optional list of SDK targets to build. If not specified, all configured\ntargets will be built.\n\n### Returns\n\n- `{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n  - `id: string`\n  - `config_commit: string`\n  - `created_at: string`\n  - `documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }`\n  - `object: 'build'`\n  - `org: string`\n  - `project: string`\n  - `targets: { cli?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; csharp?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; go?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; java?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; kotlin?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; node?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; openapi?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; php?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; python?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; ruby?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; sql?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; terraform?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; typescript?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst build = await client.builds.create({ project: 'project', revision: 'string' });\n\nconsole.log(build);\n```",
    perLanguage: {
      cli: {
        method: 'builds create',
        example:
          "stl builds create \\\n  --api-key 'My API Key' \\\n  --project project \\\n  --revision string",
      },
      csharp: {
        method: 'Builds.Create',
        example:
          'BuildCreateParams parameters = new()\n{\n    Project = "project",\n    Revision = "string",\n};\n\nvar build = await client.Builds.Create(parameters);\n\nConsole.WriteLine(build);',
      },
      go: {
        method: 'client.Builds.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbuild, err := client.Builds.New(context.TODO(), stainless.BuildNewParams{\n\t\tProject: stainless.String("project"),\n\t\tRevision: stainless.BuildNewParamsRevisionUnion{\n\t\t\tOfString: stainless.String("string"),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", build.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/builds \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY" \\\n    -d \'{\n          "project": "project",\n          "revision": "string"\n        }\'',
      },
      java: {
        method: 'builds().create',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        BuildCreateParams params = BuildCreateParams.builder()\n            .project("project")\n            .revision("string")\n            .build();\n        Build build = client.builds().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'builds().create',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val params: BuildCreateParams = BuildCreateParams.builder()\n        .project("project")\n        .revision("string")\n        .build()\n    val build: Build = client.builds().create(params)\n}',
      },
      php: {
        method: 'builds->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$build = $client->builds->create(\n  project: 'project',\n  revision: 'string',\n  allowEmpty: true,\n  branch: 'branch',\n  commitMessage: 'commit_message',\n  enableAICommitMessage: true,\n  targetCommitMessages: [\n    'cli' => 'cli',\n    'csharp' => 'csharp',\n    'go' => 'go',\n    'java' => 'java',\n    'kotlin' => 'kotlin',\n    'node' => 'node',\n    'openAPI' => 'openapi',\n    'php' => 'php',\n    'python' => 'python',\n    'ruby' => 'ruby',\n    'sql' => 'sql',\n    'terraform' => 'terraform',\n    'typescript' => 'typescript',\n  ],\n  targets: [Target::NODE],\n);\n\nvar_dump($build);",
      },
      python: {
        method: 'builds.create',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nbuild = client.builds.create(\n    project="project",\n    revision="string",\n)\nprint(build.id)',
      },
      ruby: {
        method: 'builds.create',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nbuild = stainless18.builds.create(project: "project", revision: "string")\n\nputs(build)',
      },
      typescript: {
        method: 'client.builds.create',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst build = await client.builds.create({ project: 'project', revision: 'string' });\n\nconsole.log(build.id);",
      },
    },
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
      "## retrieve\n\n`client.builds.retrieve(buildId: string): { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }`\n\n**get** `/v0/builds/{buildId}`\n\nRetrieve a build by its ID.\n\n### Parameters\n\n- `buildId: string`\n  Build ID\n\n### Returns\n\n- `{ id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n  - `id: string`\n  - `config_commit: string`\n  - `created_at: string`\n  - `documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }`\n  - `object: 'build'`\n  - `org: string`\n  - `project: string`\n  - `targets: { cli?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; csharp?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; go?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; java?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; kotlin?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; node?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; openapi?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; php?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; python?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; ruby?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; sql?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; terraform?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; typescript?: { commit: { status: 'not_started'; } | { status: 'queued'; } | { status: 'in_progress'; } | { commit: commit; completed: object; completed_at: string; conclusion: string; merge_conflict_pr: object; status: 'completed'; }; install_url: string; object: 'build_target'; status: 'not_started' | 'codegen' | 'postgen' | 'completed'; build?: object | object | object | object; lint?: object | object | object | object; test?: object | object | object | object; }; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst build = await client.builds.retrieve('buildId');\n\nconsole.log(build);\n```",
    perLanguage: {
      cli: {
        method: 'builds retrieve',
        example: "stl builds retrieve \\\n  --api-key 'My API Key' \\\n  --build-id buildId",
      },
      csharp: {
        method: 'Builds.Retrieve',
        example:
          'BuildRetrieveParams parameters = new() { BuildID = "buildId" };\n\nvar build = await client.Builds.Retrieve(parameters);\n\nConsole.WriteLine(build);',
      },
      go: {
        method: 'client.Builds.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbuild, err := client.Builds.Get(context.TODO(), "buildId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", build.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/builds/$BUILD_ID \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'builds().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        Build build = client.builds().retrieve("buildId");\n    }\n}',
      },
      kotlin: {
        method: 'builds().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildRetrieveParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val build: Build = client.builds().retrieve("buildId")\n}',
      },
      php: {
        method: 'builds->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$build = $client->builds->retrieve('buildId');\n\nvar_dump($build);",
      },
      python: {
        method: 'builds.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nbuild = client.builds.retrieve(\n    "buildId",\n)\nprint(build.id)',
      },
      ruby: {
        method: 'builds.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nbuild = stainless18.builds.retrieve("buildId")\n\nputs(build)',
      },
      typescript: {
        method: 'client.builds.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst build = await client.builds.retrieve('buildId');\n\nconsole.log(build.id);",
      },
    },
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
      "## compare\n\n`client.builds.compare(base: { branch: string; revision: string | object; commit_message?: string; }, head: { branch: string; revision: string | object; commit_message?: string; }, project: string, targets?: string[]): { base: build; head: build; }`\n\n**post** `/v0/builds/compare`\n\nCreate two builds whose outputs can be directly compared with each other.\n\nCreated builds _modify_ their project branches so that their latest sets of\nconfig files point to the ones specified by the input revision.\n\nThis endpoint is useful because a build has more inputs than the set of\nconfig files it uses, so comparing two builds directly may return spurious\ndifferences. Builds made via this endpoint are guaranteed to have\ndifferences arising from the set of config files, and any custom code.\n\n### Parameters\n\n- `base: { branch: string; revision: string | object; commit_message?: string; }`\n  Parameters for the base build\n  - `branch: string`\n    Branch to use. When using a branch name as revision, this must match or be\nomitted.\n  - `revision: string | object`\n    Specifies what to build: a branch name, a commit SHA, or file contents.\n  - `commit_message?: string`\n    Optional commit message to use when creating a new commit.\n\n- `head: { branch: string; revision: string | object; commit_message?: string; }`\n  Parameters for the head build\n  - `branch: string`\n    Branch to use. When using a branch name as revision, this must match or be\nomitted.\n  - `revision: string | object`\n    Specifies what to build: a branch name, a commit SHA, or file contents.\n  - `commit_message?: string`\n    Optional commit message to use when creating a new commit.\n\n- `project: string`\n  Project name\n\n- `targets?: string[]`\n  Optional list of SDK targets to build. If not specified, all configured\ntargets will be built.\n\n### Returns\n\n- `{ base: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; head: { id: string; config_commit: string; created_at: string; documented_spec: object | object; object: 'build'; org: string; project: string; targets: object; updated_at: string; }; }`\n\n  - `base: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n  - `head: { id: string; config_commit: string; created_at: string; documented_spec: { content: string; type: 'content'; } | { expires: string; type: 'url'; url: string; }; object: 'build'; org: string; project: string; targets: { cli?: object; csharp?: object; go?: object; java?: object; kotlin?: object; node?: object; openapi?: object; php?: object; python?: object; ruby?: object; sql?: object; terraform?: object; typescript?: object; }; updated_at: string; }`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst response = await client.builds.compare({\n  base: { branch: 'branch', revision: 'string' },\n  head: { branch: 'branch', revision: 'string' },\n  project: 'project',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'builds compare',
        example:
          "stl builds compare \\\n  --api-key 'My API Key' \\\n  --base '{branch: branch, revision: string}' \\\n  --head '{branch: branch, revision: string}' \\\n  --project project",
      },
      csharp: {
        method: 'Builds.Compare',
        example:
          'BuildCompareParams parameters = new()\n{\n    Base = new()\n    {\n        Branch = "branch",\n        Revision = "string",\n        CommitMessage = "commit_message",\n    },\n    Head = new()\n    {\n        Branch = "branch",\n        Revision = "string",\n        CommitMessage = "commit_message",\n    },\n    Project = "project",\n};\n\nvar response = await client.Builds.Compare(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Builds.Compare',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Builds.Compare(context.TODO(), stainless.BuildCompareParams{\n\t\tBase: stainless.BuildCompareParamsBase{\n\t\t\tBranch: "branch",\n\t\t\tRevision: stainless.BuildCompareParamsBaseRevisionUnion{\n\t\t\t\tOfString: stainless.String("string"),\n\t\t\t},\n\t\t},\n\t\tHead: stainless.BuildCompareParamsHead{\n\t\t\tBranch: "branch",\n\t\t\tRevision: stainless.BuildCompareParamsHeadRevisionUnion{\n\t\t\t\tOfString: stainless.String("string"),\n\t\t\t},\n\t\t},\n\t\tProject: stainless.String("project"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Base)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/builds/compare \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY" \\\n    -d \'{\n          "base": {\n            "branch": "branch",\n            "revision": "string"\n          },\n          "head": {\n            "branch": "branch",\n            "revision": "string"\n          },\n          "project": "project"\n        }\'',
      },
      java: {
        method: 'builds().compare',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.BuildCompareParams;\nimport com.stainless.api.models.builds.BuildCompareResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        BuildCompareParams params = BuildCompareParams.builder()\n            .base(BuildCompareParams.Base.builder()\n                .branch("branch")\n                .revision("string")\n                .build())\n            .head(BuildCompareParams.Head.builder()\n                .branch("branch")\n                .revision("string")\n                .build())\n            .project("project")\n            .build();\n        BuildCompareResponse response = client.builds().compare(params);\n    }\n}',
      },
      kotlin: {
        method: 'builds().compare',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.BuildCompareParams\nimport com.configure_me_stainless_v0.api.models.builds.BuildCompareResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val params: BuildCompareParams = BuildCompareParams.builder()\n        .base(BuildCompareParams.Base.builder()\n            .branch("branch")\n            .revision("string")\n            .build())\n        .head(BuildCompareParams.Head.builder()\n            .branch("branch")\n            .revision("string")\n            .build())\n        .project("project")\n        .build()\n    val response: BuildCompareResponse = client.builds().compare(params)\n}',
      },
      php: {
        method: 'builds->compare',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$response = $client->builds->compare(\n  base: [\n    'branch' => 'branch',\n    'revision' => 'string',\n    'commitMessage' => 'commit_message',\n  ],\n  head: [\n    'branch' => 'branch',\n    'revision' => 'string',\n    'commitMessage' => 'commit_message',\n  ],\n  project: 'project',\n  targets: [Target::NODE],\n);\n\nvar_dump($response);",
      },
      python: {
        method: 'builds.compare',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.builds.compare(\n    base={\n        "branch": "branch",\n        "revision": "string",\n    },\n    head={\n        "branch": "branch",\n        "revision": "string",\n    },\n    project="project",\n)\nprint(response.base)',
      },
      ruby: {
        method: 'builds.compare',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresponse = stainless18.builds.compare(\n  base: {branch: "branch", revision: "string"},\n  head: {branch: "branch", revision: "string"},\n  project: "project"\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.builds.compare',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.builds.compare({\n  base: { branch: 'branch', revision: 'string' },\n  head: { branch: 'branch', revision: 'string' },\n  project: 'project',\n});\n\nconsole.log(response.base);",
      },
    },
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
      "## list\n\n`client.builds.diagnostics.list(buildId: string, cursor?: string, limit?: number, severity?: 'fatal' | 'error' | 'warning' | 'note', targets?: string): { code: string; ignored: boolean; level: 'fatal' | 'error' | 'warning' | 'note'; message: string; more: build_diagnostic_more; config_ref?: string; oas_ref?: string; }`\n\n**get** `/v0/builds/{buildId}/diagnostics`\n\nGet the list of diagnostics for a given build.\n\nIf no language targets are specified, diagnostics for all languages are returned.\n\n### Parameters\n\n- `buildId: string`\n  Build ID\n\n- `cursor?: string`\n  Pagination cursor from a previous response\n\n- `limit?: number`\n  Maximum number of diagnostics to return, defaults to 100 (maximum: 100)\n\n- `severity?: 'fatal' | 'error' | 'warning' | 'note'`\n  Includes the given severity and above (fatal > error > warning > note).\n\n- `targets?: string`\n  Optional comma-delimited list of language targets to filter diagnostics by\n\n### Returns\n\n- `{ code: string; ignored: boolean; level: 'fatal' | 'error' | 'warning' | 'note'; message: string; more: { markdown: string; type: 'markdown'; } | { raw: string; type: 'raw'; }; config_ref?: string; oas_ref?: string; }`\n\n  - `code: string`\n  - `ignored: boolean`\n  - `level: 'fatal' | 'error' | 'warning' | 'note'`\n  - `message: string`\n  - `more: { markdown: string; type: 'markdown'; } | { raw: string; type: 'raw'; }`\n  - `config_ref?: string`\n  - `oas_ref?: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\n// Automatically fetches more pages as needed.\nfor await (const buildDiagnostic of client.builds.diagnostics.list('buildId')) {\n  console.log(buildDiagnostic);\n}\n```",
    perLanguage: {
      cli: {
        method: 'diagnostics list',
        example: "stl builds:diagnostics list \\\n  --api-key 'My API Key' \\\n  --build-id buildId",
      },
      csharp: {
        method: 'Builds.Diagnostics.List',
        example:
          'DiagnosticListParams parameters = new() { BuildID = "buildId" };\n\nvar page = await client.Builds.Diagnostics.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Builds.Diagnostics.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Builds.Diagnostics.List(\n\t\tcontext.TODO(),\n\t\t"buildId",\n\t\tstainless.BuildDiagnosticListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/builds/$BUILD_ID/diagnostics \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'builds().diagnostics().list',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.diagnostics.DiagnosticListPage;\nimport com.stainless.api.models.builds.diagnostics.DiagnosticListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        DiagnosticListPage page = client.builds().diagnostics().list("buildId");\n    }\n}',
      },
      kotlin: {
        method: 'builds().diagnostics().list',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.diagnostics.DiagnosticListPage\nimport com.configure_me_stainless_v0.api.models.builds.diagnostics.DiagnosticListParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val page: DiagnosticListPage = client.builds().diagnostics().list("buildId")\n}',
      },
      php: {
        method: 'builds->diagnostics->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$page = $client->builds->diagnostics->list(\n  'buildId', cursor: 'cursor', limit: 1, severity: 'fatal', targets: 'targets'\n);\n\nvar_dump($page);",
      },
      python: {
        method: 'builds.diagnostics.list',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\npage = client.builds.diagnostics.list(\n    build_id="buildId",\n)\npage = page.data[0]\nprint(page.code)',
      },
      ruby: {
        method: 'builds.diagnostics.list',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\npage = stainless18.builds.diagnostics.list("buildId")\n\nputs(page)',
      },
      typescript: {
        method: 'client.builds.diagnostics.list',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const buildDiagnostic of client.builds.diagnostics.list('buildId')) {\n  console.log(buildDiagnostic.code);\n}",
      },
    },
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
      "## retrieve\n\n`client.builds.targetOutputs.retrieve(build_id: string, target: string, type: string, output?: 'url' | 'git', path?: string): { output: 'url'; target: target; type: string; url: string; path?: string; } | { token: string; output: 'git'; ref: string; target: target; type: string; url: string; }`\n\n**get** `/v0/build_target_outputs`\n\nRetrieve a method to download an output for a given build target.\n\nIf the requested type of output is `source`, and the requested output\nmethod is `url`, a download link to a tarball of the source files is\nreturned. If the requested output method is `git`, a Git remote, ref,\nand access token (if necessary) is returned.\n\nOtherwise, the possible types of outputs are specific to the requested\ntarget, and the output method _must_ be `url`. See the documentation for\n`type` for more information.\n\n### Parameters\n\n- `build_id: string`\n  Build ID\n\n- `target: string`\n  SDK language target name\n\n- `type: string`\n\n- `output?: 'url' | 'git'`\n  Output format: url (download URL) or git (temporary access token).\n\n- `path?: string`\n  The path of the file to get when used with \"type\": \"file\".\n\n### Returns\n\n- `{ output: 'url'; target: string; type: string; url: string; path?: string; } | { token: string; output: 'git'; ref: string; target: string; type: string; url: string; }`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst targetOutput = await client.builds.targetOutputs.retrieve({\n  build_id: 'build_id',\n  target: 'node',\n  type: 'source',\n});\n\nconsole.log(targetOutput);\n```",
    perLanguage: {
      cli: {
        method: 'target_outputs retrieve',
        example:
          "stl builds:target-outputs retrieve \\\n  --api-key 'My API Key' \\\n  --build-id build_id \\\n  --target node \\\n  --type source",
      },
      csharp: {
        method: 'Builds.TargetOutputs.Retrieve',
        example:
          'TargetOutputRetrieveParams parameters = new()\n{\n    BuildID = "build_id",\n    Target = Target.Node,\n    Type = Type.Source,\n};\n\nvar targetOutput = await client.Builds.TargetOutputs.Retrieve(parameters);\n\nConsole.WriteLine(targetOutput);',
      },
      go: {
        method: 'client.Builds.TargetOutputs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttargetOutput, err := client.Builds.TargetOutputs.Get(context.TODO(), stainless.BuildTargetOutputGetParams{\n\t\tBuildID: "build_id",\n\t\tTarget:  stainless.BuildTargetOutputGetParamsTargetNode,\n\t\tType:    stainless.BuildTargetOutputGetParamsTypeSource,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", targetOutput)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/build_target_outputs \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'builds().targetOutputs().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.targetoutputs.TargetOutputRetrieveParams;\nimport com.stainless.api.models.builds.targetoutputs.TargetOutputRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        TargetOutputRetrieveParams params = TargetOutputRetrieveParams.builder()\n            .buildId("build_id")\n            .target(TargetOutputRetrieveParams.Target.NODE)\n            .type(TargetOutputRetrieveParams.Type.SOURCE)\n            .build();\n        TargetOutputRetrieveResponse targetOutput = client.builds().targetOutputs().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'builds().targetOutputs().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.targetoutputs.TargetOutputRetrieveParams\nimport com.configure_me_stainless_v0.api.models.builds.targetoutputs.TargetOutputRetrieveResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val params: TargetOutputRetrieveParams = TargetOutputRetrieveParams.builder()\n        .buildId("build_id")\n        .target(TargetOutputRetrieveParams.Target.NODE)\n        .type(TargetOutputRetrieveParams.Type.SOURCE)\n        .build()\n    val targetOutput: TargetOutputRetrieveResponse = client.builds().targetOutputs().retrieve(params)\n}',
      },
      php: {
        method: 'builds->targetOutputs->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$targetOutput = $client->builds->targetOutputs->retrieve(\n  buildID: 'build_id',\n  target: 'node',\n  type: 'source',\n  output: 'url',\n  path: 'path',\n);\n\nvar_dump($targetOutput);",
      },
      python: {
        method: 'builds.target_outputs.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\ntarget_output = client.builds.target_outputs.retrieve(\n    build_id="build_id",\n    target="node",\n    type="source",\n)\nprint(target_output)',
      },
      ruby: {
        method: 'builds.target_outputs.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\ntarget_output = stainless18.builds.target_outputs.retrieve(build_id: "build_id", target: :node, type: :source)\n\nputs(target_output)',
      },
      typescript: {
        method: 'client.builds.targetOutputs.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst targetOutput = await client.builds.targetOutputs.retrieve({\n  build_id: 'build_id',\n  target: 'node',\n  type: 'source',\n});\n\nconsole.log(targetOutput);",
      },
    },
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
      "## list\n\n`client.orgs.list(): { data: org[]; has_more: boolean; next_cursor?: string; }`\n\n**get** `/v0/orgs`\n\nList organizations accessible to the current authentication method.\n\n### Returns\n\n- `{ data: { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }[]; has_more: boolean; next_cursor?: string; }`\n\n  - `data: { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }[]`\n  - `has_more: boolean`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst orgs = await client.orgs.list();\n\nconsole.log(orgs);\n```",
    perLanguage: {
      cli: {
        method: 'orgs list',
        example: "stl orgs list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Orgs.List',
        example:
          'OrgListParams parameters = new();\n\nvar orgs = await client.Orgs.List(parameters);\n\nConsole.WriteLine(orgs);',
      },
      go: {
        method: 'client.Orgs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torgs, err := client.Orgs.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orgs.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/orgs \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'orgs().list',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.orgs.OrgListParams;\nimport com.stainless.api.models.orgs.OrgListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        OrgListResponse orgs = client.orgs().list();\n    }\n}',
      },
      kotlin: {
        method: 'orgs().list',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.orgs.OrgListParams\nimport com.configure_me_stainless_v0.api.models.orgs.OrgListResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val orgs: OrgListResponse = client.orgs().list()\n}',
      },
      php: {
        method: 'orgs->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$orgs = $client->orgs->list();\n\nvar_dump($orgs);",
      },
      python: {
        method: 'orgs.list',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\norgs = client.orgs.list()\nprint(orgs.data)',
      },
      ruby: {
        method: 'orgs.list',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\norgs = stainless18.orgs.list\n\nputs(orgs)',
      },
      typescript: {
        method: 'client.orgs.list',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst orgs = await client.orgs.list();\n\nconsole.log(orgs.data);",
      },
    },
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
      "## retrieve\n\n`client.orgs.retrieve(org: string): { display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }`\n\n**get** `/v0/orgs/{org}`\n\nRetrieve an organization by name.\n\n### Parameters\n\n- `org: string`\n\n### Returns\n\n- `{ display_name: string; enable_ai_commit_messages: boolean; object: 'org'; slug: string; }`\n\n  - `display_name: string`\n  - `enable_ai_commit_messages: boolean`\n  - `object: 'org'`\n  - `slug: string`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst org = await client.orgs.retrieve('org');\n\nconsole.log(org);\n```",
    perLanguage: {
      cli: {
        method: 'orgs retrieve',
        example: "stl orgs retrieve \\\n  --api-key 'My API Key' \\\n  --org org",
      },
      csharp: {
        method: 'Orgs.Retrieve',
        example:
          'OrgRetrieveParams parameters = new() { Org = "org" };\n\nvar org = await client.Orgs.Retrieve(parameters);\n\nConsole.WriteLine(org);',
      },
      go: {
        method: 'client.Orgs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torg, err := client.Orgs.Get(context.TODO(), "org")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", org.DisplayName)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/orgs/$ORG \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'orgs().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.orgs.Org;\nimport com.stainless.api.models.orgs.OrgRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        Org org = client.orgs().retrieve("org");\n    }\n}',
      },
      kotlin: {
        method: 'orgs().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.orgs.Org\nimport com.configure_me_stainless_v0.api.models.orgs.OrgRetrieveParams\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val org: Org = client.orgs().retrieve("org")\n}',
      },
      php: {
        method: 'orgs->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$org = $client->orgs->retrieve('org');\n\nvar_dump($org);",
      },
      python: {
        method: 'orgs.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\norg = client.orgs.retrieve(\n    "org",\n)\nprint(org.display_name)',
      },
      ruby: {
        method: 'orgs.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\norg = stainless18.orgs.retrieve("org")\n\nputs(org)',
      },
      typescript: {
        method: 'client.orgs.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst org = await client.orgs.retrieve('org');\n\nconsole.log(org.display_name);",
      },
    },
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
      "## retrieve\n\n`client.user.retrieve(): { id: string; email: string; github: object; name: string; object: 'user'; }`\n\n**get** `/v0/user`\n\nRetrieve the currently authenticated user's information.\n\n### Returns\n\n- `{ id: string; email: string; github: { username: string; }; name: string; object: 'user'; }`\n\n  - `id: string`\n  - `email: string`\n  - `github: { username: string; }`\n  - `name: string`\n  - `object: 'user'`\n\n### Example\n\n```typescript\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18();\n\nconst user = await client.user.retrieve();\n\nconsole.log(user);\n```",
    perLanguage: {
      cli: {
        method: 'user retrieve',
        example: "stl user retrieve \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'User.Retrieve',
        example:
          'UserRetrieveParams parameters = new();\n\nvar user = await client.User.Retrieve(parameters);\n\nConsole.WriteLine(user);',
      },
      go: {
        method: 'client.User.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.stainless.com/v0/user \\\n    -H "Authorization: Bearer $STAINLESS_API_KEY"',
      },
      java: {
        method: 'user().retrieve',
        example:
          'package com.stainless.api.example;\n\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.user.UserRetrieveParams;\nimport com.stainless.api.models.user.UserRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        Stainless18Client client = Stainless18OkHttpClient.fromEnv();\n\n        UserRetrieveResponse user = client.user().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'user().retrieve',
        example:
          'package com.configure_me_stainless_v0.api.example\n\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.user.UserRetrieveParams\nimport com.configure_me_stainless_v0.api.models.user.UserRetrieveResponse\n\nfun main() {\n    val client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\n    val user: UserRetrieveResponse = client.user().retrieve()\n}',
      },
      php: {
        method: 'user->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key', environment: 'staging');\n\n$user = $client->user->retrieve();\n\nvar_dump($user);",
      },
      python: {
        method: 'user.retrieve',
        example:
          'import os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.user.retrieve()\nprint(user.id)',
      },
      ruby: {
        method: 'user.retrieve',
        example:
          'require "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nuser = stainless18.user.retrieve\n\nputs(user)',
      },
      typescript: {
        method: 'client.user.retrieve',
        example:
          "import Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.retrieve();\n\nconsole.log(user.id);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Stainless18 Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/stainless_v0.svg?label=pypi%20(stable))](https://pypi.org/project/stainless_v0/)\n\nThe Stainless18 Python library provides convenient access to the Stainless18 REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stainless18 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stainless-api%2Fsdk-mcp&config=eyJuYW1lIjoiQHN0YWlubGVzcy1hcGkvc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0YWlubGVzczE4LnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RhaW5sZXNzLWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stainless-api%2Fsdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstainless18.stlmcp.com%22%2C%22headers%22%3A%7B%22x-stainless-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [www.stainless.com](https://www.stainless.com/docs/getting-started/quickstart-cli). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from this staging repo\npip install git+ssh://git@github.com/stainless-sdks/stainless18-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install stainless_v0`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="staging",\n)\n\nbuild = client.builds.create(\n    project="stainless",\n    revision="main",\n)\nprint(build.id)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `STAINLESS_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncStainless18` instead of `Stainless18` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom stainless_v0 import AsyncStainless18\n\nclient = AsyncStainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="staging",\n)\n\nasync def main() -> None:\n  build = await client.builds.create(\n      project="stainless",\n      revision="main",\n  )\n  print(build.id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from this staging repo\npip install \'stainless_v0[aiohttp] @ git+ssh://git@github.com/stainless-sdks/stainless18-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom stainless_v0 import DefaultAioHttpClient\nfrom stainless_v0 import AsyncStainless18\n\nasync def main() -> None:\n  async with AsyncStainless18(\n    api_key=os.environ.get("STAINLESS_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    build = await client.builds.create(\n        project="stainless",\n        revision="main",\n    )\n    print(build.id)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Stainless18 API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18()\n\nall_builds = []\n# Automatically fetches more pages as needed.\nfor build in client.builds.list(\n    project="stainless",\n):\n    # Do something with build here\n    all_builds.append(build)\nprint(all_builds)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom stainless_v0 import AsyncStainless18\n\nclient = AsyncStainless18()\n\nasync def main() -> None:\n    all_builds = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for build in client.builds.list(\n    project="stainless",\n):\n        all_builds.append(build)\n    print(all_builds)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.builds.list(\n    project="stainless",\n)\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.data)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.builds.list(\n    project="stainless",\n)\n\nprint(f"next page cursor: {first_page.next_cursor}") # => "next page cursor: ..."\nfor build in first_page.data:\n    print(build.id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18()\n\nbuild = client.builds.create(\n    project="project",\n    revision="string",\n    target_commit_messages={},\n)\nprint(build.target_commit_messages)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `stainless_v0.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `stainless_v0.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `stainless_v0.APIError`.\n\n```python\nimport stainless_v0\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18()\n\ntry:\n    client.builds.create(\n        project="stainless",\n        revision="main",\n    )\nexcept stainless_v0.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept stainless_v0.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept stainless_v0.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom stainless_v0 import Stainless18\n\n# Configure the default for all requests:\nclient = Stainless18(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).builds.create(\n    project="stainless",\n    revision="main",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom stainless_v0 import Stainless18\n\n# Configure the default for all requests:\nclient = Stainless18(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Stainless18(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).builds.create(\n    project="stainless",\n    revision="main",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `STAINLESS18_LOG` to `info`.\n\n```shell\n$ export STAINLESS18_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom stainless_v0 import Stainless18\n\nclient = Stainless18()\nresponse = client.builds.with_raw_response.create(\n    project="stainless",\n    revision="main",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nbuild = response.parse()  # get the object that `builds.create()` would have returned\nprint(build.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/stainless-sdks/stainless18-python/tree/main/src/stainless_v0/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/stainless-sdks/stainless18-python/tree/main/src/stainless_v0/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.builds.with_streaming_response.create(\n    project="stainless",\n    revision="main",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom stainless_v0 import Stainless18, DefaultHttpxClient\n\nclient = Stainless18(\n    # Or use the `STAINLESS18_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom stainless_v0 import Stainless18\n\nwith Stainless18() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/stainless18-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport stainless_v0\nprint(stainless_v0.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Stainless18 Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-api/stainless-api-go"><img src="https://pkg.go.dev/badge/github.com/stainless-api/stainless-api-go.svg" alt="Go Reference"></a>\n\nThe Stainless18 Go library provides convenient access to the [Stainless18 REST API](https://www.stainless.com/docs/getting-started/quickstart-cli)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stainless18 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stainless-api%2Fsdk-mcp&config=eyJuYW1lIjoiQHN0YWlubGVzcy1hcGkvc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0YWlubGVzczE4LnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RhaW5sZXNzLWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stainless-api%2Fsdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstainless18.stlmcp.com%22%2C%22headers%22%3A%7B%22x-stainless-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/stainless-api/stainless-api-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/stainless-api/stainless-api-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-api/stainless-api-go"\n\t"github.com/stainless-api/stainless-api-go/option"\n)\n\nfunc main() {\n\tclient := stainless.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("STAINLESS_API_KEY")\n\t\toption.WithEnvironmentStaging(), // defaults to option.WithEnvironmentProduction()\n\t)\n\tbuild, err := client.Builds.New(context.TODO(), stainless.BuildNewParams{\n\t\tProject: stainless.String("stainless"),\n\t\tRevision: stainless.BuildNewParamsRevisionUnion{\n\t\t\tOfString: stainless.String("main"),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", build.ID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Builds.New(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-api/stainless-api-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.Builds.ListAutoPaging(context.TODO(), stainless.BuildListParams{\n\tProject: stainless.String("stainless"),\n})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tbuild := iter.Current()\n\tfmt.Printf("%+v\\n", build)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.Builds.List(context.TODO(), stainless.BuildListParams{\n\tProject: stainless.String("stainless"),\n})\nfor page != nil {\n\tfor _, build := range page.Data {\n\t\tfmt.Printf("%+v\\n", build)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Builds.New(context.TODO(), stainless.BuildNewParams{\n\tProject: stainless.String("stainless"),\n\tRevision: stainless.BuildNewParamsRevisionUnion{\n\t\tOfString: stainless.String("main"),\n\t},\n})\nif err != nil {\n\tvar apierr *stainless.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v0/builds": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Builds.New(\n\tctx,\n\tstainless.BuildNewParams{\n\t\tProject: stainless.String("stainless"),\n\t\tRevision: stainless.BuildNewParamsRevisionUnion{\n\t\t\tOfString: stainless.String("main"),\n\t\t},\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := stainless.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Builds.New(\n\tcontext.TODO(),\n\tstainless.BuildNewParams{\n\t\tProject: stainless.String("stainless"),\n\t\tRevision: stainless.BuildNewParamsRevisionUnion{\n\t\t\tOfString: stainless.String("main"),\n\t\t},\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nbuild, err := client.Builds.New(\n\tcontext.TODO(),\n\tstainless.BuildNewParams{\n\t\tProject: stainless.String("stainless"),\n\t\tRevision: stainless.BuildNewParamsRevisionUnion{\n\t\t\tOfString: stainless.String("main"),\n\t\t},\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", build)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-api/stainless-api-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Stainless18 TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@stainless-api/sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@stainless-api/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@stainless-api/sdk)\n\nThis library provides convenient access to the Stainless18 REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [www.stainless.com](https://www.stainless.com/docs/getting-started/quickstart-cli). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stainless18 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stainless-api%2Fsdk-mcp&config=eyJuYW1lIjoiQHN0YWlubGVzcy1hcGkvc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0YWlubGVzczE4LnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RhaW5sZXNzLWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stainless-api%2Fsdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstainless18.stlmcp.com%22%2C%22headers%22%3A%7B%22x-stainless-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @stainless-api/sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n  environment: 'staging', // defaults to 'production'\n});\n\nconst build = await client.builds.create({ project: 'stainless', revision: 'main' });\n\nconsole.log(build.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  apiKey: process.env['STAINLESS_API_KEY'], // This is the default and can be omitted\n  environment: 'staging', // defaults to 'production'\n});\n\nconst params: Stainless18.BuildCreateParams = { project: 'stainless', revision: 'main' };\nconst build: Stainless18.Build = await client.builds.create(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst build = await client.builds\n  .create({ project: 'stainless', revision: 'main' })\n  .catch(async (err) => {\n    if (err instanceof Stainless18.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Stainless18({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.builds.create({ project: 'stainless', revision: 'main' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Stainless18({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.builds.create({ project: 'stainless', revision: 'main' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Stainless18 API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllBuilds(params) {\n  const allBuilds = [];\n  // Automatically fetches more pages as needed.\n  for await (const build of client.builds.list({ project: 'stainless' })) {\n    allBuilds.push(build);\n  }\n  return allBuilds;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.builds.list({ project: 'stainless' });\nfor (const build of page.data) {\n  console.log(build);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Stainless18();\n\nconst response = await client.builds\n  .create({ project: 'stainless', revision: 'main' })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: build, response: raw } = await client.builds\n  .create({ project: 'stainless', revision: 'main' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(build.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `STAINLESS18_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Stainless18 from '@stainless-api/sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Stainless18({\n  logger: logger.child({ name: 'Stainless18' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.builds.create({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Stainless18 from '@stainless-api/sdk';\nimport fetch from 'my-fetch';\n\nconst client = new Stainless18({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Stainless18 from '@stainless-api/sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Stainless18({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Stainless18 from '@stainless-api/sdk';\n\nconst client = new Stainless18({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Stainless18 from 'npm:@stainless-api/sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Stainless18({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-api/stainless-api-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Stainless18 Ruby API library\n\nThe Stainless18 Ruby library provides convenient access to the Stainless18 REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/stainless-sdks/stainless18-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stainless18 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stainless-api%2Fsdk-mcp&config=eyJuYW1lIjoiQHN0YWlubGVzcy1hcGkvc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0YWlubGVzczE4LnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RhaW5sZXNzLWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stainless-api%2Fsdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstainless18.stlmcp.com%22%2C%22headers%22%3A%7B%22x-stainless-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/stainless-v0).\n\nThe REST API documentation can be found on [www.stainless.com](https://www.stainless.com/docs/getting-started/quickstart-cli).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n```ruby\ngem "stainless-v0", "~> 0.0.1"\n```\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "stainless_v0"\n\nstainless18 = StainlessV0::Client.new(\n  api_key: ENV["STAINLESS_API_KEY"], # This is the default and can be omitted\n  environment: "staging" # defaults to "production"\n)\n\nbuild = stainless18.builds.create(project: "stainless", revision: "main")\n\nputs(build.id)\n```\n\n\n\n### Pagination\n\nList methods in the Stainless18 API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = stainless18.builds.list(project: "stainless")\n\n# Fetch single item from page.\nbuild = page.data[0]\nputs(build.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |build|\n  puts(build.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.data[0].id)\nend\n```\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `StainlessV0::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  build = stainless18.builds.create(project: "stainless", revision: "main")\nrescue StainlessV0::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue StainlessV0::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue StainlessV0::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstainless18 = StainlessV0::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nstainless18.builds.create(project: "stainless", revision: "main", request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstainless18 = StainlessV0::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nstainless18.builds.create(project: "stainless", revision: "main", request_options: {timeout: 5})\n```\n\nOn timeout, `StainlessV0::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `StainlessV0::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nbuild =\n  stainless18.builds.create(\n    project: "stainless",\n    revision: "main",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(build[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `StainlessV0::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `StainlessV0::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nstainless18.builds.create(project: "stainless", revision: "main")\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nstainless18.builds.create(project: "stainless", revision: "main")\n\n# You can also splat a full Params class:\nparams = StainlessV0::BuildCreateParams.new(project: "stainless", revision: "main")\nstainless18.builds.create(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :python\nputs(StainlessV0::ProjectGenerateCommitMessageParams::Target::PYTHON)\n\n# Revealed type: `T.all(StainlessV0::ProjectGenerateCommitMessageParams::Target, Symbol)`\nT.reveal_type(StainlessV0::ProjectGenerateCommitMessageParams::Target::PYTHON)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nstainless18.projects.generate_commit_message(\n  target: StainlessV0::ProjectGenerateCommitMessageParams::Target::PYTHON,\n  # …\n)\n\n# Literal values are also permissible:\nstainless18.projects.generate_commit_message(\n  target: :python,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/stainless-sdks/stainless18-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Stainless18 Java API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.stainless.api/stainless18-java)](https://central.sonatype.com/artifact/com.stainless.api/stainless18-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.stainless.api/stainless18-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.stainless.api/stainless18-java/0.0.1)\n\n\nThe Stainless18 Java SDK provides convenient access to the [Stainless18 REST API](https://www.stainless.com/docs/getting-started/quickstart-cli)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stainless18 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stainless-api%2Fsdk-mcp&config=eyJuYW1lIjoiQHN0YWlubGVzcy1hcGkvc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0YWlubGVzczE4LnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RhaW5sZXNzLWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stainless-api%2Fsdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstainless18.stlmcp.com%22%2C%22headers%22%3A%7B%22x-stainless-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nThe REST API documentation can be found on [www.stainless.com](https://www.stainless.com/docs/getting-started/quickstart-cli). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.stainless.api/stainless18-java/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.stainless.api:stainless18-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.stainless.api</groupId>\n  <artifactId>stainless18-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nStainless18Client client = Stainless18OkHttpClient.fromEnv();\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build();\nBuild build = client.builds().create(params);\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nStainless18Client client = Stainless18OkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    // Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n    // Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\n    .fromEnv()\n    .project("example-project")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property               | Environment variable   | Required | Default value                 |\n| --------- | ----------------------------- | ---------------------- | -------- | ----------------------------- |\n| `apiKey`  | `stainless18.stainlessApiKey` | `STAINLESS_API_KEY`    | false    | -                             |\n| `baseUrl` | `stainless18.baseUrl`         | `STAINLESS18_BASE_URL` | true     | `"https://api.stainless.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\n\nStainless18Client clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Stainless18 API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.builds().create(...)` should be called with an instance of `BuildCreateParams`, and it     will return an instance of `Build`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildCreateParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nStainless18Client client = Stainless18OkHttpClient.fromEnv();\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build();\nCompletableFuture<Build> build = client.async().builds().create(params);\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.stainless.api.client.Stainless18ClientAsync;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClientAsync;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildCreateParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nStainless18ClientAsync client = Stainless18OkHttpClientAsync.fromEnv();\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build();\nCompletableFuture<Build> build = client.builds().create(params);\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.stainless.api.core.http.Headers;\nimport com.stainless.api.core.http.HttpResponseFor;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build();\nHttpResponseFor<Build> build = client.builds().withRawResponse().create(params);\n\nint statusCode = build.statusCode();\nHeaders headers = build.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.stainless.api.models.builds.Build;\n\nBuild parsedBuild = build.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`Stainless18ServiceException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/Stainless18ServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`Stainless18IoException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/Stainless18IoException.kt): I/O networking errors.\n\n- [`Stainless18RetryableException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/Stainless18RetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`Stainless18InvalidDataException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/Stainless18InvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`Stainless18Exception`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/Stainless18Exception.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)\n\n```java\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildListPage;\n\nBuildListPage page = client.builds().list();\n\n// Process as an Iterable\nfor (Build build : page.autoPager()) {\n    System.out.println(build);\n}\n\n// Process as a Stream\npage.autoPager()\n    .stream()\n    .limit(50)\n    .forEach(build -> System.out.println(build));\n```\n\nWhen using the asynchronous client, the method returns an [`AsyncStreamResponse`](stainless18-java-core/src/main/kotlin/com/stainless/api/core/http/AsyncStreamResponse.kt):\n\n```java\nimport com.stainless.api.core.http.AsyncStreamResponse;\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildListPageAsync;\nimport java.util.Optional;\nimport java.util.concurrent.CompletableFuture;\n\nCompletableFuture<BuildListPageAsync> pageFuture = client.async().builds().list();\n\npageFuture.thenRun(page -> page.autoPager().subscribe(build -> {\n    System.out.println(build);\n}));\n\n// If you need to handle errors or completion of the stream\npageFuture.thenRun(page -> page.autoPager().subscribe(new AsyncStreamResponse.Handler<>() {\n    @Override\n    public void onNext(Build build) {\n        System.out.println(build);\n    }\n\n    @Override\n    public void onComplete(Optional<Throwable> error) {\n        if (error.isPresent()) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error.get());\n        } else {\n            System.out.println("No more!");\n        }\n    }\n}));\n\n// Or use futures\npageFuture.thenRun(page -> page.autoPager()\n    .subscribe(build -> {\n        System.out.println(build);\n    })\n    .onCompleteFuture()\n    .whenComplete((unused, error) -> {\n        if (error != null) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error);\n        } else {\n            System.out.println("No more!");\n        }\n    }));\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```java\nimport com.stainless.api.models.builds.Build;\nimport com.stainless.api.models.builds.BuildListPage;\n\nBuildListPage page = client.builds().list();\nwhile (true) {\n    for (Build build : page.items()) {\n        System.out.println(build);\n    }\n\n    if (!page.hasNextPage()) {\n        break;\n    }\n\n    page = page.nextPage();\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `STAINLESS18_LOG` environment variable to   `info`:\n\n```sh\nexport STAINLESS18_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport STAINLESS18_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `stainless18-java-core` is published with a     [configuration file](stainless18-java-core/src/main/resources/META-INF/proguard/stainless18-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`Stainless18OkHttpClient`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClient.kt) or     [`Stainless18OkHttpClientAsync`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.stainless.api.models.builds.Build;\n\nBuild build = client.builds().create(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport java.time.Duration;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\nimport java.time.Duration;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n### Environments\n\nThe SDK sends requests to the production by default. To send requests to a different     environment, configure the client like so:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .staging()\n    .build();\n```\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `stainless18-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`Stainless18Client`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18Client.kt), [`Stainless18ClientAsync`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientAsync.kt),             [`Stainless18ClientImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientImpl.kt), and [`Stainless18ClientAsyncImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `stainless18-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`Stainless18OkHttpClient`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClient.kt) and [`Stainless18OkHttpClientAsync`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClientAsync.kt), which             provide a way to construct [`Stainless18ClientImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientImpl.kt) and             [`Stainless18ClientAsyncImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientAsyncImpl.kt), respectively, using OkHttp\n- `stainless18-java`\n  - Depends on and exposes the APIs of both `stainless18-java-core` and `stainless18-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`stainless18-java` dependency](#installation) with `stainless18-java-core`\n2. Copy `stainless18-java-client-okhttp`\'s [`OkHttpClient`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`Stainless18ClientImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientImpl.kt) or [`Stainless18ClientAsyncImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientAsyncImpl.kt), similarly to        [`Stainless18OkHttpClient`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClient.kt) or [`Stainless18OkHttpClientAsync`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`stainless18-java` dependency](#installation) with `stainless18-java-core`\n2. Write a class that implements the [`HttpClient`](stainless18-java-core/src/main/kotlin/com/stainless/api/core/http/HttpClient.kt) interface\n3. Construct [`Stainless18ClientImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientImpl.kt) or [`Stainless18ClientAsyncImpl`](stainless18-java-core/src/main/kotlin/com/stainless/api/client/Stainless18ClientAsyncImpl.kt), similarly to        [`Stainless18OkHttpClient`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClient.kt) or [`Stainless18OkHttpClientAsync`](stainless18-java-client-okhttp/src/main/kotlin/com/stainless/api/client/okhttp/Stainless18OkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.stainless.api.core.JsonValue;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport com.stainless.api.core.JsonValue;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .targetCommitMessages(BuildCreateParams.TargetCommitMessages.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](stainless18-java-core/src/main/kotlin/com/stainless/api/core/Values.kt) object to its setter:\n\n```java\nimport com.stainless.api.core.JsonValue;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .project(JsonValue.from(42))\n    .revision("main")\n    .build();\n```\n\nThe most straightforward way to create a [`JsonValue`](stainless18-java-core/src/main/kotlin/com/stainless/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.stainless.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](stainless18-java-core/src/main/kotlin/com/stainless/api/core/Values.kt):\n\n```java\nimport com.stainless.api.core.JsonMissing;\nimport com.stainless.api.models.builds.BuildCreateParams;\n\nBuildCreateParams params = BuildCreateParams.builder()\n    .revision("string")\n    .project(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.stainless.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.builds().create(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.stainless.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<String> project = client.builds().create(params)._project();\n\nif (project.isMissing()) {\n  // The property is absent from the JSON response\n} else if (project.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = project.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = project.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`Stainless18InvalidDataException`](stainless18-java-core/src/main/kotlin/com/stainless/api/errors/Stainless18InvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.stainless.api.models.builds.Build;\n\nBuild build = client.builds().create(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.stainless.api.models.builds.Build;\n\nBuild build = client.builds().create(\n  params, RequestOptions.builder().responseValidation(true).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.stainless.api.client.Stainless18Client;\nimport com.stainless.api.client.okhttp.Stainless18OkHttpClient;\n\nStainless18Client client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/stainless18-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Stainless18 Kotlin API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.configure_me_stainless_v0.api/stainless18-kotlin)](https://central.sonatype.com/artifact/com.configure_me_stainless_v0.api/stainless18-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.configure_me_stainless_v0.api/stainless18-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.configure_me_stainless_v0.api/stainless18-kotlin/0.0.1)\n\n\nThe Stainless18 Kotlin SDK provides convenient access to the [Stainless18 REST API](https://www.stainless.com/docs/getting-started/quickstart-cli)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Stainless18 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40stainless-api%2Fsdk-mcp&config=eyJuYW1lIjoiQHN0YWlubGVzcy1hcGkvc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0YWlubGVzczE4LnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RhaW5sZXNzLWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40stainless-api%2Fsdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstainless18.stlmcp.com%22%2C%22headers%22%3A%7B%22x-stainless-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nThe REST API documentation can be found on [www.stainless.com](https://www.stainless.com/docs/getting-started/quickstart-cli). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.configure_me_stainless_v0.api/stainless18-kotlin/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.CONFIGURE_ME_stainless_v0.api:stainless18-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.CONFIGURE_ME_stainless_v0.api</groupId>\n  <artifactId>stainless18-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nval client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build()\nval build: Build = client.builds().create(params)\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nval client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    // Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n    // Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\n    .fromEnv()\n    .project("example-project")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property               | Environment variable   | Required | Default value                 |\n| --------- | ----------------------------- | ---------------------- | -------- | ----------------------------- |\n| `apiKey`  | `stainless18.stainlessApiKey` | `STAINLESS_API_KEY`    | false    | -                             |\n| `baseUrl` | `stainless18.baseUrl`         | `STAINLESS18_BASE_URL` | true     | `"https://api.stainless.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\n\nval clientWithOptions: Stainless18Client = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Stainless18 API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.builds().create(...)` should be called with an instance of `BuildCreateParams`, and it     will return an instance of `Build`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nval client: Stainless18Client = Stainless18OkHttpClient.fromEnv()\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build()\nval build: Build = client.async().builds().create(params)\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18ClientAsync\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClientAsync\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\n// Configures using the `stainless18.stainlessApiKey` and `stainless18.baseUrl` system properties\n// Or configures using the `STAINLESS_API_KEY` and `STAINLESS18_BASE_URL` environment variables\nval client: Stainless18ClientAsync = Stainless18OkHttpClientAsync.fromEnv()\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build()\nval build: Build = client.builds().create(params)\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.http.Headers\nimport com.configure_me_stainless_v0.api.core.http.HttpResponseFor\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .project("stainless")\n    .revision("main")\n    .build()\nval build: HttpResponseFor<Build> = client.builds().withRawResponse().create(params)\n\nval statusCode: Int = build.statusCode()\nval headers: Headers = build.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.Build\n\nval parsedBuild: Build = build.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`Stainless18ServiceException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/Stainless18ServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`Stainless18IoException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/Stainless18IoException.kt): I/O networking errors.\n\n- [`Stainless18RetryableException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/Stainless18RetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`Stainless18InvalidDataException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/Stainless18InvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`Stainless18Exception`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/Stainless18Exception.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns a [`Sequence`](https://kotlinlang.org/docs/sequences.html)\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.BuildListPage\n\nval page: BuildListPage = client.builds().list()\npage.autoPager()\n    .take(50)\n    .forEach { build -> println(build) }\n```\n\nWhen using the asynchronous client, the method returns a [`Flow`](https://kotlinlang.org/docs/flow.html):\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.BuildListPageAsync\n\nval page: BuildListPageAsync = client.async().builds().list()\npage.autoPager()\n    .take(50)\n    .forEach { build -> println(build) }\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.Build\nimport com.configure_me_stainless_v0.api.models.builds.BuildListPage\n\nval page: BuildListPage = client.builds().list()\nwhile (true) {\n    for (build in page.items()) {\n        println(build)\n    }\n\n    if (!page.hasNextPage()) {\n        break\n    }\n\n    page = page.nextPage()\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `STAINLESS18_LOG` environment variable to   `info`:\n\n```sh\nexport STAINLESS18_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport STAINLESS18_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `stainless18-kotlin-core` is published with a     [configuration file](stainless18-kotlin-core/src/main/resources/META-INF/proguard/stainless18-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`Stainless18OkHttpClient`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClient.kt) or     [`Stainless18OkHttpClientAsync`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.Build\n\nval build: Build = client.builds().create(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport java.time.Duration\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\nimport java.time.Duration\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n### Environments\n\nThe SDK sends requests to the production by default. To send requests to a different     environment, configure the client like so:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .staging()\n    .build()\n```\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `stainless18-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`Stainless18Client`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18Client.kt), [`Stainless18ClientAsync`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientAsync.kt),             [`Stainless18ClientImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientImpl.kt), and [`Stainless18ClientAsyncImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `stainless18-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`Stainless18OkHttpClient`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClient.kt) and [`Stainless18OkHttpClientAsync`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClientAsync.kt), which             provide a way to construct [`Stainless18ClientImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientImpl.kt) and             [`Stainless18ClientAsyncImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientAsyncImpl.kt), respectively, using OkHttp\n- `stainless18-kotlin`\n  - Depends on and exposes the APIs of both `stainless18-kotlin-core` and `stainless18-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`stainless18-kotlin` dependency](#installation) with `stainless18-kotlin-core`\n2. Copy `stainless18-kotlin-client-okhttp`\'s [`OkHttpClient`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`Stainless18ClientImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientImpl.kt) or [`Stainless18ClientAsyncImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientAsyncImpl.kt), similarly to        [`Stainless18OkHttpClient`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClient.kt) or [`Stainless18OkHttpClientAsync`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`stainless18-kotlin` dependency](#installation) with `stainless18-kotlin-core`\n2. Write a class that implements the [`HttpClient`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/core/http/HttpClient.kt) interface\n3. Construct [`Stainless18ClientImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientImpl.kt) or [`Stainless18ClientAsyncImpl`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/client/Stainless18ClientAsyncImpl.kt), similarly to        [`Stainless18OkHttpClient`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClient.kt) or [`Stainless18OkHttpClientAsync`](stainless18-kotlin-client-okhttp/src/main/kotlin/com/configure_me_stainless_v0/api/client/okhttp/Stainless18OkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonValue\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonValue\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .targetCommitMessages(BuildCreateParams.TargetCommitMessages.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build()\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonValue\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .project(JsonValue.from(42))\n    .revision("main")\n    .build()\n```\n\nThe most straightforward way to create a [`JsonValue`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/core/Values.kt):\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonMissing\nimport com.configure_me_stainless_v0.api.models.builds.BuildCreateParams\n\nval params: BuildCreateParams = BuildCreateParams.builder()\n    .revision("string")\n    .project(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonBoolean\nimport com.configure_me_stainless_v0.api.core.JsonNull\nimport com.configure_me_stainless_v0.api.core.JsonNumber\nimport com.configure_me_stainless_v0.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.builds().create(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.core.JsonField\n\nval project: JsonField<String> = client.builds().create(params)._project()\n\nif (project.isMissing()) {\n  // The property is absent from the JSON response\n} else if (project.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = project.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = project.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`Stainless18InvalidDataException`](stainless18-kotlin-core/src/main/kotlin/com/configure_me_stainless_v0/api/errors/Stainless18InvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.Build\n\nval build: Build = client.builds().create(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.models.builds.Build\n\nval build: Build = client.builds().create(\n  params, RequestOptions.builder().responseValidation(true).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.configure_me_stainless_v0.api.client.Stainless18Client\nimport com.configure_me_stainless_v0.api.client.okhttp.Stainless18OkHttpClient\n\nval client: Stainless18Client = Stainless18OkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/stainless18-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'csharp',
    content:
      '# Stainless18 C# API Library\n\nThe Stainless18 C# SDK provides convenient access to the [Stainless18 REST API](https://www.stainless.com/docs/getting-started/quickstart-cli) from applications written in   C#.\n\n## Installation\n\n```bash\ngit clone git@github.com:stainless-sdks/stainless18-csharp.git\ndotnet add reference stainless18-csharp/src/StainlessV0\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nStainless18Client client = new();\n\nBuildCreateParams parameters = new()\n{\n    Project = "stainless",\n    Revision = "main",\n};\n\nvar build = await client.Builds.Create(parameters);\n\nConsole.WriteLine(build);\n```',
  },
  {
    language: 'cli',
    content:
      "# Stainless18 CLI\n\nThe official CLI for the [Stainless18 REST API](https://www.stainless.com/docs/getting-started/quickstart-cli).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Homebrew\n\n~~~sh\nbrew install stainless-api/tap/stl\n~~~\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stainless-api/stainless-api-cli/cmd/stl@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nstl [resource] <command> [flags...]\n~~~\n\n~~~sh\nstl builds create \\\n  --api-key 'My API Key' \\\n  --project stainless \\\n  --revision main\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required | Default value |\n| -------------------- | -------- | ------------- |\n| `STAINLESS_API_KEY`  | no       | `null`        |\n\n### Global flags\n\n- `--api-key` (can also be set with `STAINLESS_API_KEY` env var)\n- `--project`\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nstl <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nstl <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nstl <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nstl <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nstl <command> --arg @data://file.txt\n~~~\n",
  },
  {
    language: 'php',
    content:
      '# Stainless18 PHP API Library\n\nThe Stainless18 PHP library provides convenient access to the Stainless18 REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:stainless-sdks/stainless18-php.git"\n    }\n  ],\n  "require": {\n    "org-placeholder/stainless-v0": "dev-main"\n  }\n}\n```\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(\n  apiKey: getenv(\'STAINLESS_API_KEY\') ?: \'My API Key\', environment: \'staging\'\n);\n\n$build = $client->builds->create(project: \'stainless\', revision: \'main\');\n\nvar_dump($build->id);\n```',
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
