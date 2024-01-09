import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from "./pages/misc/Page404/Page404";


function App() {
  const brower=createBrowserRouter([
    //first adding the parent as the navbar
    {path:'/',element:<Nav/>,
    errorElement:<Page404/>,
    
    children:[

      //for the errror page
      
      //now adding the children
      {index:true,element:<Hero/>},

      // now creating a new parent and child for the courses and the children of course which is Details.jsx page
      {path:"/courses",children:[
        {index:true,element:<Courses/>},
        {path:":courseId",element:<Details/>},
      ]},

      //creating separate link for the learn page
      {path:'/learn/:courseId',element:<Learn/>,children:[

        {path:'chapter/:chapterId',element:<Chapter/>}
      ]}
    ]}

  ])
  

  return (
    <>
    <RouterProvider router={brower}/>

    </>
  );
}

export default App;
