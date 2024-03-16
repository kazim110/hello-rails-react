import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Greeting />,
    },
  ]);
  
  function App() {
    return <RouterProvider router={router} />;
  }
  
  export default App;