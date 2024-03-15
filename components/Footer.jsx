import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
            <Link to="/">
                <h1 className='text-2xl'>App</h1>
            </Link>
        </div>

    </footer>
  )
}

export default Footer