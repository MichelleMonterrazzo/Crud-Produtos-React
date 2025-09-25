import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Package } from 'lucide-react'
function Navbar(){
return (
<nav className="bg-indigo-600 text-white p-4 shadow-md">
<div className="max-w-5xl mx-auto flex justify-between items-center">
<Link to="/" className="flex items-center gap-2 font-bold text-xl">
<Package size={24} /> CRUD Produtos
</Link>
<div className="flex gap-6">
<NavLink to="/" className={({isActive}) => isActive? 'font-semibold underline' : ''}>Produtos</NavLink>
<NavLink to="/sobre" className={({isActive}) => isActive? 'font-semibold underline' : ''}>Sobre</NavLink>
</div>
</div>
</nav>
)
}

export default Navbar;