# [FireBrok-Angular](https://bastiennicoud.github.io/FireBrok-Angular/)

[![Build Status](https://travis-ci.com/bastiennicoud/FireBrok-Angular.svg?branch=master)](https://travis-ci.com/bastiennicoud/FireBrok-Angular)

> Dashboard app for [firebrok](https://github.com/CPNV-ES/FireBrok) developed during the PRW3 module with [Angular](https://angular.io)

Docs available in the [docs folder](./docs).

## Changelog - v1.0.0

- Create and show automatons
- Reactive update of automaton state
- Show automaton topics and data streams
- Create graph for a dedicated automaton flux
- Graph reactive updates
- Authentication

## Installation for dev

Prerequisites :
* [node.js](https://nodejs.org/en/)

```sh
# Install angular cli tools
npm install -g @angular/cli

# Clone the repo
git clone git@github.com:bastiennicoud/PRW3-dashboard.git

# Move into the folder
cd PRW3-dashboard

# Install the dependencies
npm i

# Launch the dev server
ng serve
```

## Setup firebase connexion

To use the firebase sdk, the app requires the firebase key. You need to fill your firebase key in the `src/environments/firebase.ts` file. Just use the `firebase.example.ts` to see the file layout. Be careful, this file must not be pushed on a public git repository.
