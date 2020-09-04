## SSR hosted at: [sp_spacex](https://sapient-xt-spacex.web.app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Stack used here are :- react, redux, redux-thunk, axios, react-loadable, jest, enzyme, express, firebase.

### What's this ?

This is a SPA built to see all spaceX launches, able to be filtered by `year, successful launch and succesful landing`.

## Lighthouse scores

Mobile score :

![mobile score](/lighthouse-images/mobile-score.png)

Desktop score :

![desktop score](/lighthouse-images/desktop-score.png)

## How can I see it in action?

In order to install dependencies, build the app and run the express server:

In the project directory, you can run:

```
 To run the client server:
 
  yarn install
  yarn start

 To run client tests:

  yarn test

To generate SSR build:

  yarn build:server

To run the SSR server: 

  firebase serve --only functions,hosting
 
 To deploy the production build to cloud(firebase):
 
  firebase deploy
```
