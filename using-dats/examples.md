---
next: false
---
# DAT examples

Last February, we released the first two collections using the DAT Metadata Standard. There's also an example token showcasing the use of [p5.js](https://p5js.org/). It's not much, but after the launch of our generative art platform in the Autumn of 2023, many more examples will be available.

## The Perfect NFT

[The Perfect NFT](https://theperfectnft.art/) was the first use of the DAT Metadata Standard and consisted of two collections. It was a blockchain art performance where collectors became participants by, quite literally, leaving their fingerprints on the pieces.

The first part of the collection was called _Temporal Bidding Declarations_, a series of receipts serving as proof of participation. In total, 3409 TBDs were minted. [View the TBDs on venster.io](https://venster.io/policies/5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5/assets).

The actual pieces were minted after the performance. Each composition is derived from a number between 0 and 511, representing a binary value. [View the pieces on venster.io](https://venster.io/policies/51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b/assets)

Both collections are made up of a _scene_ token, a _renderer_ token, an SVG library, and fonts, all stored on the blockchain using DATs.

## P5.js example

For demonstration purposes, we minted a p5.js example, which can be [viewed here on venster.io](https://venster.io/assets/asset1mtku0ddylzrqu7tzmll3q9zq62t28vfkn8rvp3). It's almost entirely based on code from Daniel Shiffman's, book the [Nature of Code (Chapter 6 - Autonomous Agents)](https://natureofcode.com/book/chapter-6-autonomous-agents/). 

It illustrates a scene token invoking the renderer token with two arguments: a literal numeric value and the transaction hash of the mint. The numeric value defines the number of grey boids that should be created initially. The renderer uses the transaction hash as a seed for the PRNG.

Boids appear every time a block is minted on the blockchain. Position is progress of epoch. The number of boids created is driven by the size of the minted block.
