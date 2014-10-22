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
    hash: hex('3e8be8030bcbb553f5b27823765fdb72b9c9bfc1a53233296b14a62f6ee2fff1'),
    merkle_root: hex('edc5392be3a745e183b3f4a664777ec46d53204d4d98f057c1fb86ea79a95262'),
    height: 0,
    nonce: 1100587,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1413242058,
    bits: 504365040
  },
  dnsSeeds: [
    'seed.reddcoin.com'
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
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('2f6d5f73858c063526308f3e28a6fbb4268ec2f10cdef4ee2086d25e4d9ff111'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444
};
