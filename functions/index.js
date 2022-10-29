const functions = require('firebase-functions');
const Filter = require('bad-words');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

//^ export a cloud function that runs every time a document is created in the messages collection 

exports.detectEvilUsers = functions.firestore
       .document('messages/{msgId}')
       .onCreate(async (doc, ctx) => {
    
        const filter = new Filter();
        
        //! this will get us access to the message text
        const { text, uid } = doc.data(); 

        //^ check for profanity
        if (filter.isProfane(text)) {

            const cleaned = filter.clean(text);
            await doc.ref.update({text: `🤐 I got BANNED for life for saying... ${cleaned}`});

            await db.collection('banned').doc(uid).set({});
        } 

        const userRef = db.collection('users').doc(uid)

        const userData = (await userRef.get()).data();

        if (userData.msgCount >= 7) {
            await db.collection('banned').doc(uid).set({});
        } else {
            await userRef.set({ msgCount: (userData.msgCount || 0) + 1 })
        }

});
