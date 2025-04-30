import { Link, Navigate } from 'react-router-dom';
import useRegister from '@hooks/useRegister';
import Input from '@components/forms/input/Input';
import AuthSlider from '@components/trendify/auth-slider/AuthSlider';
import { Loader, Lock, Mail, Phone, User } from 'lucide-react';
import {Helmet} from "react-helmet";

export default function Register() {
  const {handleSubmit, submitForm, register, formError, loading, token} = useRegister();
  if (token !== null) {
    return <Navigate to={'/'} />
  }
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pt-8 md:pt-10">
            <div className="container w-[70%]">
              <h1 className='text-3xl font-semibold text-text'>Create a Account</h1>
              <p className='text-sm text-gray-400'>Create a new account</p>
              <form onSubmit={handleSubmit(submitForm)} className='mt-4'>
                <Input label='User Name' Icon={User} name='name' placeholder='username' error={formError.name?.message as string} register={register} />
                <Input label='E-mail' type='email' Icon={Mail} name='email' placeholder='user@user.com' error={formError.email?.message as string} register={register} />
                <Input label='Password' type='password' Icon={Lock} name='password' placeholder='xxxxxxxxxxxxxxxxx' error={formError.password?.message as string} register={register} />
                <Input label='Confirm Password' type='password' Icon={Lock} name='rePassword' placeholder='xxxxxxxxxxxxxxxxx' error={formError.rePassword?.message as string} register={register} />
                <Input label='Phone' type='tel' Icon={Phone} name='phone' placeholder='01012345678' error={formError.phone?.message as string} register={register} />
                <button type='submit' className='w-full p-3 bg-[#8b5e35e6] text-white rounded-full transition-colors hover:bg-primary'>
                  {loading === "pending" ? <Loader className='animate-spin mx-auto' /> : 'Sign Up'}
                </button>
                <p className='text-center mt-[6px]'>Already have an account? <Link to="/auth/login" className='underline text-primary'>Login</Link> </p>
              </form>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 h-screen">
            <AuthSlider />
          </div>
        </div>
      </section>
    
    </>
  )
}
