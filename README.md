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
