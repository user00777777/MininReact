import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='wrapLayout'>

<header className='mainHeader'>
   <Link to='home'>Home</Link> 
   <Link to='posts'>Posts</Link> 
</header>
<main className='wrapMain' >
<Outlet/>

</main>
<footer>

    AboutUs
</footer>

    </div>
  )
}
