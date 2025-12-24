import { createBrowserRouter } from "react-router";
import MyLayout from "../LayOut/MyLayout";
import HomePages from "../Pages/HomePages";


export const router = createBrowserRouter(
    [
        {
        path:'/',
        element: <MyLayout></MyLayout>,
        children:[
            {
                index: true,
                element:<HomePages></HomePages>
            },
             
            
        ]
    }
    ]
)