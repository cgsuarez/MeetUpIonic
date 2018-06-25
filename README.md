# firestore-ionic

This project shows how to listen to event changes in firestore data, but the project has a bug where the offline deletion does not work well.

The video  [here](https://www.youtube.com/watch?v=wvMrx8BjNFk&feature=youtu.be)  may be a better explanition

## How to run

- Create a file with the name app.firebaseconfig.ts following the model below and fill with your firebase project settings
``` javascript
export var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
```
- Install, copy and run
```

npm install -g ionic cordova
git clone https://github.com/BugsBunnyBR/firestore-ionic.git
cd firestore-ionic
cp $MY_FIREBASE_CONFIG_FILE  src/app/app.firebaseconfig.ts
npm install
ionic cordova prepare
ionic serve
```
`ionic serve` will compile and open a web page with the project running at http://localhost:8100

