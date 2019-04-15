import Web3 from "web3";

let web3;

window.addEventListener("load", async () => {
  // Read-only provider is exposed by default
  console.log(await ethereum.send("net_version"));
  try {
    // ask for access to account address
    await ethereum.enable();
    // instanciate web3 with a remote provider
    web3 = new Web3(ethereum);

    let accounts = await web3.eth.getAccounts();
    document.querySelector("#wallet").value = accounts[0];
  } catch (error) {
    console.log(error);
    // User denied full provider access
  }
});

window.getBalance = function() {
  web3.eth.getBalance(
    document.querySelector("#wallet").value,
    (err, balance) => {
      document.querySelector("#balance").innerHTML = web3.utils.fromWei(
        balance
      );
    }
  );
};
