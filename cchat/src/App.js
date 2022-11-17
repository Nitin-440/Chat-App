
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join.js";
import Chat from "./component/Chat/Chat.js"




function App() {

return (
    <>
    {/* <h1>Hello</h1> */}
    
    <BrowserRouter>
      <Routes>

      {/* <Route exact path="/" component={<Join></Join>} /> */}
      <Route path="/" element={<Join />} />
      <Route exact path="/chat" element={<Chat/>} />
      </Routes>
      </BrowserRouter>
      

    </>

  );
}

export default App;
