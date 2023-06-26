---
outline: [2, 3]
---

# Rationale

## How does this CIP achieve its goals?

This section presents the resolutions to the four problems mentioned in the [motivation](/dat-metadata-standard.html#motivation-why-is-this-cip-necessary) section of this CIP. Given that this standard has already been embraced by a few collections, real-world examples are used to demonstrate the implementation and advantages of DATs.

## Solution 1: **Storage limit**

The distributed nature of DATs allows bigger on-chain codebases with dependencies. The separation of code and metadata effectively doubles the available space.

Additionally, dependencies can be stored in chunks, which allows for the realistic storage of up to fifty times more code than was previously possible.

::: details
It is important to note that the increase of storage capacity applies to _renderer_ tokens, not _scene_ tokens. Therefore, the additional space is only available for code used by the _renderer_ and not for static data like images in _scene_ tokens.
:::

### Example 1

This collection contains 3409 tokens and the first one ever minted using the DAT Metadata Standard.

| token type                 |   token size |   minted | collection size |
| -------------------------- | -----------: | -------: | --------------: |
| **scene**                  |      1.42 kB |     3409 |      4840.78 kB |
| **renderer (JS/CSS/HTML)** |     12.85 kB |        1 |        12.85 kB |
| **lib dependency (JS)**    |     11.77 kB |        1 |        11.77 kB |
| **font dependency 1**      |     15.35 kB |        1 |        15.35 kB |
| **font dependency 2**      |     15.24 kB |        1 |        15.24 kB |
| **total**                  | **56.63 kB** | **3413** |  **4895.99 kB** |

::: details
Policy id: `5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5`

Links to the mentioned tokens:

- one of the scene tokens: [theperfectnft_042_002_tbd](https://cardanoscan.io/token/5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5.theperfectnft_042_002_tbd?tab=minttransactions)
- renderer: [renderer](https://cardanoscan.io/token/5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5.renderer?tab=minttransactions)
- lib dependency: [petit@0.0.0-alpha](https://cardanoscan.io/token/0f33b52d548995e9f22be019db9ef1f792c51b1c?tab=minttransactions)
- font dependency 1: [karlaregular](https://cardanoscan.io/token/3333c36c4ba8b1ebc504e6865b3950ef0a101707b7e7e7de0b4ef323.karlaregular?tab=minttransactions)
- font dependency 2: [cutivemonoregular](https://cardanoscan.io/token/3333c36c4ba8b1ebc504e6865b3950ef0a101707b7e7e7de0b4ef323.cutivemonoregular?tab=minttransactions)
  :::

### Example 2

This collection contains 512 tokens and the second one ever minted using the DAT Metadata Standard.

| token type                 |   token size |  minted | collection size |
| -------------------------- | -----------: | ------: | --------------: |
| **scene**                  |      2.44 kB |     512 |      1249.50 kB |
| **renderer (JS/CSS/HTML)** |      9.72 kB |       1 |        12.85 kB |
| **lib dependency (JS)**    |     11.77 kB |       1 |        11.77 kB |
| **font dependency**        |     15.35 kB |       1 |        15.35 kB |
| **total**                  | **39.28 kB** | **515** |  **1289.47 kB** |

::: details
Policy id: `51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b`

Links to the mentioned tokens:

- one of the scene tokens: [theperfectnft_042](https://cardanoscan.io/token/51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b.theperfectnft_042?tab=minttransactions)
- renderer: [renderer](https://cardanoscan.io/token/51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b.renderer?tab=minttransactions)
- lib dependency: [petit@0.0.0-alpha](https://cardanoscan.io/token/0f33b52d548995e9f22be019db9ef1f792c51b1c?tab=minttransactions)
- font dependency: [cutivemonoregular](https://cardanoscan.io/token/3333c36c4ba8b1ebc504e6865b3950ef0a101707b7e7e7de0b4ef323.cutivemonoregular?tab=minttransactions)
  :::

## Solution 2: **Inefficient use of block space**

By looking at three real-world cases, it becomes clear that using DATs requires roughly 90% less block space than using isolated monolithic NFTs.

The data used in the following examples is extracted from existing token collections. The first two examples used monolithic NFTs, while the third one used DATs.

### Example 1

This collection contains 17190 tokens as monolithic HTML NFTs.

|                        | renderer size | token size | total kB | total MB |
| ---------------------- | ------------: | ---------: | -------: | -------: |
| **as monolithic NFTs** |           N/A |    5.34 kB | 91792 kB |  89.6 MB |
| **as DATs**            |       4.91 kb |    0.53 kB |  9116 kB |   8.9 MB |

This collection would have used **90.03 %** less block space with DATs

::: details
Policy id: `e8209a96a456202276f66224241a703676122d606d208fe464f2e09f`
:::

### Example 2

This collection contains 1744 tokens as monolithic HTML NFTs.

|                        | renderer size | token size | total kB | total MB |
| ---------------------- | ------------: | ---------: | -------: | -------: |
| **as monolithic NFTs** |           N/A |    13.9 kB | 24241 kB |  23.7 MB |
| **as DATs**            |      13.40 kB |    1.46 kB |  2556 kB |   2.5 MB |

This collection would have used **89.54 %** less block space with DATs.

::: details
Policy id: `95c248e17f0fc35be4d2a7d186a84cdcda5b99d7ad2799ebe98a9865`
:::

### Example 3

This is a collection of 3409 tokens and the first one ever minted using the DAT Metadata Standard.

|                        | renderer size | token size |  total kB | total MB |
| ---------------------- | ------------: | ---------: | --------: | -------: |
| **as monolithic NFTs** |           N/A |   56.63 kB | 193052 kB | 188.5 MB |
| **as DATs**            |      55.21 kB |    1.42 kB |   4896 kB |   4.8 MB |

By using DATs, **97.46 %** less block space was used. It is also important to note that, since the token as monolithic NFT is larger than 16 kB, this collection wouldn't have been possible on Cardano.

::: details
Policy id: `5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5`
:::

## Solutions 3 and 4: **Diversity of tools and archival qualities**

Although problems 3 and 4 address different topics, one solution solves both: providing a standardized way to describe dependencies and build instructions.

There are two variants of DATs: browser-based and non-browser-based. Almost all on-chain generative tokens on any blockchain fall into the first group. This standard supports both variants.

### Variant 1: **Browser-based**

Existing token viewers and blockchain explorers already support monolithic browser-based generative tokens. The most commonly used output formats are HTML and SVG, which can handle embedded JavaScript but can't have any dependencies.

Through [dependency definitions](/dat-metadata-standard/specification.html#_2-b-on-chain-dependencies), DATs can instruct token viewers to load libraries, such as [p5.js](https://p5js.org/), to allow generative tokens beyond just plain JavaScript. Token viewers can decide which libraries, and versions thereof, to support.

::: details
There has been a lot of discussion in the community around the term "on-chain". Some are of the opinion that a generative token can't be called on-chain if it has external dependencies, such as p5.js.

This standard is only interested in storing the part produced by the creator. Everything else should be described as external dependencies unless it is small enough to be stored as an on-chain dependency. Preferably, token viewers manage on-chain dependencies to avoid duplication.
:::

To enhance a token's archival qualities, DATs require a list of supported browsers with their versions in which the program is tested and confirmed to work correctly. It will help collectors to reproduce their token collections in the distant future.

::: tip
Venster's open-source desktop viewers get a major update every year. They come with a full browser embedded. Creators are encouraged to reference in which venster viewer their DAT is tested.
:::

### Variant 2: **Non-browser-based**

Generative artists regularly use tools that run outside the confines of web browsers. At least two on-chain generative token collections on Cardano do not use web technologies for rendering and describe the reproduction process in an improvised way.

DATs solve this by including a [Dockerfile](https://docs.docker.com/engine/reference/builder/) and, if necessary, a package file for the appropriate language. Viewers supporting this variant only need Docker installed to render the token using the unique arguments given by the _scene_ token.

::: details
The choice for [Docker](https://www.docker.com/) is one in favor of simplicity and familiarity. It requires the least effort and additional tooling on the side of the token viewer or anyone wanting to reproduce a generative token. If a more suitable solution presents itself with the same ease of use in the future, then it may be added as an alternative.
:::

::: warning
As of today (June 2023), no DAT collections are yet employing the non-browser-based variant. However, at least two are in the making, and their development may bring minor changes to the proposed solution.
:::
