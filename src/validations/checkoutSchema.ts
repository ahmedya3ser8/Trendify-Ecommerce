import { z } from "zod"

const checkoutSchema = z.object({
  details: z.string().min(1, {message: 'details is required'}),
  phone: z.string().min(1, {message: 'phone is required'}).regex(/^01[0125][0-9]{8}$/, {message: 'accept only egyptian phones'}),
  city: z.string().min(1, {message: 'city is required'})
})

type TCheckout = z.infer<typeof checkoutSchema>

export {checkoutSchema, type TCheckout}
