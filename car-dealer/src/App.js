import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home/Home';
import AddCar from './pages/AddCar/AddCar';
import Car from './pages/Car/Car';
// import 'antd/dist/antd.css'
function App() {
  return (
    <div className='App'>
      <Toaster/>
     
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>}/>

             <Route path='/addcar' element={<AddCar/>}/>

             <Route path='/car/:id' element={<Car/>}/>
         </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
