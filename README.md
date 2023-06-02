# Frontend Uniswap Max

## Quick start

```bash
yarn
yarn dev
```

# setup local test network

## Need to be done only once

=> On metamask :

-   Create a new account using this Private Key : _0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80_
-   Setup a new network with : (Add Network)
    -   Network name : Anvil
    -   New RPC URL : http://127.0.0.1:8545
    -   Chain ID : 1
    -   Currency symbol : ETHA

```sh
git https://github.com/Los-Byzantinos/Uniswap-Max
cd Uniswap-Max
make # This installs the project's dependencies.
```

Fill **ETH_RPC_URL** in `.env` (get it on [alchemy](https://www.alchemy.com/))

## Need to be done every time

=> In the contracts repository :

```sh
make anvil
```

Open an other terminal and :

```sh
make deploy-anvil
```

Copy the **Market** address from `./broadcast/Deployments.s.sol/1/run-latest.json`

=> Get back to the front repo and paste it in `helper-config.js`

```sh
yarn dev
```

Clear cache in metamask :

-   On Extension, click the account icon in the top-right corner. On Mobile, tap the hamburger icon in the top left to open the main menu.
-   Select Settings.
-   Select Advanced.
-   Scroll down and **Clear activity and nonce data**

You can dev !
