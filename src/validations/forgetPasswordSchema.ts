import { z } from 'zod';

const forgetPasswordSchema = z.object({
  email: z.string().min(1, {message: 'email is required'}).email()
})

const verifyResetCodeSchema = z.object({
  resetCode: z.string().min(1, {message: 'resetCode is required'}).regex(/^[0-9]{6,}$/, {message: 'code should be at least 6 digts'})
})

const resetPasswordSchema = z.object({
  email: z.string().min(1, {message: 'email is required'}).email(),
  newPassword: z.string().min(1, {message: 'newPassword is required'}).min(8, {message: 'newPassword should be at least 8 chars'}).regex(/^[A-Z][a-z0-9]{8,}$/, {message: 'newPassword should be start with capital letter'}),
})

type TForgetPassword = z.infer<typeof forgetPasswordSchema>
type TVerifyCode = z.infer<typeof verifyResetCodeSchema>
type TResetPassword = z.infer<typeof resetPasswordSchema>

export {forgetPasswordSchema, type TForgetPassword, verifyResetCodeSchema, type TVerifyCode, resetPasswordSchema, type TResetPassword}
