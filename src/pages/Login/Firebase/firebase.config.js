// const firebaseConfig = {
//   apiKey: "AIzaSyAaHkFajRtKlmHljORRRdF_nBaHrOkflmc",
//   authDomain: "cycle-pro-client-server.firebaseapp.com",
//   projectId: "cycle-pro-client-server",
//   storageBucket: "cycle-pro-client-server.appspot.com",
//   messagingSenderId: "1049060156284",
//   appId: "1:1049060156284:web:ff86adb80ea397a6837af9",
// };
// export default firebaseConfig;
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
export default firebaseConfig;
