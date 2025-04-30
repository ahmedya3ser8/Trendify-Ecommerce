import { zodResolver } from "@hookform/resolvers/zod";
import actAuthRegister from "@store/auth/act/actAuthRegister";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { signUpSchema, TSignUp } from "@validations/signUpSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const dispatch = useAppDispatch();
  const { loading, token } = useAppSelector(state => state.auth);
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors: formError}} = useForm<TSignUp>({
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema)
  })
  const submitForm: SubmitHandler<TSignUp> = (data) => {
    dispatch(actAuthRegister(data)).unwrap().then((res) => {
      if (res.message === "success") {
        navigate('/auth/login')
        toast.success('Registration successful! You can now log in with your account.', {
          position: 'top-right'
        })
      }
    }).catch((err)=> {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }
  return {handleSubmit, submitForm, formError, register, loading, token}
}
