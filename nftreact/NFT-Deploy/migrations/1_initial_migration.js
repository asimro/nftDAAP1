const Counters = artifacts.require("Counters");
const DAPPNFT2 = artifacts.require("DAPPNFT2");


module.exports = async function (deployer) {
  await deployer.deploy(Counters);
  await deployer.link(Counters, DAPPNFT2);

  await deployer.deploy(DAPPNFT2);
};



