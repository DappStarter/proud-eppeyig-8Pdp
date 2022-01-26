require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stone return screen quality harvest define army giggle'; 
let testAccounts = [
"0x1ebcb6928462b6e2e71ec9e51f585e01db6d034ad0ef63ad847f3f6aeba40f9b",
"0x8bdf4f322d2315d3526c25e2f4018f7e81c71456eff9bd125a3716c5bda0e8d0",
"0x54d31752a48e6ba536a1ce2e19868485bc0fdf1e210ebf977a052eb92081843f",
"0xf2974cab36cc5c21c1192825d61fbf5f7ad34117c1413ad758f496708d088ba1",
"0x63c6207619ef49870e19e3a8faedd5c817184b5bb4dab212c1fef8d5311fdb83",
"0xc1c2561946075ed4bc303d7b6c197e20e357c2a70254e7dab0f456f57909a9c5",
"0x037cf733bf0ddad78ecf2ba52425536925952d8c2883eea110d39ac7cb564450",
"0x408e0d6207a2050e0766439c9e1773e195bccb382d609ac97662de175ba386f1",
"0x133f5238a2350399c44e2db45684bcdcf4a450a057b8c4222127cd1c937f2819",
"0xc15b346941374f1ebf94c452d84c630475d6b3697753d24c2112eaed1eb8648b"
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


