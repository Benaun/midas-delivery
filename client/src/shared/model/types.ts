import { ZodSchema } from 'zod'

export interface AuthFormField {
  name: string
  label: string
  type?: string
  placeholder?: string
}

export interface AuthFormProps<T> {
  fields: AuthFormField[]
  schema: ZodSchema<T>
  onSubmit: (data: T) => void
  isPending?: boolean
  errorMessage?: string
  submitText: string
  cancelText?: string
  cancelHref?: string
}
