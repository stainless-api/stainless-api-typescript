# Changelog

## 0.1.0-alpha.12 (2025-08-12)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* add timestamp to builds api ([8e63219](https://github.com/stainless-api/stainless-api-typescript/commit/8e6321972c972be1a366fd532c24e406e2f96161))
* **api:** add check step model ([4e28836](https://github.com/stainless-api/stainless-api-typescript/commit/4e28836d14a812227a7db451e90db3f8489de6e4))
* **api:** add FileInput model ([b12f5a8](https://github.com/stainless-api/stainless-api-typescript/commit/b12f5a8f41326a16a0dabb29edfab64a9a2a66c1))
* **api:** add models ([f503b4c](https://github.com/stainless-api/stainless-api-typescript/commit/f503b4c3be3b1ddedf224cdbfde4e7d254323949))
* **api:** add more models ([818efd0](https://github.com/stainless-api/stainless-api-typescript/commit/818efd095889ae076b0e8623626ea6f1ed9c31ab))
* **api:** add staging environment ([fdbd3aa](https://github.com/stainless-api/stainless-api-typescript/commit/fdbd3aaf8594ef5c451933ba4b7e9419ed9b9450))
* **api:** discrim like this ([df5155c](https://github.com/stainless-api/stainless-api-typescript/commit/df5155caa6efc0732e14193c7ea03c5c5ad7828c))
* **api:** don't default to "main" branch ([4cb1928](https://github.com/stainless-api/stainless-api-typescript/commit/4cb19288979480d5fac8e7b25f27170405f1d91f))
* **api:** manual updates ([1e6eee5](https://github.com/stainless-api/stainless-api-typescript/commit/1e6eee5b94e1c992085d74aeed33f3346cd10003))
* **api:** manual updates ([fa2cfdf](https://github.com/stainless-api/stainless-api-typescript/commit/fa2cfdf1d05e610588d176b56b99354fe567a02c))
* **api:** manual updates ([19ff34d](https://github.com/stainless-api/stainless-api-typescript/commit/19ff34d2608a1509322c4e50c880e82fdeebff4c))
* **api:** manual updates ([a8d7964](https://github.com/stainless-api/stainless-api-typescript/commit/a8d796418b8c92b72b59b9ab1c73806723036ddf))
* **api:** manual updates ([91e6b32](https://github.com/stainless-api/stainless-api-typescript/commit/91e6b329986dcf343e6cfb0282da4d9bda889776))
* **api:** manual updates ([54e2cdb](https://github.com/stainless-api/stainless-api-typescript/commit/54e2cdb8d8b9b044b4237db42762768c85ad8e2f))
* **C#, PHP:** codegen stats ([eb15616](https://github.com/stainless-api/stainless-api-typescript/commit/eb156164cec1f5dd5f208b2069a0d8ae43ae6d1e))
* Codegen(php): unset optional parameters in constructor ([55967d5](https://github.com/stainless-api/stainless-api-typescript/commit/55967d5c65d5ef7736b10afbfa7c5c93b4311014))
* flesh out project branches endpoints ([f609ac7](https://github.com/stainless-api/stainless-api-typescript/commit/f609ac72c11bc67e47bafc0dd339e5072902b8ce))
* **mcp:** add logging when environment variable is set ([5039c32](https://github.com/stainless-api/stainless-api-typescript/commit/5039c320334c05b8693a00c445a81926c96f3132))
* **mcp:** add unix socket option for remote MCP ([e90cea6](https://github.com/stainless-api/stainless-api-typescript/commit/e90cea690700d047331917e52ef1a20b6fdfdbd9))
* **mcp:** remote server with passthru auth ([25ebe60](https://github.com/stainless-api/stainless-api-typescript/commit/25ebe606f12120c9240bb627ad8ae010232f0b61))
* **mcp:** support filtering tool results by a jq expression ([3ce621d](https://github.com/stainless-api/stainless-api-typescript/commit/3ce621d03b8a75e06bab4a70f5aac08b46acd59b))
* php: generate stub union classes with discrimminator info ([6211878](https://github.com/stainless-api/stainless-api-typescript/commit/62118780200757b7f6eb94a27eee353eeaec4d1b))
* productionize repo caching ([d1bdd86](https://github.com/stainless-api/stainless-api-typescript/commit/d1bdd86fe9291cc75a54d2b2a1da8dc079634993))


### Bug Fixes

* **api:** catch more errors ([6255a02](https://github.com/stainless-api/stainless-api-typescript/commit/6255a02d2e2f5cda518f942ef42300a64b40c267))
* **java:** ensure error handling always occurs ([4eb767c](https://github.com/stainless-api/stainless-api-typescript/commit/4eb767c1f3d03fda46d9029bd2122684fa735b84))
* **mcp:** avoid sending `jq_filter` to base API ([85fd1d5](https://github.com/stainless-api/stainless-api-typescript/commit/85fd1d51101066bb6e285d28cd2740b345e0e5eb))
* **mcp:** fix bug in header handling ([344163a](https://github.com/stainless-api/stainless-api-typescript/commit/344163a18629fce7f66fdc2437b9c016f45c6257))
* **mcp:** fix tool description of jq_filter ([a92e0c2](https://github.com/stainless-api/stainless-api-typescript/commit/a92e0c2e79d4a3ac7386f6163008c16e0f3297d3))
* **mcp:** include required section for top-level properties and support naming transformations ([d6ec40e](https://github.com/stainless-api/stainless-api-typescript/commit/d6ec40e7052a6077629d3c55dbd372e02b9c14e1))
* **mcp:** relax input type for asTextContextResult ([8bb8201](https://github.com/stainless-api/stainless-api-typescript/commit/8bb820122ad75126ff6c88124e0af8c1887f9d1d))
* **mcp:** reverse validJson capability option and limit scope ([653bd8d](https://github.com/stainless-api/stainless-api-typescript/commit/653bd8d33fada02157202c1e80390c73dfe2627e))
* **mcp:** support jq filtering on cloudflare workers ([075f9da](https://github.com/stainless-api/stainless-api-typescript/commit/075f9daa3a0c5fd0e6ff0da9ebe2ce3e8ec9cb24))


### Chores

* **internal:** codegen related update ([2bac3a2](https://github.com/stainless-api/stainless-api-typescript/commit/2bac3a2c685b6f9664b9d98de3572324320fb8ee))
* **internal:** codegen related update ([fe68259](https://github.com/stainless-api/stainless-api-typescript/commit/fe68259438f3db5b8a994dc33630c84a5396ae72))
* **internal:** codegen related update ([7b4fa85](https://github.com/stainless-api/stainless-api-typescript/commit/7b4fa857a86e4c49f1405a2ed6631bed7387a01e))
* **internal:** codegen related update ([7dc4748](https://github.com/stainless-api/stainless-api-typescript/commit/7dc4748dfc988d5f6dff153a2fb658f92213f6b2))
* **internal:** move publish config ([0b13ceb](https://github.com/stainless-api/stainless-api-typescript/commit/0b13cebc68850c93ff1953c00e7cae251d125b34))
* **internal:** remove redundant imports config ([6328f05](https://github.com/stainless-api/stainless-api-typescript/commit/6328f057271afc8c8f7ec2807e16caa6b369d042))
* **internal:** update comment in script ([017c2e8](https://github.com/stainless-api/stainless-api-typescript/commit/017c2e8494251ea492ad32c5b664770783baa1a6))
* make some internal functions async ([a8433ef](https://github.com/stainless-api/stainless-api-typescript/commit/a8433ef35afab98e9c0d99aa3dd130fcf3047a3f))
* **mcp:** formatting ([33c572a](https://github.com/stainless-api/stainless-api-typescript/commit/33c572a0957229da7ac9ca8b96e143d1a472c007))
* **mcp:** refactor streamable http transport ([9e9f468](https://github.com/stainless-api/stainless-api-typescript/commit/9e9f4689eed8bc3712b511241398153e17752f38))
* **mcp:** rework imports in tools ([a54a6f4](https://github.com/stainless-api/stainless-api-typescript/commit/a54a6f413824e2c9e1c73fc634ec7d822c37233b))
* move sdkjson generation api out of v0 scope ([c42eba6](https://github.com/stainless-api/stainless-api-typescript/commit/c42eba6252eadc02392dc121b20597dbc4fd1058))
* **ts:** reorder package.json imports ([e58856e](https://github.com/stainless-api/stainless-api-typescript/commit/e58856e8f8cbb977595b53323958b0cdb9a2515b))
* update @stainless-api/prism-cli to v5.15.0 ([79a7d9e](https://github.com/stainless-api/stainless-api-typescript/commit/79a7d9edaeef60665f3074a34fe4dddd20af1ca2))
* update mcp documentation ([fa562d4](https://github.com/stainless-api/stainless-api-typescript/commit/fa562d4acb4fdf8f483d519f663ac213f28227ad))


### Documentation

* add pagination segment ([c0a456b](https://github.com/stainless-api/stainless-api-typescript/commit/c0a456b27a0f1104b8096dcf6954f841686fe8c5))

## 0.1.0-alpha.11 (2025-07-07)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* add multipart form support to HAR snippets ([c043687](https://github.com/stainless-api/stainless-api-typescript/commit/c043687d7e799e4cb1b1fb3382f3649d459f6299))
* **api:** manual updates ([6c0b3ca](https://github.com/stainless-api/stainless-api-typescript/commit/6c0b3ca6afb8e7ea6fd8dffeb3b5f6dc8c463ccf))
* **api:** punch v0 api for sdk previews ([2b37773](https://github.com/stainless-api/stainless-api-typescript/commit/2b37773f2e5ac7ce0d698e4a989107fac977ebf3))
* **api:** sort org projects by creation time ([eb5909e](https://github.com/stainless-api/stainless-api-typescript/commit/eb5909ebb4e9ac06b008625e778a45590aedb2a3))
* make build api return documented specs as urls ([a25d287](https://github.com/stainless-api/stainless-api-typescript/commit/a25d287a46b99eb56a378086aac917b2ede3612e))


### Chores

* add docs to RequestOptions type ([f8c8bdc](https://github.com/stainless-api/stainless-api-typescript/commit/f8c8bdc65a046977d5fc007b9c5668d813286fc4))
* configure new SDK language ([5623733](https://github.com/stainless-api/stainless-api-typescript/commit/5623733743fb753fb66d2447b18afd1919335bc6))
* **internal:** codegen related update ([f00bea3](https://github.com/stainless-api/stainless-api-typescript/commit/f00bea39ea62699b4b2fb8904ee7ebed98b8b8e6))
* **internal:** codegen related update ([d7c6cea](https://github.com/stainless-api/stainless-api-typescript/commit/d7c6ceaccee206d3056a8cdf73c4a626179535e1))

## 0.1.0-alpha.10 (2025-07-02)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* add unwrapFile ([#2](https://github.com/stainless-api/stainless-api-typescript/issues/2)) ([75f71a2](https://github.com/stainless-api/stainless-api-typescript/commit/75f71a2486ef8db3c6c3c2684bf4edaba6fc758b))

## 0.1.0-alpha.9 (2025-07-02)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** add proper pagination ([0cf6809](https://github.com/stainless-api/stainless-api-typescript/commit/0cf680917852d9757f157d38ee608039abff8f50))
* **api:** add staging environment ([4b6d770](https://github.com/stainless-api/stainless-api-typescript/commit/4b6d77045a3b9c0683fb0fee8cdf900d34f53e27))


### Chores

* **ci:** only run for pushes and fork pull requests ([9f9f180](https://github.com/stainless-api/stainless-api-typescript/commit/9f9f180c2fe3919de021486b7602550a085b6388))
* **client:** improve path param validation ([b9f7c44](https://github.com/stainless-api/stainless-api-typescript/commit/b9f7c446279fa9f216c8d57d82c919f029275321))
* **internal:** codegen related update ([3e3dc52](https://github.com/stainless-api/stainless-api-typescript/commit/3e3dc5259ed5f54d45635b084b3506d91c6692a2))

## 0.1.0-alpha.8 (2025-06-27)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Bug Fixes

* handle docker image not existing yet ([5a8c85e](https://github.com/stainless-api/stainless-api-typescript/commit/5a8c85e5da937dbf9d22fb3b5dddc2076699aeb2))

## 0.1.0-alpha.7 (2025-06-27)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([4bdea81](https://github.com/stainless-api/stainless-api-typescript/commit/4bdea818f51c152264231c4a3af07a6e5f16bfdd))
* **client:** get fetchOptions type more reliably ([3c84e34](https://github.com/stainless-api/stainless-api-typescript/commit/3c84e34d3e1a00c1c8a156ef5ac9c73aa4b6376e))


### Chores

* enable MCP docker publishing ([e2a5578](https://github.com/stainless-api/stainless-api-typescript/commit/e2a5578d75cf1c2d98d90675cccb6b47e4f5317a))

## 0.1.0-alpha.6 (2025-06-25)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** add diagnostics endpoint ([3363b54](https://github.com/stainless-api/stainless-api-typescript/commit/3363b5472c55301fc2ddf46cf781bcfa06b5a1b3))
* **api:** api update ([1f0826e](https://github.com/stainless-api/stainless-api-typescript/commit/1f0826e57fcea2c20ce9fc408b5b479bd21e5ff8))
* **api:** make project nullable ([4606cf0](https://github.com/stainless-api/stainless-api-typescript/commit/4606cf04e7865acf5cd2ea4588206b06c63ec55f))
* **api:** manual updates ([00345eb](https://github.com/stainless-api/stainless-api-typescript/commit/00345ebe7f05b3473ba4cd38e33b582870b65de5))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([a5ba371](https://github.com/stainless-api/stainless-api-typescript/commit/a5ba37150d2b318efa3f4c0859fc10d9673d440a))


### Chores

* change publish docs url ([1a84be8](https://github.com/stainless-api/stainless-api-typescript/commit/1a84be8296f278d1566aa2e677cf2c795bcc1ced))


### Refactors

* **types:** replace Record with mapped types ([79d023f](https://github.com/stainless-api/stainless-api-typescript/commit/79d023feaf318a60a5fc880043a85ec731ae9f83))

## 0.1.0-alpha.5 (2025-06-19)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** generate mcp server ([6b532b4](https://github.com/stainless-api/stainless-api-typescript/commit/6b532b4594963fcbeaf912ecb25dd50d8ead24b3))
* **api:** manual updates ([1c332fb](https://github.com/stainless-api/stainless-api-typescript/commit/1c332fb9e2858a2cded00c620ebedba036392876))
* **api:** update environment variable ([bec2915](https://github.com/stainless-api/stainless-api-typescript/commit/bec291514b8b286f36435e454a5ba7e75a386d8e))
* **client:** add support for endpoint-specific base URLs ([3680772](https://github.com/stainless-api/stainless-api-typescript/commit/3680772bd86cbf0e07c500d1c5fa9f87b5f54a2e))
* sdkjson generation API ([d941cc7](https://github.com/stainless-api/stainless-api-typescript/commit/d941cc7c8351e7a0fe3efd942673a4ff791153c7))


### Bug Fixes

* **ci:** fix v0 oas generation ([4d5b7fd](https://github.com/stainless-api/stainless-api-typescript/commit/4d5b7fdeda500c8199e91ed7e565a153aa98f1ad))
* **cli:** fix cli headers ([f1ced7c](https://github.com/stainless-api/stainless-api-typescript/commit/f1ced7cb8811c245ccb960418814dad79ebe7c8e))


### Chores

* **ci:** enable for pull requests ([a410c3d](https://github.com/stainless-api/stainless-api-typescript/commit/a410c3d0594fe89e2fdb47b0535bb85e29c4d927))
* **client:** refactor imports ([27b8362](https://github.com/stainless-api/stainless-api-typescript/commit/27b8362a331a880f4b3e001d8cf02d97fc82405a))
* **internal:** codegen related update ([722916f](https://github.com/stainless-api/stainless-api-typescript/commit/722916f36df94c403ccfa1c65cbfec28623cab3d))
* **internal:** codegen related update ([a1b163b](https://github.com/stainless-api/stainless-api-typescript/commit/a1b163b42c493e334ea6d5f0d5541d14d5006d99))
* **internal:** codegen related update ([530c73a](https://github.com/stainless-api/stainless-api-typescript/commit/530c73a63a5632f1dc8a5a196739a4fbb65e2f13))
* **readme:** update badges ([17986b2](https://github.com/stainless-api/stainless-api-typescript/commit/17986b20e4bda5ef69b6d8d7184c1a7603cd9a74))
* **readme:** use better example snippet for undocumented params ([4b6a614](https://github.com/stainless-api/stainless-api-typescript/commit/4b6a614b86934815a4aa9e33b254739e45926314))

## 0.1.0-alpha.4 (2025-06-16)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** add diagnostics to build object ([754154c](https://github.com/stainless-api/stainless-api-typescript/commit/754154c87ae5a1a792fa30dabdad78203d8ccfde))
* **api:** add v0 project create api ([f7be25c](https://github.com/stainless-api/stainless-api-typescript/commit/f7be25cf7cc90a662296b31cecd3ba48dc93a7d7))
* **api:** change v0 path param projectName -&gt; project ([40cb0cc](https://github.com/stainless-api/stainless-api-typescript/commit/40cb0cc18df86f0a17b5a57a9e84c8bb3e0e8e5a))
* **api:** manual updates ([130dd92](https://github.com/stainless-api/stainless-api-typescript/commit/130dd92c7fe4444059daf5ea17a2611abe75997e))
* **api:** manual updates ([56c37c6](https://github.com/stainless-api/stainless-api-typescript/commit/56c37c6452fae494d814550eb29318d76a4b04d1))


### Bug Fixes

* changes har request format for snippets API some more ([619c784](https://github.com/stainless-api/stainless-api-typescript/commit/619c78412f187ab66b699ad7a7718117c9561dd0))
* compat with more runtimes ([9ce1204](https://github.com/stainless-api/stainless-api-typescript/commit/9ce1204a42b43ed81684ce0af602907d6b19f71f))
* publish script — handle NPM errors correctly ([cbc3fcc](https://github.com/stainless-api/stainless-api-typescript/commit/cbc3fcc2d669ed33212ece031289342ac547e4ff))


### Chores

* adjust eslint.config.mjs ignore pattern ([39b2b88](https://github.com/stainless-api/stainless-api-typescript/commit/39b2b88709ce1110380d26aac89ff0a5d44eecc4))
* avoid type error in certain environments ([0e2a217](https://github.com/stainless-api/stainless-api-typescript/commit/0e2a2175e83b686df6e108777cb72a74adcb3959))
* **deps:** bump eslint-plugin-prettier ([7e0d104](https://github.com/stainless-api/stainless-api-typescript/commit/7e0d10495fcc59a4e341985846d5a70d817eb9a0))
* **docs:** grammar improvements ([22df641](https://github.com/stainless-api/stainless-api-typescript/commit/22df641caf538870dae2ad5763492a936e355de3))
* **docs:** use top-level-await in example snippets ([563dbc4](https://github.com/stainless-api/stainless-api-typescript/commit/563dbc495a320b64620a41f394e7d982cc486a98))
* improve publish-npm script --latest tag logic ([81c8585](https://github.com/stainless-api/stainless-api-typescript/commit/81c8585dd62ec5d85dfebf5b1b7ee631107512c2))
* **internal:** add pure annotations, make base APIResource abstract ([a0ed564](https://github.com/stainless-api/stainless-api-typescript/commit/a0ed564beee9f24c10a90eae200cb9df18957c2d))
* **internal:** codegen related update ([434dc67](https://github.com/stainless-api/stainless-api-typescript/commit/434dc67c5acbd6852218902314b644b0a7974c24))
* **internal:** codegen related update ([9c78aaf](https://github.com/stainless-api/stainless-api-typescript/commit/9c78aaf1bd5d24e869670608af35c882f0628b2a))
* **internal:** codegen related update ([1d0e5ff](https://github.com/stainless-api/stainless-api-typescript/commit/1d0e5ff513aebb3d8df7a16c2645a11399122157))
* **internal:** fix readablestream types in node 20 ([29ec6b7](https://github.com/stainless-api/stainless-api-typescript/commit/29ec6b7a76282680c8ba3c4974b5931d780834cf))
* **internal:** update jest config ([1870539](https://github.com/stainless-api/stainless-api-typescript/commit/1870539fbe04bda0311d932b9136569d0708cad7))


### Refactors

* move build_target_outputs to builds.target_outputs ([ad9735f](https://github.com/stainless-api/stainless-api-typescript/commit/ad9735f453e17f1a518c159eea09c49a5171bbab))

## 0.1.0-alpha.3 (2025-05-19)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** add documented spec to build object ([1ba5502](https://github.com/stainless-api/stainless-api-typescript/commit/1ba5502e4aa1d7d73593ad456140c64956aceb5d))

## 0.1.0-alpha.2 (2025-05-13)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/stainless-api/stainless-api-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** add build compare to v0 ([2e583d1](https://github.com/stainless-api/stainless-api-typescript/commit/2e583d15ebcd52bfe43196fe58dac79f45761e08))
* **api:** configs ([021eac6](https://github.com/stainless-api/stainless-api-typescript/commit/021eac6182c5f01bf9dd2c31f5277fa6cd159a1b))
* **api:** enable macos publishing ([77ebd7c](https://github.com/stainless-api/stainless-api-typescript/commit/77ebd7c56b71f35e78921d3376b8daf568e39c50))
* **api:** manual updates ([118d1d1](https://github.com/stainless-api/stainless-api-typescript/commit/118d1d15878c6737307d4796535a74a8a5fab39a))
* **api:** manual updates ([41114a1](https://github.com/stainless-api/stainless-api-typescript/commit/41114a19b3bd85fc0cc5ba7a5655275f5ac97b99))
* **api:** manual updates ([056d6bf](https://github.com/stainless-api/stainless-api-typescript/commit/056d6bf0862e908fddabea49cee3ec4e35985060))
* **api:** manual updates ([54866aa](https://github.com/stainless-api/stainless-api-typescript/commit/54866aa84f9bf8e27acfc948b94175975af61551))
* **api:** parent build id ([894f36b](https://github.com/stainless-api/stainless-api-typescript/commit/894f36b21905f492a5354b0a1d87f3f30346fae4))
* **api:** rename api key ([642780a](https://github.com/stainless-api/stainless-api-typescript/commit/642780a0c31945be6b2186abf07bb24f6d2013c2))
* **api:** use correct hashes ([df1c791](https://github.com/stainless-api/stainless-api-typescript/commit/df1c791cc9fece7a26b60ea5f17a0b4a5772b289))
* **client:** add withOptions helper ([e7ec49d](https://github.com/stainless-api/stainless-api-typescript/commit/e7ec49d3c6f8fe87ad5d11c77da697e50fa9e9fb))


### Bug Fixes

* **client:** always overwrite when merging headers ([4d180e0](https://github.com/stainless-api/stainless-api-typescript/commit/4d180e0da23b27c22f8e8632a5f842448ac0cdc5))
* update request schema for Postman webhook ([2c590eb](https://github.com/stainless-api/stainless-api-typescript/commit/2c590eb86e83dcc54d30b3104a2e7de9299c35b6))


### Chores

* bump go sdk version ([b7f0264](https://github.com/stainless-api/stainless-api-typescript/commit/b7f02648ab3791d3a566a1d790b17d40dae10e9a))
* **ci:** add timeout thresholds for CI jobs ([7d94fbd](https://github.com/stainless-api/stainless-api-typescript/commit/7d94fbd1d7173a27d554ff6e4d033e8c76a45e35))
* **ci:** only use depot for staging repos ([5cd101b](https://github.com/stainless-api/stainless-api-typescript/commit/5cd101b5e1e8088d589f377a637f5a9dd2d6ac34))
* **client:** drop support for EOL node versions ([8a3c07b](https://github.com/stainless-api/stainless-api-typescript/commit/8a3c07bbf7a0e87abaf0ebf453b2ff33181bf197))
* **internal:** codegen related update ([d9bd40e](https://github.com/stainless-api/stainless-api-typescript/commit/d9bd40e22f070cbda2d5dad163c50dd1a3ecc369))
* **internal:** codegen related update ([79c9751](https://github.com/stainless-api/stainless-api-typescript/commit/79c9751e084e40662779c187eedc8720d2ddd291))
* **internal:** refactor utils ([c033a80](https://github.com/stainless-api/stainless-api-typescript/commit/c033a8026d5757a33ae4e4540e1aac51c861ed37))
* **internal:** share typescript helpers ([b41cddd](https://github.com/stainless-api/stainless-api-typescript/commit/b41cddd3715e545ad5917ac1328a81fd3ddbe5b1))
* **package:** remove engines ([c089302](https://github.com/stainless-api/stainless-api-typescript/commit/c08930299ad02892bd6a3714c76ac4969cbb78db))
* **perf:** faster base64 decoding ([f7b9d5d](https://github.com/stainless-api/stainless-api-typescript/commit/f7b9d5d50fff5205d247d3c5987ad000f08f4f6e))


### Documentation

* **readme:** fix typo ([412d6bc](https://github.com/stainless-api/stainless-api-typescript/commit/412d6bc1f9f1816ed3cffd6412572245ce9cc6f2))

## 0.1.0-alpha.1 (2025-04-21)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/stainless-api/stainless-api-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* add typescript ([c0bb679](https://github.com/stainless-api/stainless-api-typescript/commit/c0bb6791b7f2fca7c20d97ac00e879184a9b22e2))
* add typescript ([d46df16](https://github.com/stainless-api/stainless-api-typescript/commit/d46df1603e09620ee06db15ee6dc05abd3d9193a))
* **api:** fix enum name conflict maybe ([e31eca9](https://github.com/stainless-api/stainless-api-typescript/commit/e31eca9fb75f5ffbe28adc0939233cde18ee3d13))
* **api:** remove discriminator thing ([f5da06c](https://github.com/stainless-api/stainless-api-typescript/commit/f5da06c1934137696b29fe5a708efb4fbffb2985))
* change list endpoint ([2f25166](https://github.com/stainless-api/stainless-api-typescript/commit/2f2516691557541a6bea1cc73a71945054325ebf))
