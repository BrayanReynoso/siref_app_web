import {BrowserRouter, Routes, Route} from 'react-router-dom';
function AppRouter() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<div></div>}>
          <Route path='/home' element={<div>SIREF</div>}/>
          <Route index element={<div>SIREF</div>}/>
        </Route>
        <Route path='*' element={<div>Parece que no deverias estar aqui!! :C</div>}/>
     
      </Routes>
    </BrowserRouter> 
  );
}

export default AppRouter;
