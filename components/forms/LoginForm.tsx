'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Input from './Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import cookie from 'js-cookie'
import Button from '../ui/Button'

type Inputs = {
  email: string
  password: string
}

export default function LoginForm () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const id = toast.loading('Please wait...')
    try {
      const res = await axios.post('/api/auth/login', data)

      if (res?.data && res?.data?.token) {
        cookie.set('token', res?.data?.token, { expires: 1 })
        toast.update(id, {
          render: 'Welcome! You have successfully logged in to your account.',
          type: 'success',
          isLoading: false,
          autoClose: 6000
        })
        router.push('/dashboard')
      } else {
        toast.update(id, {
          render:
            "Sorry, we couldn't log you in. Please check your email and password and try again.",
          type: 'error',
          isLoading: false,
          autoClose: 7000
        })
      }
      console.log('res', res)
    } catch (error) {
      toast.update(id, {
        render:
          "Sorry, we couldn't log you in. Please check your email and password and try again.",
        type: 'error',
        isLoading: false,
        autoClose: 7000
      })
      console.log('error', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex max-w-md flex-col gap-4'
    >
      <Input
        htmlFor='email1'
        label='Your email'
        id='email'
        placeholder='name@zigwig.com'
        required
        register={register}
        type='email'
        name='email'
        error={errors}
      />
      <Input
        htmlFor='password1'
        label='Your password'
        id='password'
        type='password'
        name='password'
        register={register}
        placeholder='Enter password'
        error={errors}
      />
      <Button type='submit' text='Login Now' />
    </form>
  )
}
