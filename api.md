# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>

Methods:

- <code title="get /v0/projects/{projectName}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectName) -> ProjectRetrieveResponse</code>
- <code title="patch /v0/projects/{projectName}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectName, { ...params }) -> ProjectUpdateResponse</code>

## Branches

Types:

- <code><a href="./src/resources/projects/branches.ts">ProjectBranch</a></code>

Methods:

- <code title="post /v0/projects/{project}/branches">client.projects.branches.<a href="./src/resources/projects/branches.ts">create</a>(project, { ...params }) -> ProjectBranch</code>
- <code title="get /v0/projects/{project}/branches/{branch}">client.projects.branches.<a href="./src/resources/projects/branches.ts">retrieve</a>(branch, { ...params }) -> ProjectBranch</code>

## Configs

Types:

- <code><a href="./src/resources/projects/configs.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/configs.ts">ConfigGuessResponse</a></code>

Methods:

- <code title="get /v0/projects/{project}/configs">client.projects.configs.<a href="./src/resources/projects/configs.ts">retrieve</a>(project, { ...params }) -> ConfigRetrieveResponse</code>
- <code title="post /v0/projects/{project}/configs/guess">client.projects.configs.<a href="./src/resources/projects/configs.ts">guess</a>(project, { ...params }) -> ConfigGuessResponse</code>

# Builds

Types:

- <code><a href="./src/resources/builds.ts">BuildObject</a></code>
- <code><a href="./src/resources/builds.ts">BuildTarget</a></code>
- <code><a href="./src/resources/builds.ts">BuildListResponse</a></code>

Methods:

- <code title="post /v0/builds">client.builds.<a href="./src/resources/builds.ts">create</a>({ ...params }) -> BuildObject</code>
- <code title="get /v0/builds/{buildId}">client.builds.<a href="./src/resources/builds.ts">retrieve</a>(buildID) -> BuildObject</code>
- <code title="get /v0/builds">client.builds.<a href="./src/resources/builds.ts">list</a>({ ...params }) -> BuildListResponse</code>

# BuildTargetOutputs

Types:

- <code><a href="./src/resources/build-target-outputs.ts">BuildTargetOutputRetrieveResponse</a></code>

Methods:

- <code title="get /v0/build_target_outputs">client.buildTargetOutputs.<a href="./src/resources/build-target-outputs.ts">retrieve</a>({ ...params }) -> BuildTargetOutputRetrieveResponse</code>
