const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();


exports.getScreams = functions.https.onRequest((request, response) => {
    admin
        .firestore()
        .collection('screams')
        .get()
        .then((data) => {
            let screams = [];
            data.forEach((doc) => {
                screams.push(doc.data());
            });
            return res.json(screams);
        })
        .catch((err) => {
            console.error(err);
        });
});

exports.getScreams = functions.https.onRequest((request, response) => {
    admin
        .firestore()
        .collection('screams')
        .get()
        .then((data) => {
            let screams = [];
            data.forEach((doc) => {
                screams.push(doc.data());
            });
            return res.json(screams);
        })
        .catch((err) => {
            console.error(err);
        });
});

exports.createScreams = functions.https.onRequest((request, response) => {
    if(request.method !== 'POST'){
        return response.status(400).json({ error: 'Method not allowed.' });
    }
    const newScream = {
        body: request.body.body,
        userHandle: request.body.userHandle,
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };

    admin
        .firestore()
        .collection('screams')
        .add(newScream)
        .then((doc) => {
            return resposne.json({message : `Document ${doc.id} created successfully.`});
        })
        .catch((err) => {
            return response.status(500).json({ error: 'Something went wrong.' });
        });
});