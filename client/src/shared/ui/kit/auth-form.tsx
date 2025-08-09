import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { AuthFormProps } from '@/shared/model/types'
import { Button } from '@/shared/ui/kit/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'

export const AuthForm = ({
  fields,
  schema,
  onSubmit,
  isPending = false,
  errorMessage,
  submitText,
  cancelText,
  cancelHref
}: AuthFormProps) => {
  const form = useForm({ resolver: zodResolver(schema) })
  const handleSubmit = form.handleSubmit(onSubmit)

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        {fields.map(field => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: f }) => (
              <FormItem>
                <FormLabel className='font-semibold'>
                  {field.label}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    type={field.type || 'text'}
                    {...f}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {errorMessage && (
          <p className='text-red-500 text-sm'>{errorMessage}</p>
        )}
        <div className='w-full flex justify-between'>
          <Button
            className='bg-black text-white w-4/9'
            disabled={isPending}
            type='submit'
          >
            {submitText}
          </Button>
          {cancelText && cancelHref && (
            <Button
              className='bg-black text-white w-4/9'
              disabled={isPending}
              type='button'
            >
              <Link to={cancelHref}>{cancelText}</Link>
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
