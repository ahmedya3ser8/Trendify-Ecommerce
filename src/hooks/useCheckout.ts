import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actCashOrder from "@store/orders/act/actCashOrder";
import actCheckoutOnline from "@store/orders/act/actCheckoutOnline";
import { checkoutSchema, TCheckout } from "@validations/checkoutSchema";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function useCheckout() {
  const dispatch = useAppDispatch();
  const {loading, session} = useAppSelector(state => state.orders);
  const params = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('online');
  const {register, handleSubmit, formState: {errors}} = useForm<TCheckout>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema)
  })
  const submitForm: SubmitHandler<TCheckout> = (data) => {
    if (paymentMethod === 'online') {
      dispatch(actCheckoutOnline({cartId: params.id as string, shippingAddress: data})).unwrap().then(() => {
        open(session?.url, '_self');
        toast.success('Redirecting you to our secure payment provider... Please wait.', {
          position: 'top-right'
        })
      })
    } else if (paymentMethod === 'cash') {
      dispatch(actCashOrder({cartId: params.id as string, shippingAddress: data})).unwrap().then((res) => {
        if (res.status === "success") {
          navigate('/allorders');
          toast.success('Thank you! Your order was successful.', {
            position: 'top-right'
          })
        }
      })
    }
  }
  return {loading, setPaymentMethod, register, handleSubmit, errors, submitForm}
}
