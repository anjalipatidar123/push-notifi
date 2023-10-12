import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwAB4gYE5SQQsWsV4PC37Le83GrS3Qr60",
  authDomain: "fir-5f668.firebaseapp.com",
  projectId: "fir-5f668",
  storageBucket: "fir-5f668.appspot.com",
  messagingSenderId: "985431583418",
  appId: "1:985431583418:web:d9c4139a5aaf5326f0b083",
  measurementId: "G-6WEFHSVE7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {


        getToken(messaging, 
          { vapidKey: 'BPRfXoZNXQ2iRCGuRjkjUPL9yDwt-D-6UWFyypqaHQY7uNHA301aS0W9w7mdZOQLP_wVZEeGoPIGgKX6vUadb4U' }).then((currentToken) => {
          console.log("FCM: ",currentToken)
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });

        console.log('Notification permission granted');
        onMessage(messaging, (payload) => {
          console.log('Message received. ', payload);
          // ...
        });
      } else {
        console.log('Notification permission denied');
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
