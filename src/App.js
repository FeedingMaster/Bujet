import './App.css';
import React , { useContext }from "react"
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
