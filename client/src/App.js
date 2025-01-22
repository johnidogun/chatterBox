import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Route, RouterProvider,Outlet, createBrowserRouter} from "react-router-dom";
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Write from './pages/Write';
import Single from "./pages/Single";


const Layout =() => {
  return (
  <>
  <Navbar/>
    <Outlet/>
    <Footer/>
  
  </>
)
}



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/write",
        element:<Write/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      }
    ]
    
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/RegisterPage",
    element:<RegisterPage/>
  }
])
 
function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router}/>
      </div>
      
     
    </div>
  );
}

export default App;
