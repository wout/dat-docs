---
outline: [2, 3]
---

# What's DAT?

**DAT**, which stands for **Distributed Artifact Token**, represents tokens that combine at least two smaller tokens. This composition enhances their efficiency by 90% in block space utilization while accommodating 50 times larger codebases.

Furthermore, DATs introduce a novel approach to instruct token viewers to fetch data from the blockchain. This capability enables the creation of token collections that are dynamic, evolving, and interconnected, unlocking new opportunities for artists to explore.

DATs can be fungible, semi-fungible, or non-fungible. By embracing non-browser-based languages, they unlock many tools previously unavailable for creative coders to create on-chain generative tokens.

## How do DATs work?

A DAT consists of at least two tokens represented by a _scene_ and a _renderer_. There are, in total, three distinct types of tokens:

- **Scene**: These are the tokens collectors receive in their wallets. Scenes contain token-specific metadata and reference a _renderer_ token.
- **Renderer**: Renderer tokens contain the necessary code to render all scenes within a DAT collection. Typically, there's just one _renderer_ token per collection.
- **Dependency**: _Renderer_ tokens can have multiple dependencies if the code's size exceeds the capacity of the _renderer_ token alone.

Token viewers with DAT support can gather all necessary information from the blockchain to render a scene, including the code from the _renderer_ token, all its dependencies, information from other tokens and the state of the blockchain.

## How to create a DAT?

You can create DATs and mint them on any platform. By adhering to the instructions outlined on the [specification page](/dat-metadata-standard/specification), viewers with support for the standard can render your collection.
