'use client'

import React, { useState } from "react"
import { signup } from './actions'
import Link from "next/link"
import clsx from "clsx"

interface PasswordsObj {
  password: string,
  passwordTouched: boolean,
  confirmPassword: string,
  confirmPasswordTouched: boolean,
}

export default function Form() {
  const [passwords, setPasswords] = useState<PasswordsObj>({
    password: '',
    passwordTouched: false,
    confirmPassword: '',
    confirmPasswordTouched: false
  })

  function onChange(name: "password" | "confirmPassword") {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswords((prev) => ({... prev, [name]: event.target.value}))
    }
  }

  function onBlur(name: "passwordTouched" | "confirmPasswordTouched") {
    return () => {
      setPasswords((prev) => ({... prev, [name]: true}))
    }
  }

  return (
    <form action={signup}>

      <label htmlFor="email" className="block mb-1">Email</label>
      <input placeholder="johnsmith@email.com" id="email" name="email" type="email" className="border-solid border-2 rounded-lg mb-4 p-2"/>

      <label htmlFor="password" className="block mb-1">Password</label>
      <input onBlur={onBlur('passwordTouched')} onChange={onChange('password')} value={passwords.password} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" id="password" name="password" type="password" className="border-solid border-2 rounded-lg mb-1 p-2"/>
      <div className={
        clsx(
          "text-red-600 transition-all opacity-0", 
          {"opacity-100 mt-3 mb-3": passwords.password.length < 10 && passwords.passwordTouched}
        )
      }
      >Your password must be longer than 9 characters.</div>

      <label htmlFor="confirm-password" className="block mb-1">Confirm Password:</label>
      <input onBlur={onBlur('confirmPasswordTouched')} onChange={onChange('confirmPassword')} value={passwords.confirmPassword} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" id="confirm-password" name="confirm-password" type="password" className="border-solid border-2 rounded-lg mb-1 p-2"/>
      <div className={
        clsx(
          "text-red-600 transition-all opacity-0", 
          {"opacity-100 mt-3 mb-5": (passwords.confirmPassword !== passwords.password) && passwords.confirmPasswordTouched}
        )
      }
      >Your passwords must match.</div>

      <div className="flex flex-row gap-2 items-center">
        <button type="submit" disabled={passwords.password !== passwords.confirmPassword || passwords.password.length < 10} className="border-solid border-2 border-slate-400 w-100 transition:all duration-300 hover:bg-slate-400 rounded-sm p-2 disabled:opacity-50 disabled:hover:bg-inherit">Submit</button>
        <p>or</p>
        <Link className="border-solid border-2 p-2 rounded-sm" href="/login">Login</Link>
      </div>
    </form>
  )

}