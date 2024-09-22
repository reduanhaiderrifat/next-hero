"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()
    const links =[
        {
            title:'Services',
            path:"/service",
        },
        {
            title:'About',
            path:"/about",
        },
        {
            title:'Contact',
            path:"/contact",
        },
        {
            title:'Blogs',
            path:"/blogs",
        },
        {
            title:'Post',
            path:"/post",
        },
        {
            title:'Meals',
            path:"/meals",
        },
        {
            title:'Gallery',
            path:"/gallery",
        },
        {
            title:'Dashboard',
            path:"/dashboard",
        }
    ]
    const handle =()=>{
router.push('/login')
    }
    return (
        <div>
            <nav className='flex justify-between items-center'>
                <h1>Next.js</h1>
                <ul className='flex  gap-12 items-center'>
           
              {
                    links?.map((link, index) => (
                     <li key={index}><Link className={`${pathName === link.path && "text-red-500"}`} href={link?.path}>{link?.title}</Link></li>   
                    ))
                 }
      
               
                </ul>
                <button onClick={handle} className='bg-white text-green-600 p-4'>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;