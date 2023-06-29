---
next: false
---

# DAT examples

In December 2022, the initial version of the DAT Metadata Standard was released, and it has recently been transformed into a CIP (Cardano Improvement Proposal). Although there are few examples currently available, this is set to change soon. Once Venster's generative art platform launches in Autumn 2023, many examples will follow.

## Example 1: **The Perfect NFT**

February 2023, [MICK+WOUT](https://mick-wout.com/) and [Alexander Watanabe](https://twitter.com/monad_alexander/) collaborated on [The Perfect NFT](https://theperfectnft.art/), the first use of the DAT Metadata Standard. It was a blockchain art performance where collectors became participants by, quite literally, leaving their fingerprints on the pieces.

![The Perfect NFT - Temporal Bidding Declarations](/dats/examples/tpn-tbd-banner-fs8.png)

The first part of the collection was called _Temporal Bidding Declarations_, a series of receipts serving as proof of participation. In total, 3409 TBDs were minted. [View the TBDs on venster.io](https://preprod.venster.io/policies/5120000fd4f7584a4ff2b2f5fe71f735f84315106dd6014ac581baa5/assets).

The actual pieces were minted after the performance. Each composition is derived from a number between 0 and 511, representing a binary value. [View the pieces on venster.io](https://preprod.venster.io/policies/51211110add284b78cff66364ea4997f8612b91ee07d8a2339d7cb0b/assets)

![The Perfect NFT](/dats/examples/tpb-banner-fs8.png)

Both collections are made up of a _scene_ token, a _renderer_ token, an SVG library, and fonts, all stored on the blockchain using DATs.

## Example 2: **P5.js scene**

For demonstration purposes, we minted a p5.js example, which can be [viewed here on venster.io](https://preprod.venster.io/assets/asset1mtku0ddylzrqu7tzmll3q9zq62t28vfkn8rvp3). It's entirely based on code from Daniel Shiffman's book the [Nature of Code (Chapter 6 - Autonomous Agents)](https://natureofcode.com/book/chapter-6-autonomous-agents/).

![The Perfect NFT](/dats/examples/p5js-flock.png)

Here's how it works. Initially, a number of grey boids are created at the center of the scene. With every new block added to the blockchain, a new group of colored boids appears. Small blocks will yield fewer boids than big ones. The position of their appearance is defined by the current progress of the epoch, from left to right.

This token shows the use of [p5.js](https://p5js.org/) as an external depenceny, as well as the use of dynamic data, fetched from the blockchain.

## Example code

All venster's implementation examples can be found in the [venster-examples](https://github.com/venster-io/venster-examples) repository on Github. More example tokens will be added there in the near future.
