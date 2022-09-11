### This repository contains code for React+Firebase chat application

#### You have to add your own (firebase.js) config file in the source directory with the following items:
```

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your config data (which you will get when you will setup firebase application)
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

```
****
![screencapture-uchat-react-firebase-netlify-app-login-2022-09-11-13_07_27](https://user-images.githubusercontent.com/70688937/189517227-7abfa56f-b328-47c7-88ed-16526585ca64.png)
****
![screencapture-uchat-react-firebase-netlify-app-2022-09-11-13_07_57](https://user-images.githubusercontent.com/70688937/189517239-ddcbe626-a243-4262-a579-2159c9293bcd.png)
****
