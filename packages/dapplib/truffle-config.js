require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant good entire swift shoot'; 
let testAccounts = [
"0xb87cf891fe89e801330daf7efcb53154452bba2a9374bca548d4d357e6ae90f9",
"0xe44369a37483e9199d8c17cfcf9eba097767f39efd803697513f375fc377cc2a",
"0xec15f59ad84caa38adf7f080e05d8bb30fd1c0e7137263c9d0bad27eb5b53dbd",
"0x218e931aabbedd37a5f94d13a708011a983c46f5bf0d71e9a3326d043bb82bb7",
"0x62c44f3db0a81d7c4200587bd66a699b2bf6865566890ee2941ab7704fdab113",
"0x640425ed60c719cacb9acc5ba290a3f11c552fde4b625b39afa8eabd0052d7b1",
"0x89e38b276879682d4fa3072fe4c1d7a160481d70999ecfbdd50daa20424ea2f1",
"0xfb9591ed7d86b1cc829606c93289a6ab2efa9318a1d1f504b2fe304dc9536e08",
"0x56bf74daad3c35abf79a28ba0900ad17bb8884bbee18b79806a50b0dc3a8d1e9",
"0x767137d57387e5d8bff427728aab3648d1c1b7616cd04c576fed9bea7a347f87"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


