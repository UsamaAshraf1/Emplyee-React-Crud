import './App.css';
import Emplyee from './Emplyee';
import EmpCreate from './EmpCreate';
import Empdetail from './Empdetail';
import Empedit from './Empedit';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (<>
    <div className="App">
     <h1>React Crud operations</h1>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Emplyee/>}/>
      <Route path="/employee/create" element={<EmpCreate/>}/>
      <Route path='/employee/detail/:empid' element={<Empdetail/>}/>
      <Route path='/employee/edit/:empid' element={<Empedit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;