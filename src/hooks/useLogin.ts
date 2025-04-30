import { zodResolver } from "@hookform/resolvers/zod";
import actAuthLogin from "@store/auth/act/actAuthLogin";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { signInSchema, TSignIn } from "@validations/signInSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const { loading, token } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors: formError}} = useForm<TSignIn>({
    mode: 'onTouched',
    resolver: zodResolver(signInSchema)
  })
  const submitForm: SubmitHandler<TSignIn> = (data) => {
    dispatch(actAuthLogin(data)).unwrap().then((res) => {
      if (res.message === "success") {
        localStorage.setItem('accessToken', res.token as string);
        navigate('/home')
        toast.success("Welcome back! You've logged in successfully.", {
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
