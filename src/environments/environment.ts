// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB_KEeCA-gz7fSHina20qWgYR8gydr5c20',
    authDomain: 'fir-chat-final.firebaseapp.com',
    databaseURL: 'https://fir-chat-final.firebaseio.com',
    projectId: 'fir-chat-final',
    storageBucket: 'fir-chat-final.appspot.com',
    messagingSenderId: '18467810837'
  }
};
