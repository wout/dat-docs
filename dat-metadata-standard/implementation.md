---
outline: [2, 4]
---
# Implementation

It is important to mention that this implementation was created with diversity of tooling in mind. While JavaScript is a dominant language in on-chain art, creators should be able to use any tool they want.

## Rationale: how does this CIP achieve its goals?

This section shows solutions to the four problems outlined in the [motivation](/dat-metadata-standard.html#motivation-why-is-this-cip-necessary) section of this CIP.

### **Solution 1:** Storage limit

The distributed nature of DATs allows bigger on-chain codebases with dependencies. The separation of code and metadata effectively doubles the available space. Additionally, dependencies can be stored in chunks, which allows for the realistic storage of up to twenty times more data than was previously possible.

The two following existing DAT collections already showcase the solution.

#### Example 1

This collection contains 3409 tokens and the first one ever minted using the DAT Metadata Standard.

| token type            | token size   | minted   | collection size |
| --------------------- | -----------: | -------: | --------------: |
| **scene**             |      1.42 kB |     3409 |      4840.78 kB |
| **renderer**          |     12.85 kB |        1 |        12.85 kB |
| **lib dependency**    |     11.77 kB |        1 |        11.77 kB |
| **font dependency 1** |     15.35 kB |        1 |        15.35 kB |
| **font dependency 2** |     15.24 kB |        1 |        15.24 kB |
| **total**             | **56.63 kB** | **3413** |  **4895.99 kB** |

::: details
Policy id: `5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5`

Links to the mentioned tokens:
- one of the scene tokens: [theperfectnft_042_002_tbd](https://cardanoscan.io/token/5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5.theperfectnft_042_002_tbd?tab=minttransactions)
- renderer: [renderer](https://cardanoscan.io/token/5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5.renderer?tab=minttransactions)
- lib dependency: [petit@0.0.0-alpha](https://cardanoscan.io/token/0f33b52d548995e9f22be019db9ef1f792c51b1c?tab=minttransactions)
- font dependency 1: [karlaregular](https://cardanoscan.io/token/3333c36c4ba8b1ebc504e6865b3950ef0a101707b7e7e7de0b4ef323.karlaregular?tab=minttransactions)
- font dependency 2: [cutivemonoregular](https://cardanoscan.io/token/3333c36c4ba8b1ebc504e6865b3950ef0a101707b7e7e7de0b4ef323.cutivemonoregular?tab=minttransactions)
:::

#### Example 2

This collection contains 512 tokens and the second one ever minted using the DAT Metadata Standard.

| token type          | token size   | minted   | collection size |
| ------------------- | -----------: | -------: | --------------: |
| **scene**           |      2.44 kB |      512 |      1249.50 kB |
| **renderer**        |      9.72 kB |        1 |        12.85 kB |
| **lib dependency**  |     11.77 kB |        1 |        11.77 kB |
| **font dependency** |     15.35 kB |        1 |        15.35 kB |
| **total**           | **39.28 kB** |  **515** |  **1289.47 kB** |

::: details
Policy id: `51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b`

Links to the mentioned tokens:
- one of the scene tokens: [theperfectnft_042](https://cardanoscan.io/token/51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b.theperfectnft_042?tab=minttransactions)
- renderer: [renderer](https://cardanoscan.io/token/51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b.renderer?tab=minttransactions)
- lib dependency: [petit@0.0.0-alpha](https://cardanoscan.io/token/0f33b52d548995e9f22be019db9ef1f792c51b1c?tab=minttransactions)
- font dependency: [cutivemonoregular](https://cardanoscan.io/token/3333c36c4ba8b1ebc504e6865b3950ef0a101707b7e7e7de0b4ef323.cutivemonoregular?tab=minttransactions)
:::


### **Solution 2:** Inefficient use of block space

By looking at three real-world cases, it becomes clear that by using DATs, roughly 90% less block space is required compared to using isolated monolithic NFTs.

The data used in the examples is extracted from existing token collections. The first two examples used monolithic NFTs while the the third one used DATs.

#### Example 1

This collection contains 17190 tokens as monolithic HTML NFTs.

|                        | renderer size | token size | total kB | total MB | 
| ---------------------- | ------------: | ---------: | -------: | -------: |
| **as monolithic NFTs** |           N/A |    5.34 kB | 91792 kB |  89.6 MB |
| **as DATs**            |       4.91 kb |    0.53 kB |  9116 kB |   8.9 MB |

This collection would have used **~ 90.1 %** less block space with DATs

::: details
Policy id: `e8209a96a456202276f66224241a703676122d606d208fe464f2e09f`
:::

#### Example 2

This collection contains 1744 tokens as monolithic HTML NFTs.

|                        | renderer size | token size | total kB | total MB | 
| ---------------------- | ------------: | ---------: | -------: | -------: |
| **as monolithic NFTs** |           N/A |    13.9 kB | 24241 kB |  23.7 MB |
| **as DATs**            |      13.40 kB |    1.46 kB |  2556 kB |   2.5 MB |

This collection would have used **~ 89.6 %** less block space with DATs.

::: details
Policy id: `95c248e17f0fc35be4d2a7d186a84cdcda5b99d7ad2799ebe98a9865`
:::

#### Example 3

This is a collection of 3409 tokens and the first one ever minted using the DAT Metadata Standard.

|                        | renderer size | token size | total kB  | total MB | 
| ---------------------- | ------------: | ---------: | --------: | -------: |
| **as monolithic NFTs** |           N/A |   56.63 kB | 193052 kB | 188.5 MB |
| **as DATs**            |      55.21 kB |    1.42 kB |   4896 kB |   4.8 MB |

By using DATs, **~ 99.97 %** less block space was used. It is also important to note that, since the token as monolithic NFT is larger than 16 kB, this collection wouldn't have been possible on Cardano.

::: details
Policy id: `5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5`
:::

### **Problem 3:** Diversity of tools

[TO-DO]

### **Solution 4:** Dependencies and archival qualities

[TO-DO]

## Path to Active

### Acceptance Criteria
<!-- Describes what are the acceptance criteria whereby a proposal becomes 'Active' -->

### Implementation Plan

- one implementation alreaday live (venster)
- desktop viewer available later 2023 (open-source) 
- working with existing viewers to implement the DMS
- provide open source tooling 