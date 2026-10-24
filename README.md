# @x12i/graphenix usage example

Short-name umbrella: re-exports @x12i/graphenix-executable-format (full Graphenix 2.x lifecycle).

This consuming application demonstrates **compile and validate a reference graph through the umbrella api** using the published npm package, pinned to `2.17.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Consume the Graphenix executable lifecycle through the short umbrella import.
- Access the supported lifecycle contracts without choosing each component package separately.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/graphenix)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
