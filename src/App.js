import logo from './logo.svg';
import './App.css';
import Home from './Comp/Home';
import {Provider} from "react-redux"
import store from './Redux/store';
import Login from './Comp/Login';
import Main from './Comp/Main';
function App() {
  return (
  <Provider store={store}>
    <div className="App relative">
     <Main/>
    </div>
    </Provider>
  );
}

export default App;
