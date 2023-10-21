import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'> 
<Link className="text-white font-bold" href={'/'}>Volkkommen </Link>
<Link className="bg-white p-2" href={"/AddTopic"}>Add Topic</Link>
 
    </nav>
  )
}

export default Navbar