import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import actForgetPassword from '@store/auth/act/actForgetPassword';
import actVerifyResetCode from '@store/auth/act/actVerifyResetCode';
import actResetPassword from '@store/auth/act/actResetPassword';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgetPasswordSchema, resetPasswordSchema, TForgetPassword, TResetPassword, TVerifyCode, verifyResetCodeSchema } from '@validations/forgetPasswordSchema';

export default function useForgetPassword() {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const [steps, setSteps] = useState(1);
  const {register: registerForgetPass, handleSubmit: handleForgetPass, formState: {errors: forgetError}, reset: resetForgetPass} = useForm<TForgetPassword>({
    mode: 'onTouched',
    resolver: zodResolver(forgetPasswordSchema)
  })
  const {register: registerVerifyCode, handleSubmit: handleVerifyCode, formState: {errors: verifyError}, reset: resetVerifyCode} = useForm<TVerifyCode>({
    mode: 'onTouched',
    resolver: zodResolver(verifyResetCodeSchema)
  })
  const {register: registerResetPass, handleSubmit: handleResetPass, formState: {errors: resetPassError}, reset: resetResetPass, setValue} = useForm<TResetPassword>({
    mode: 'onTouched',
    resolver: zodResolver(resetPasswordSchema)
  })
  const submitForgetPass: SubmitHandler<TForgetPassword> = (data) => {
    dispatch(actForgetPassword(data)).unwrap().then((res) => {
      toast.success(res.message, {
        position: 'top-right'
      })
      setValue('email', data.email);
      setSteps(2);
      resetForgetPass();
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }
  const submitVerifyCode: SubmitHandler<TVerifyCode> = (data) => {
    dispatch(actVerifyResetCode(data)).unwrap().then(() => {
      toast.success('Verification successful', {
        position: 'top-right'
      })
      setSteps(3);
      resetVerifyCode();
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }
  const submitResetPass: SubmitHandler<TResetPassword> = (data) => {
    dispatch(actResetPassword(data)).unwrap().then((res) => {
      localStorage.setItem('accessToken', res.token as string);
      navigate('/auth/login');
      toast.success('Your password has been reset successfully', {
        position: 'top-right'
      })
      resetResetPass()
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }
  return {loading, submitForgetPass, submitVerifyCode, submitResetPass, steps, registerForgetPass, handleForgetPass, forgetError, registerVerifyCode, handleVerifyCode, verifyError, registerResetPass, handleResetPass, resetPassError}
}
