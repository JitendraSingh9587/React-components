import React from 'react'
import { BrowserRouter,  Route } from 'react-router-dom'

// importing all pages
import Projects from '../pages/projects';
import User from '../pages/user';
import Analytics from '../pages/analytics';
import Intigration from '../pages/intigration';
import Help from '../pages/help';

const Routes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/projects'>
        <Projects/>
    </Route>
    <Route path='/users'>
        <User/>
    </Route>
    <Route path='/analytics'>
        <Analytics/>
    </Route>
    <Route path='/intigration'>
        <Intigration/>
    </Route>
    <Route path='/help'>
        <Help/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default Routes