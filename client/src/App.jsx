import { Route } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
 

 return (
   <div className="App">
     <Route path="/" component={Homepage} exact />
     <Route path="/chats" component={Chatpage} />
   </div>
 );
};

export default App;
