var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fbc0b6db'),
  addressVersion: 125,
  privKeyVersion: 189,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('F1FFE26E2FA6146B293332A5C1BFC9B972DB5F762378B2F553B5CB0B03E88B3E'),
    merkle_root: hex('6252A979EA86FBC157F0984D4D20536DC47E7764A6F4B383E145A7E32B39C5ED'),
    height: 0,
    nonce: 1100587,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1413242058,
    bits: 504365040
  },
  dnsSeeds: [
    '162.248.243.195'
  ],
  defaultClientPort: 45444
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('C9CA299CD534CA86257EBC4BA1C83214844087FA5B199E57408D04B437605D17'),
    merkle_root: hex('11f19f4d5ed28620eef4de0cf1c28e26b4fba6283e8f302635068c85735f6d2f'),
    height: 0,
    nonce: 627818,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1411709187,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444
};
