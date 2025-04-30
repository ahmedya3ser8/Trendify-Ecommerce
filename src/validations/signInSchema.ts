import { z } from "zod"

const signInSchema = z.object({
  email: z.string().min(1, {message: 'email is required'}).email(),
  password: z.string().min(1, {message: 'password is required'})
})

type TSignIn = z.infer<typeof signInSchema>

export {signInSchema, type TSignIn}
