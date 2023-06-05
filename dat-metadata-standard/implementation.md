# Implementation

It is important to mention that this implementation was created with diversity of tooling in mind. While JavaScript is a dominant language in on-chain art, creators should be able to use any tool they want.

## Rationale: how does this CIP achieve its goals?

This section shows solutions to the three problems outlined in the [motivation](/dat-metadata-standard.html#motivation-why-is-this-cip-necessary) section of this CIP.

### **Solution 1:** Storage limit

  - separation renderer/dependencies
  - chunked dependencies

### **Solution 2:** Inefficient use of block space

By looking at three real-world cases, it becomes clear that by using DATs, roughly 90% less block space is required compared to using isolated monolithic NFTs. The data used in the examples is extracted from existing token collections.

The first two examples used monolithic NFTs while the the third one used DATs.

#### **2.a.** Example 1

This collection contains 17190 tokens as monolithic HTML NFTs.

|                        | renderer size | token size | total kB | total MB | 
| ---------------------- | ------------: | ---------: | -------: | -------: |
| **as monolithic NFTs** |           N/A |    5.34 kB | 91792 kB |  ~ 90 MB |
| **as DATs**            |       4.91 kb |    0.53 kB |  9116 kB |  ~ 8.9MB |

This collection would have used **~ 90.1 %** less block space with DATs

::: details
Policy id: `e8209a96a456202276f66224241a703676122d606d208fe464f2e09f`
:::

#### **2.b.** Example 2

This collection contains 1744 tokens as monolithic HTML NFTs.

|                        | renderer size | token size | total kB | total MB  | 
| ---------------------- | ------------: | ---------: | -------: | --------: |
| **as monolithic NFTs** |           N/A |    13.9 kB | 24241 kB |   ~ 24 MB |
| **as DATs**            |       13.4 kB |    1.46 kB |  2556 kB |  ~ 2.5 MB |

This collection would have used **~ 89.6 %** less block space with DATs.

::: details
Policy id: `95c248e17f0fc35be4d2a7d186a84cdcda5b99d7ad2799ebe98a9865`
:::

#### **2.c.** Example 3

This is a collection of 3409 tokens and the first one ever minted using the DAT Metadata Standard.

|                        | renderer size | token size | total kB | total MB  | 
| ---------------------- | ------------: | ---------: | -------: | --------: |
| **as monolithic NFTs** |           N/A |   25.24 kB | 86043 kB |   ~ 84 MB |
| **as DATs**            |      23.82 kB |    1.42 kB |  4901 kB |  ~ 4.8 MB |

By using DATs, **~ 94.3 %** of block space was saved. It is also important to note that, since the token as monolithic NFT is larger than 16 kB, this collection wouldn't have been possible on Cardano.

::: details
Policy id: `5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5`
:::

### **Solution 3:** Dependencies and archival qualities


## Path to Active

### Acceptance Criteria
<!-- Describes what are the acceptance criteria whereby a proposal becomes 'Active' -->

### Implementation Plan

- one implementation alreaday live (venster)
- desktop viewer available later 2023 (open-source) 
- working with existing viewers to implement the DMS
- provide open source tooling 