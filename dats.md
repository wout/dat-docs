---
outline: [2, 3]
---
# What's DAT?

**DAT**, which stands for **Distributed Artifact Token**, represents tokens that combine at least two smaller tokens. This composition enhances their efficiency by 90% in block space utilization while accommodating 50 times larger codebases.

Furthermore, DATs introduce a novel approach to instruct token viewers to fetch data from the blockchain. This capability enables the creation of token collections that are dynamic, evolving, and interconnected, unlocking new opportunities for artists to explore.

DATs can be fungible, semi-fungible, or non-fungible.

## How do DATs work?

There are three distinct types of DAT tokens:

- **Scene**: These tokens are received by collectors and stored in their wallets. Scenes contain token-specific metadata and reference a _renderer_ token.
- **Renderer**: Renderer tokens contain the necessary code to render all scenes within a DAT collection. Typically, there's just one _renderer_ token per collection.
- **Dependency**: _Renderer_ tokens can have multiple dependencies if the full code exceeds the capacity of the _renderer_ token alone or if the renderer token requires the use of a supported library like [p5.js](https://p5js.org/) or similar.

Token viewers with support for DATs are able to gather all necessary information from the blockchain to render a scene. This includes the code from the _renderer_ token , all dependencies, information from other tokens or the state of the blockchain.

## How to create a DAT?

The easiest way to create a DAT collection is to launch on [venster.art](https://venster.art/) (available in September 2023). Venster handles all the technical details and provides a user-friendly interface to create and manage your DAT collections.

However, if you prefer to take an independent approach, you have the freedom to create DATs and mint them on any platform. By adhering to the instructions outlined on the [specification page](/dat-metadata-standard/specification), viewers equipped with support for the standard will be able to render your collection.

## How to view a DAT?

Currently, only [venster.io](https://venster.io/) supports the DMS (DAT Metadata Standard). We're developing a new web viewer that can be embedded and a free desktop viewer with full-screen mode and token backup functionality. Both will be available by September 2023.

We plan to make the new viewer component open-source to boost adoption by other platforms and services. Additionally, we are discussing with other blockchain viewers to adopt the standard. Expect more extensive DAT support soon.
