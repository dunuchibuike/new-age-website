import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getPasswordStrength = (password) => {
  if (password.length === 0) return ''
  const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
  const medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
  if (strong.test(password)) return 'strong'
  if (medium.test(password)) return 'medium'
  return 'weak'
}

const Validation = () => {
  const [errors, setErrors] = useState({})
  const [strength, setStrength] = useState('')

  const validate = (name, value) => {
    let error = ''

    if (name === 'firstName' && !value.trim()) error = 'First name is required'
    if (name === 'lastName' && !value.trim()) error = 'Last name is required'
    if (name === 'phoneNumber' && !value.trim()) error = 'Phone number is required'

    if (name === 'email') {
      if (!value.trim()) error = 'Email is required'
      else if (!emailRegex.test(value)) error = 'Enter a valid email'
    }

    if (name === 'password') {
      if (!value) error = 'Password is required'
      else if (value.length < 6) error = 'Password must be at least 6 characters'
      setStrength(getPasswordStrength(value))
    }

    setErrors(prev => ({ ...prev, [name]: error }))
  }

  return { errors, strength, validate }
}

export default Validation