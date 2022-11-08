import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import GetCollectionData from './Pages/Collections/ItemListContainer';
import SingleCollection from './Pages/SingleCollection/SingleCollection';
import Topic from './Pages/SingleCollection/Topic';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {


  return (
    <>
    <Navbar/>

   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='collections' element={<GetCollectionData/>}></Route>
        <Route path='collections/:id' element={<SingleCollection/>}>          
        </Route>
        <Route path='topic/nature' element={<Topic topicId={'nature'}/>}></Route>
        <Route path='topic /people' element={<Topic topicId={'people'}/>}></Route>

        {/* <Route path='/travel/:id' element={<SingleCollection/>}>           */}
        {/* </Route> */}

    </Routes>
 
    </>

  );
}

export default App;
