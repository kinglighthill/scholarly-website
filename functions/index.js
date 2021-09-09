const functions = require("firebase-functions");

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const PARTNERS = "partners";
const MESSAGES = "messages";

const db = admin.firestore();

const partnersRef = db.collection(PARTNERS);
const messagesRef = db.collection(MESSAGES);

const express = require('express');
const cors = require('cors');

const app1 = express();
const app2 = express();

// Automatically allow cross-origin requests
app1.use(cors({ origin: true }));
app2.use(cors({ origin: true }));

const appAddMessage = app1.post('/', (req, res) => {
	const data = req.body;

	const name = data.name;
	const email = data.email;
	const subject = data.subject;
	const message = data.message;
	
	const messageObject = {
		name: name,
		email: email,
		subject: subject,
		message: message
	};

	return messagesRef.doc().set(messageObject)
		.then(() => {
			res.status(200).send({
				"status": "success"
			});
		})
		.catch(error => {
			console.log("Error adding partner's email", error);
			res.status(400).send(error);
		});	

	//res.send(Widgets.create());
})

const appSubscribeEmail = app2.post('/', (req, res) => {
	const data = req.body;

	const email = data.email;
	
	const emailObject = {
		email: email
	};

	return partnersRef.doc().set(emailObject)
		.then(() => {
			res.status(200).send({
				"status": "success"
			});
		})
		.catch(error => {
			console.log("Error adding partner's email", error);
			res.status(400).send(error);
		});	
})

exports.addMessage = functions.https.onRequest(appAddMessage)

exports.subscribeEmail = functions.https.onRequest(appSubscribeEmail)



/* exports.subscribeEmail = functions.https.onRequest((req, res) => {
  const data = req.body;

  const email = data.email;
  
  const emailObject = {
  	email: email
  };

  return partnersRef.doc().set(emailObject)
  	.then(() => {
		res.status(200).send({
			"status": "success"
		});
	})
	.catch(error => {
		console.log("Error adding partner's email", error);
		res.status(400).send(error);
	});	
}); */

/* exports.addMessage = functions.https.onRequest((req, res) => {
	const data = req.body;

	const name = data.name;
	const email = data.email;
	const subject = data.subject;
	const message = data.message;
	
	const messageObject = {
		name: name,
		email: email,
		subject: subject,
		message: message
	};

	return messagesRef.doc().set(messageObject)
		.then(() => {
			res.status(200).send({
				"status": "success"
			});
		})
		.catch(error => {
			console.log("Error adding partner's email", error);
			res.status(400).send(error);
		});	
}); */