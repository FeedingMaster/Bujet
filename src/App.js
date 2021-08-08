import './assets/css/style.css';
import React from "react"
import Home from "./pages/Home"
import { SubmissionProvider } from './contexts/SubmissionProvider';
function App() {

  return (
      <SubmissionProvider>
        <Home/>
      </SubmissionProvider>
  ); 
}

export default App;
