import useForgetPassword from '@hooks/useForgetPassword';
import PageTitle from '@components/common/page-title/PageTitle';
import Input from '@components/forms/input/Input';
import AuthSlider from '@components/trendify/auth-slider/AuthSlider';
import { Loader, Lock, Mail, RotateCcw } from 'lucide-react';

export default function ForgetPassword() {
  const {loading, submitForgetPass, submitVerifyCode, submitResetPass, steps, registerForgetPass, handleForgetPass, forgetError, registerVerifyCode, handleVerifyCode, verifyError, registerResetPass, handleResetPass, resetPassError} = useForgetPassword()
  const renderForm = () => {
    switch(steps) {
      case 1: 
        return <>
          <form onSubmit={handleForgetPass(submitForgetPass)} className="my-3" >
            <Input label='E-mail' type='email' Icon={Mail} name='email' placeholder='user@user.com' error={forgetError.email?.message as string} register={registerForgetPass} />
            <button type="submit" className="w-full p-3 bg-[#8b5e35e6] transition-all duration-300 hover:bg-primary text-white rounded-3xl">
              {loading === "pending" ? <Loader className='animate-spin mx-auto' /> : 'Send Code'}
            </button>
          </form>
        </>
      case 2: 
        return <>
          <form onSubmit={handleVerifyCode(submitVerifyCode)}  className="my-3" >
            <Input label='ResetCode' Icon={RotateCcw} name='resetCode' placeholder='0123456' error={verifyError.resetCode?.message as string} register={registerVerifyCode} />
            <button type="submit" className="w-full p-3 bg-[#8b5e35e6] transition-all duration-300 hover:bg-primary text-white rounded-3xl">  
              {loading === "pending" ? <Loader className='animate-spin mx-auto' /> : 'verify Code'}
            </button>
          </form>
        </>
      case 3: 
        return <>
          <form onSubmit={handleResetPass(submitResetPass)}  className="my-3">
            <Input disabled={true} label='E-mail' type='email' Icon={Mail} name='email' placeholder='user@user.com' error={resetPassError.email?.message as string} register={registerResetPass} />
            <Input label='New Password' type='password' Icon={Lock} name='newPassword' placeholder='xxxxxxxxxxxxxxxxx' error={resetPassError.newPassword?.message as string} register={registerResetPass} />
            <button type="submit" className="w-full p-3 bg-[#8b5e35e6] transition-all duration-300 hover:bg-primary text-white rounded-3xl">
              {loading === "pending" ? <Loader className='animate-spin mx-auto' /> : 'Reset Password'}
            </button>
          </form>
        </>
      default:
        return 'step 1';
    }
  }
  return (
    <>
      <PageTitle title='ForgetPassword' />
      <section>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="container w-[70%]">
              <h2 className="text-text-color text-3xl mb-2 font-medium">Forget Password</h2>
              <p className="text-sm text-gray-400 mb-4">Please Finish This steps in order to reset your password</p>
              {renderForm()}
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
