// Type definitions for bip68 v1.0.4
// Project: https://github.com/bitcoinjs/bip68
// Definitions by: Hoon Kim <https://github.com/hoonsubin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace bip68 {
  interface blockSequence {
    seconds?: number;
    blocks?: number;
  }

  function decode(sequence: number): blockSequence;
  function encode(blockSeq: blockSequence): number;
}
export default bip68;
