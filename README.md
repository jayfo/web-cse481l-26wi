# web-cse481l-25sp

Course website for the Spring 2025 offering of CSE 481L: Capstone: Human-AI Interaction.

## Installation of System Dependencies

Building requires Node.js and the Yarn package manager.

- [Node.js](https://nodejs.org/)

  Node installation and installers: <https://nodejs.org/en/download/>

  Development has used version 20.x.
  This version is not currently enforced, but could be enforced through addition of `engines` to `package.json`.

- [Yarn](https://yarnpkg.com/)

  ```
  npm install --global yarn
  ```

## Installation of Javascript Dependencies

Use Yarn to install the exact JavaScript dependencies in `yarn.lock`.

```
yarn install
```

## Yarn Commands

With all dependencies installed, use Yarn to list project commands:

```
yarn run
```

The most common project commands will be:

- Serve a debug build on `http://localhost:3000`, with hot reloading:

  ```
  yarn dev
  ```

- Build a production bundle and create static deployment files in `dist`:

  ```
  yarn export
  ```

- Apply code formatting:

  ```
  yarn format
  ```
