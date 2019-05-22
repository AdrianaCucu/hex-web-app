# Hex - Multiplayer Web App

## Overview

### What is Hex?

According to [Wikipedia](https://en.wikipedia.org/wiki/Hex_(board_game)), Hex is a two-player strategy board game played on a hexagonal grid, typically on an 11×11 rhombus.

Players take turns placing hexagons on the grid in an attempt to link their opposite sides of the board in an unbroken chain. One player must win; there are no draws.

### Why build this?

<< TODO: insert reasoning here >>

### Can I try it?

Of course!

Visit [hexx.netlify.com](https://hexx.netlify.com/) to try out the game!

Why host it on Netlify? It's free. It's easy to use. It's super fast.

> Note: The back-end server may take 20 or 30 seconds to spin up and connect because it's running on Heroku's free plan.

## Getting Started

### Prerequisites

1. Install Git from [here](https://git-scm.com/downloads)
2. Install Node.js and NPM from [here](https://nodejs.org/en/download/)
3. Install Yarn with `npm install -g yarn`
4. Clone this repository by running `git clone https://github.com/AdrianaCucu/hex-web-app.git`
5. Enter the project server folder: `cd hex-web-app/server`
6. Install dependencies: `yarn install`
7. Enter the project web folder: `cd ../web`
8. Install dependencies: `yarn install`

### Development 🤺

Run the web app in the development mode: 

```bash
cd web
yarn run start
```
Open [http://localhost:3000](http://localhost:3000) to view the web app in the browser 🌍

To run the back-end server in development, run the following in a different Terminal window:

```bash
cd server
yarn run start
```

Open [http://localhost:4000](http://localhost:4000) to view the server's home page the browser 🌍


### Deployment 🚀

Build the web app for production to the `web/build` folder:

```bash
cd web
yarn run build
```

This bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

The web app is now ready to be deployed!

<< TODO: insert instructions for server >>

## How is this built?

### Front-end

- [React.js](https://reactjs.org/) for building the web app
- [Grommet](https://v2.grommet.io) CSS framework
- Web sockets for realtime communication with the server
- [Netlify](http://netlify.com/) to host the front-end code

### Back-end

- [Node.js](https://nodejs.org/en/) running a [Fastify](https://www.fastify.io/) web server
- Fastify or Socket.io to serve the websocket connections
- [Heroku](https://www.heroku.com/) to host the back-end server

### Tooling

- [Git](https://git-scm.com/) version control
<!-- - [Cypress](https://www.cypress.io/) for unit testing and end-to-end testing -->

## Credit

Built with ❤ by [A.C.](https://github.com/AdrianaCucu)