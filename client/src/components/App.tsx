import { initializeApp } from "firebase/app";
import "../styles/App.css";
import AuthRoute from "./auth/AuthRoute";
import HomePage from "./HomePage";
import SavedPage from "./SavedPage";

/**
 * App class that starts everything!
 */

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <AuthRoute 
      gatedContent={<HomePage/>} 
      />
    </div>
  );
}

export default App;
