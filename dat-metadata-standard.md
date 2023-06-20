---
outline: [2, 3]
prev: false
---
# DAT Metadata Standard

This rather technical section is intended for the CIP (Cardano Improvement Proposal). If you want to learn more about DATs, the [What's DAT](/dats) section is better suited. But if you want to dive deeper into the why and how you're in the right place.

### Copyright

The DAT Metadata Standard is published under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode) license.

## Abstract

This standard is intended for on-chain generative tokens but may also be suitable for other use cases. It describes a method to store code on the blockchain in a space-efficient way using Cardano's Native Tokens.

Generative tokens created following this standard are called **Distributed Artefact Tokens** or **DAT**s. They are not necessarily a replacement for NFTs but rather a layer on top of Cardano's Native Tokens. They can be fungible, semi-fungible, or non-fungible. 

DATs introduce a way to instruct token viewers to query information from the blockchain. Creators can use the queried data to create dynamic, evolving, or interlinked token collections. Queries may include:
- Information about the current state of the blockchain
- Details from the token's mint transaction
- Details from previously minted tokens

## Motivation: why is this CIP necessary?


The four following problems describe the motive for creating this standard very well.

### **Problem 1:** Storage limit

Cardano is very well suited for on-chain generative tokens. Compared to other blockchains, it has the lowest L1 storage cost per kB, but the maximum transaction size of 16 kB is more limited than other chains.

How can we create generative tokens with larger on-chain codebases without hurting the blockchain?

### **Problem 2:** Inefficient use of block space

Some existing on-chain projects on Cardano make inefficient use of block space by repeatedly storing the same monolithic blob accompanied by a few unique parameters. The result is thousands of copies of the same code, close to or at the total capacity of the 16 kB transaction limit.

Without imposing more restrictions on creators, how do we drastically reduce the on-chain storage footprint of generative token collections?

### **Problem 3:** Diversity of tools

While JavaScript has become the dominant language for on-chain art, it's only a fraction of other languages and tools available to artists. Many established artists use tools that don't run in a web browser and adapt or limit their workflow to make it run in a web browser.

What is the best interface for viewers to support a diverse set of tools and languages?

### **Problem 4:** Dependencies and archival qualities

Storing all dependencies for a generative token on the blockchain is not always convenient, sensible, or even viable. Examples are p5.js, three.js, Processing, and Blender, to name a few. There is currently no way to describe token dependencies, so third parties can render or reproduce digital artifacts.

What's the best way to describe external dependencies and maximize the archival qualities of digital artifacts?
