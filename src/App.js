import { BrowserRouter, Route } from "react-router-dom";
import UserContext from "./context/UserProvider";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <div className='App'>
      <UserContext>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={List} />
        </BrowserRouter>
      </UserContext>
    </div>
  );
}

export default App;
