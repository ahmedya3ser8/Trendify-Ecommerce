import { Link, Navigate } from 'react-router-dom';
import useLogin from '@hooks/useLogin';
import Input from '@components/forms/input/Input';
import AuthSlider from '@components/trendify/auth-slider/AuthSlider';
import { Loader, Lock, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function Login() {
  const {handleSubmit, submitForm, register, formError, loading, token} = useLogin();
  if (token !== null) {
    return <Navigate to={'/home'} />
  }
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pt-8 md:pt-24">
            <div className="container w-[70%]">
              <h1 className='text-3xl font-semibold text-text'>Welcome Back!</h1>
              <p className='text-sm text-gray-400'>Please log in or sign up to continue using our app.</p>
              <form onSubmit={handleSubmit(submitForm)} className='mt-4'>
                <Input label='E-mail' type='email' Icon={Mail} name='email' placeholder='user@user.com' error={formError.email?.message as string} register={register} />
                <Input label='Password' type='password' Icon={Lock} name='password' placeholder='xxxxxxxxxxxxxxxxx' error={formError.password?.message as string} register={register} />
                <Link to='/auth/forget-password' className="block text-right my-2 text-primary cursor-pointer">Forgot Password?</Link>
                <button type='submit' className='w-full p-3 bg-[#8b5e35e6] text-white rounded-full transition-colors hover:bg-primary'>
                  {loading === "pending" ? <Loader className='animate-spin mx-auto' /> : 'Sign In'}
                </button>
                <p className='text-center mt-[6px]'>Don't have an account? <Link to="/auth/register" className='underline text-primary'>Register</Link> </p>
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
