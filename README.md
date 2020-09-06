## Server Sider Rendered website hosted at: [sp_spacex](https://sapient-xt-spacex.web.app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and custom SSR code.

The Stack used here are :- react, redux, redux-thunk, axios, react-loadable, react-toastify, jest, enzyme, express, firebase.

### What's this ?

1. This is a SPA built to see all spaceX launches, able to be filtered by `year, successful launch and succesful landing`. For basic styling i have used bootstrap css, And went with custom css in some places to align with responsive designs.

2. In order to keep the UI from being janky or have some sort of lag. I have introduced 'load more'

3. Have handle any api erros and showing an error toaster.

4. Have made the filters sidebar position to be fixed in place for better UX.

5. Have made the header sticky as well for better UX.

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
