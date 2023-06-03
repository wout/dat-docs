# Implementation

## Rationale: how does this CIP achieve its goals?

- best described by example
- problem 1
  - separation renderer/dependencies
  - chunked dependencies
- problem 2
  - non-DAT example 1:
    - actual size: 17190 x 5.34kB = 91792kB (~ 90MB)
    - potential size: 1 x 4.91kb + 17190 x 0.53kB = 9116kB (~ 8.9MB)
    - potential savings: ~90.1%
  - non-DAT example 2:
    - actual size: 1744 x 13.9kB = 24241kb (~ 24MB)
    - potential size: 1 x 13.4kB + 1744 x 1.46kB = 2556kB (~ 2.5MB)
    - potential savings: ~89.6%
  - DAT example (TBDs of The Perfect NFT):
    - non-DAT size: 3409 x 25.24kB = 86043kB (~ 84.03MB)
    - actual size: 1 x 10.96kB + 1 x 12.86kB + 3409 x 1.42kB = 4901kB (~ 4.79MB)
    - actual savings: ~94.3%
- problem 3

## Path to Active

### Acceptance Criteria
<!-- Describes what are the acceptance criteria whereby a proposal becomes 'Active' -->

### Implementation Plan

- one implementation alreaday live (venster)
- desktop viewer available later 2023 (open-source) 
- working with existing viewers to implement the DMS
- provide open source tooling 