import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex-center min-h-screen w-full bg-primary-50 bg-cover bg-fixed bg-center'>
      <SignIn />
    </div>
  )
}

export default SignInPage