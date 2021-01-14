/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle'); 
require('dotenv').config();
 
 const INFURA_URL = '';
 const PRIVATE_KEY = ''
 
require('@nomiclabs/hardhat-waffle') 
module.exports = {
  solidity: "0.8.0",
  networks: {
      cipherz: {
          url: process.env.PROVIDER_URL,
          accounts: { mnemonic: process.env.MNEMONIC }
      }
  }
};
