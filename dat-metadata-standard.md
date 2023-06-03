# DAT Metadata Standard

This is a rather technical section intended for the CIP (Cardano Improvement Proposal). If you're looking to get started with DATs, the [Using DATs](/using-dats) guide is probably more suited. But if you want to have a deeper dive into the why and how, you're in the right place.

### Copyright

The DAT Metadata Standard is published under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode) license.

## Abstract

This standard is intended for on-chain generative tokens but may also be suitable for other use cases. It describes a method to store code on the blockchain in a distributed and space-efficient way using Cardano's Native Tokens.

Generative tokens created following this standard are called **Distributed Artefact Tokens**, or **DAT**s. They are not necessarily a replacement for NFTs but rather a separate class of tokens in their own right. They can be fungible, semi-fungible or non-fungible. 

DATs introduce a way to instruct token viewers to query information from the blockchain. Queries may include information about the current state of the blockchain, details from the token's mint transaction or details from previously minted tokens. The queried data can be used to create dynamic tokens, evolving tokens, interlinked token collections, etc.

## Motivation: why is this CIP necessary?

The motive for creating this standard is best described through the three following problems.

### 1. Storage limit

Cardano is very well suited for on-chain generative tokens. Compared to other blockchains, it has the lowest L1 storage cost per kB, but the maximum transaction size of 16 kB is more limited compared to other chains.

How can we create generative tokens with larger on-chain codebases without hurting the blockchain?

### 2. Inefficient use of block space

Some existing on-chain projects on Cardano make inefficient use of block space by repeatedly storing the same monolithic blob, accompanied by a few unique parameters. The result is thousands of copies of the same code, close to or at the total capacity of the 16 kB transaction limit.

Without imposing more restrictions on creators, how do we drastically reduce the on-chain storage footprint of generative token collections?

### 3. Dependencies and archival qualities

Storing all dependencies for a generative token on the blockchain is not always convenient, sensible or even viable. Examples are p5.js, three.js, Processing or Blender, to name a few. There is currently no way to describe token dependencies so that digital artefacts can be rendered or reproduced by third parties now, or in the future.

What's the best way to describe external dependencies and maximise archival qualities of web dependencies?
