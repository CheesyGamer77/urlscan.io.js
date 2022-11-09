# urlscan.io.js

An API wrapper for [urlscan.io](https://urlscan.io) written in TypeScript

## Installation

```sh-session
npm install urlscan.io.js
yarn add urlscan.io.js
pnpm add urlscan.io.js
```

## Getting Started

Searching for results by domain

```ts
import { Client } from 'urlscan.io.js';

// create your client
const client = new Client({ apikey: "YOUR API KEY GOES HERE" });

// search for scan results for "mydomain.com"
const domain = "mydomain.com";
const results = await client.search({ q: `domain:${domain}`});
```
