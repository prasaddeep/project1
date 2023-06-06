import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import ContactList from './ContactList';
import ConCreate from './ConCreate';
import ConDetail from './ConDetail';
import ConEdite from './ConEdite';

function App() {
  return (
    <div className="App">
      <h1>My Contact App</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactList/>}></Route>
        <Route path='/contact/create' element={<ConCreate/>}></Route>
        <Route path='/contact/detail/:conid' element={<ConDetail/>}></Route>
        <Route path='/contact/edit/:conid' element={<ConEdite/>}></Route>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
