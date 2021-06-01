import { BrowserRouter, Route } from "react-router-dom";
import UserContext from "./context/UserProvider";
import MemeContext from "./context/MemeProvider";
import Home from "./pages/Home";
import Register from "./pages/Register";
import List from "./pages/List";

function App() {
  return (
    <div className='App'>
      <UserContext>
        <MemeContext>
          <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/list' component={List} />
          </BrowserRouter>
        </MemeContext>
      </UserContext>
    </div>
  );
}

export default App;
