---
outline: [2, 3]
---
# Getting started with DATs

This guide is intended for artists and writers who are looking to get started with DATs.

## What's DAT?

**DAT**, which stands for **Distributed Artifact Token**, represents tokens that combine at least two smaller tokens. This composition enhances their efficiency by 90% in block space utilization while accommodating 50 times larger codebases.

Furthermore, DATs introduce a novel approach to instruct token viewers to fetch data from the blockchain. This capability enables the creation of token collections that are dynamic, evolving, and interconnected, unlocking fresh opportunities for artists to explore.

Finally, DATs can be fungible, semi-fungible, or non-fungible. How about DAT?

## How do DATs work?

There are three distinct types of DAT tokens:

- **Scene**: These tokens are received by collectors and stored in their wallets. Scenes contain token-specific metadata and reference a _renderer_ token.
- **Renderer**: Renderer tokens contain the necessary code to render all scenes within a DAT collection. Typically, there's just one _renderer_ token per collection.
- **Dependency**: _Renderer_ tokens can have multiple dependencies if the full code exceeds the capacity of the _renderer_ token alone or if the renderer token requires the use of a supported library like [p5.js](https://p5js.org/) or similar.

Token viewers with support for DATs are able to gather all necessary information from the blockchain to render a scene. This includes the code from the _renderer_ token , all dependencies, information from other tokens or the state of the blockchain.

## How to create a DAT?

The easiest way to create a DAT collection is to launch on [venster.art](https://venster.art/) (available in September 2023). Venster handles all the technical details and provides a user-friendly interface to create and manage your DAT collection.

But because we open-sourced the DAT Metadata Standard, you can create DATs independently and mint them anywhere. As long as you follow the instructions on the [specification page](/dat-metadata-standard/specification), viewers with support for the standard will render your collection.

## How to view a DAT?
At this moment, [venster.io](https://venster.io/) is the only viewer supporting the **DMS** (DAT Metadata Standard). In September 2023, we'll release a new embeddable web viewer and a free desktop viewer with full-screen modus and token backup functionality.

Later this year, we'll open-source the new viewer component, and we are also in talks with other blockchain viewers to implement the standard. So you can expect much broader support for DATs in the not-so-distant future.