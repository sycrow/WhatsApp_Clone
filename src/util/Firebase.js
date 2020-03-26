const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor() {

        this._config = {
            apiKey: "AIzaSyBddgoQ35WJeGUNlLaRc_IlYmTWJ3n1Rs0",
            authDomain: "whatsappclone-eac32.firebaseapp.com",
            databaseURL: "https://whatsappclone-eac32.firebaseio.com",
            projectId: "whatsappclone-eac32",
            storageBucket: "whatsappclone-eac32.appspot.com",
            messagingSenderId: "190578576603",
            appId: "1:190578576603:web:5fc5c279831af1656c50fe",
            measurementId: "G-WJ3HTD728V"
        };

        this.init();

    }

    init() {

        if (!this._initialized) {
            // Initialize Firebase
            firebase.initializeApp(this._config);
            firebase.analytics();

            this._initialized = true;
        }

    }

    static db() {

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

    initAuth() {

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result => {

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            }).catch(err=>{
                f(err);
            });

        });

    }

}