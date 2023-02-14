import React from 'react'
import { useRoutes } from 'react-router-dom';
/*Pages*/ 
import Home from './pages/Home'
import Error from './pages/404'

import Music_page from './pages/Music_page'







const App = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <Error />,
        },
        {
            path: '/phase01',
            element: <Music_page />,

        },
        {
            path: '/phase02',
            element: <Music_page/>,

        },
        {
            path: '/phase03',
            element: <Music_page />,

        },
        {
            path: '/projetGamma',
            element: <Music_page />,

        },
 
    ]);
    return routes;
    
}

export default App


    