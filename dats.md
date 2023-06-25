---
outline: [2, 3]
---

# What's DAT?

**DAT**, which stands for **Distributed Artifact Token**, represents tokens that combine at least two smaller tokens. This composition enhances their efficiency by 90% in block space utilization while accommodating 50 times larger codebases.

Furthermore, DATs introduce a novel approach to instruct token viewers to fetch data from the blockchain. This capability enables the creation of token collections that are dynamic, evolving, and interconnected, unlocking new opportunities for artists to explore.

DATs can be fungible, semi-fungible, or non-fungible, and by embracing non-browser-based languages, they unlock many tools previously unavailable for creative coders to create on-chain generative tokens.

## How do DATs work?

A DAT consists of at least two tokens represented by a _scene_ and a _renderer_. There are, in total, three distinct types of tokens:

- **Scene**: These are the tokens collectors receive in their wallets. Scenes contain token-specific metadata and reference a _renderer_ token.
- **Renderer**: Renderer tokens contain the necessary code to render all scenes within a DAT collection. Typically, there's just one _renderer_ token per collection.
- **Dependency**: _Renderer_ tokens can have multiple dependencies if the code's size exceeds the capacity of the _renderer_ token alone.

Token viewers with DAT support can gather all necessary information from the blockchain to render a scene, including the code from the _renderer_ token, all its dependencies, information from other tokens and the state of the blockchain.

## How to create a DAT?

The easiest way to create a DAT collection is to launch on [venster.art](https://venster.art/) (available in September 2023). Venster handles all the technical details and provides a user-friendly interface to create and manage your DAT collections.

However, if you prefer an independent approach, you can create DATs and mint them on any platform. By adhering to the instructions outlined on the [specification page](/dat-metadata-standard/specification), viewers with support for the standard can render your collection.

## How to view a DAT?

Currently, only [venster.io](https://venster.io/) supports the DMS (DAT Metadata Standard). We're developing a new web viewer that can be embedded and a free desktop viewer with full-screen mode and token backup functionality. Both will be available by September 2023.

We plan to make the new viewer component open-source to boost adoption by other platforms and services. Additionally, we are discussing with other blockchain viewers to adopt the standard. Expect more extensive DAT support soon.
