import { z } from "zod"

const signUpSchema = z.object({
  name: z.string().min(1, {message: 'username is required'}).min(3, {message: 'username should be more than or equal 3 chars'}).max(20, {message: 'username should be less than or equal 20 chars'}),
  email: z.string().min(1, {message: 'email is required'}).email(),
  password: z.string().min(1, {message: 'password is required'}).min(8, {message: 'password should be at least 8 chars'}).regex(/^[A-Z][a-z0-9]{8,}$/, {message: 'password should be start with capital letter'}),
  rePassword: z.string().min(1, {message: 'confirm password'}),
  phone: z.string().min(1, {message: 'phone is required'}).regex(/^01[0125][0-9]{8}$/, {message: 'accept only egyptian phones'})
}).refine(input => input.password === input.rePassword, {message: 'password and confirm password dose not match', path: ['rePassword']})

type TSignUp = z.infer<typeof signUpSchema>

export {signUpSchema, type TSignUp}
