import React, { useEffect } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import HomeView from './views/HomeView'
import lenis from './utils/smooth';
import link from './utils/link';


const App = () => {
	useEffect(() => {
		lenis();
		link();
	},[])

  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomeView />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App