## WC3 Build Order App

A simple app to create and share WC3 build orders.

## Build

For local development, run the server through `npm run start:dev`, 
then navigate to the client and run it using `npm start`. 
The client should automatically open in your browser.

You need to be running a mongodb instance locally.

## Contributing
I will host this repository but I will not spend a lot of time on the development of this small application.

If you want to contribute to this project, please create a pull request.

Adding more "actions" (clickable Icons) can be accomplished by adding the 
ActionCode enum in `src/client/src/store/common/types.ts` and adding ActionCodeDetails for this
code in `src/client/src/store/common/actionCodes.ts - actionCodesToDetailsMap`.

