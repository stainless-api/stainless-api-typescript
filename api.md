# Shared

Types:

- <code><a href="./src/resources/shared.ts">FileInput</a></code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /v0/projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /v0/projects/{project}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>({ ...params }) -> ProjectRetrieveResponse</code>
- <code title="patch /v0/projects/{project}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>({ ...params }) -> ProjectUpdateResponse</code>
- <code title="get /v0/projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponsesPage</code>

## Branches

Types:

- <code><a href="./src/resources/projects/branches.ts">ProjectBranch</a></code>

Methods:

- <code title="post /v0/projects/{project}/branches">client.projects.branches.<a href="./src/resources/projects/branches.ts">create</a>({ ...params }) -> ProjectBranch</code>
- <code title="get /v0/projects/{project}/branches/{branch}">client.projects.branches.<a href="./src/resources/projects/branches.ts">retrieve</a>(branch, { ...params }) -> ProjectBranch</code>

## Configs

Types:

- <code><a href="./src/resources/projects/configs.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/configs.ts">ConfigGuessResponse</a></code>

Methods:

- <code title="get /v0/projects/{project}/configs">client.projects.configs.<a href="./src/resources/projects/configs.ts">retrieve</a>({ ...params }) -> ConfigRetrieveResponse</code>
- <code title="post /v0/projects/{project}/configs/guess">client.projects.configs.<a href="./src/resources/projects/configs.ts">guess</a>({ ...params }) -> ConfigGuessResponse</code>

# Builds

Types:

- <code><a href="./src/resources/builds/builds.ts">BuildObject</a></code>
- <code><a href="./src/resources/builds/builds.ts">BuildTarget</a></code>
- <code><a href="./src/resources/builds/builds.ts">BuildCompareResponse</a></code>

Methods:

- <code title="post /v0/builds">client.builds.<a href="./src/resources/builds/builds.ts">create</a>({ ...params }) -> BuildObject</code>
- <code title="get /v0/builds/{buildId}">client.builds.<a href="./src/resources/builds/builds.ts">retrieve</a>(buildID) -> BuildObject</code>
- <code title="get /v0/builds">client.builds.<a href="./src/resources/builds/builds.ts">list</a>({ ...params }) -> BuildObjectsPage</code>
- <code title="post /v0/builds/compare">client.builds.<a href="./src/resources/builds/builds.ts">compare</a>({ ...params }) -> BuildCompareResponse</code>

## Diagnostics

Types:

- <code><a href="./src/resources/builds/diagnostics.ts">DiagnosticListResponse</a></code>

Methods:

- <code title="get /v0/builds/{buildId}/diagnostics">client.builds.diagnostics.<a href="./src/resources/builds/diagnostics.ts">list</a>(buildID, { ...params }) -> DiagnosticListResponsesPage</code>

## TargetOutputs

Types:

- <code><a href="./src/resources/builds/target-outputs.ts">TargetOutputRetrieveResponse</a></code>

Methods:

- <code title="get /v0/build_target_outputs">client.builds.targetOutputs.<a href="./src/resources/builds/target-outputs.ts">retrieve</a>({ ...params }) -> TargetOutputRetrieveResponse</code>

# Orgs

Types:

- <code><a href="./src/resources/orgs.ts">OrgRetrieveResponse</a></code>
- <code><a href="./src/resources/orgs.ts">OrgListResponse</a></code>

Methods:

- <code title="get /v0/orgs/{org}">client.orgs.<a href="./src/resources/orgs.ts">retrieve</a>(org) -> OrgRetrieveResponse</code>
- <code title="get /v0/orgs">client.orgs.<a href="./src/resources/orgs.ts">list</a>() -> OrgListResponse</code>
