// import { useState } from 'react';
// import Header from "./components/header/Header";
// import Sidebar from './components/sidebar/Sidebar';
// import Home from './components/home/Home'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
//       <Sidebar/>
//       <Home />

//     </>
//   )
// }

// export default App



import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App