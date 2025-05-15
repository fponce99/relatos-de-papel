// set-global-crypto.cjs
const { webcrypto } = require('crypto');

// Forzar globalThis.crypto con getRandomValues funcional
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
} else if (!globalThis.crypto.getRandomValues) {
  globalThis.crypto.getRandomValues = (arr) => {
    const randomBuffer = webcrypto.getRandomValues(new Uint8Array(arr.length));
    arr.set(randomBuffer);
    return arr;
  };
}