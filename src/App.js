import logo from './logo.svg';
import './App.css';
import Home from './Comp/Home';
import {Provider} from "react-redux"
import store from './Redux/store';
import { Routes,Route } from "react-router-dom";
function App() {
  return (
  <Provider store={store}>
    <div className="App relative">
      <Routes>
          <Route path="/" element={ <Home/>}/>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
