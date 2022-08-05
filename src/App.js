import './App.css';
//react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//
import CompShowUsers from "./User/ShowUser";
import CompCreateUser from "./User/CreateUser";
import CompEditUser from './User/EditUser';
function App() {
  return (
   <>
    <div>
      <header className="App-header">
       <h1 className='col-3'>Hector Sanchez</h1>
       <div className="col-md-3">
       <i className="fa-brands fa-react col-3" ></i>
       <i className="fa-brands fa-node col-3"></i>
       <i className="fa-solid fa-database col-3">Sql</i>
       </div>
      </header>
      </div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={ <CompShowUsers />}/>
          <Route path='/create' element={ <CompCreateUser />}/>
          <Route path='/edit/:id' element={ <CompEditUser />}/>
        </Routes>
      </BrowserRouter>
      
   </>
  );
}

export default App;
