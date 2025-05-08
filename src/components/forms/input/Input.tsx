import { LucideIcon } from "lucide-react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TInputProps<TFieldValue extends FieldValues> = {
  label: string,
  type?: string,
  name: Path<TFieldValue>,
  register: UseFormRegister<TFieldValue>,
  error: string,
  placeholder: string,
  Icon: LucideIcon,
  disabled?: boolean
}

export default function Input<TFieldValue extends FieldValues>({label, Icon, disabled, placeholder, type = 'text', name, register, error}: TInputProps<TFieldValue>) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className='text-text dark:text-gray-100 mb-2 block'>{label}</label>
      <div className="relative text-sm">
        <input disabled={disabled} type={type} {...register(name)} id={name} placeholder={placeholder} className='ps-8 w-full h-[40px] bg-white dark:bg-[#1e1e1e] dark:text-gray-100 dark:placeholder-gray-400 rounded-md border-0 border-none outline-none focus:outline-none focus:ring-0 focus:shadow-none focus:border-none' />
        <span className='absolute left-1 top-2 text-primary dark:text-gray-100'>
          <Icon className='w-4' />
        </span>
      </div>
      <p className="text-red-600 text-sm font-semibold mt-[2px]">{error}</p>
    </div>
  )
}
