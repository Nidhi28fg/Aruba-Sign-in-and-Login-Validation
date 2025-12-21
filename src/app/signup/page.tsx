'use client'

import { useState, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import CustomTextField from '@/components/CustomTextField'
import PasswordInput from '@/components/PasswordInput'
import { validateName, validateEmail, validatePassword } from '@/utils/validation'

/**
 * Signup page component
 * Handles user registration with name, email, and password
 * Includes comprehensive form validation
 */
export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    submit?: string
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Validates the signup form
   * @returns true if form is valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors: {
      name?: string
      email?: string
      password?: string
      confirmPassword?: string
    } = {}

    // Validate name
    const nameValidation = validateName(name)
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.error
    }

    // Validate email
    const emailValidation = validateEmail(email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error
    }

    // Validate password
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.error
    }

    // Validate confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handles form submission
   * @param e - Form event
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Signup successful:', { name, email })
      setErrors({ submit: 'Account created successfully! (This is a demo)' })
    } catch (error) {
      setErrors({ submit: 'Failed to create account. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0c81caff',
        padding: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            padding: { xs: 3, sm: 4, md: 5 },
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Header */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 700,
              background: '#0c81caff',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            Create Account
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Sign up to get started
          </Typography>

          {/* Error/Success Alert */}
          {errors.submit && (
            <Alert
              severity={errors.submit.includes('successfully') ? 'success' : 'error'}
              sx={{ mb: 3 }}
               variant="filled"
            >
              {errors.submit}
            </Alert>
          )}

          {/* Signup Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <CustomTextField
              label="Full Name"
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value)
                if (errors.name) {
                  setErrors((prev: typeof errors) => ({ ...prev, name: undefined }))
                }
              }}
              error={!!errors.name}
              helperText={errors.name || 'Enter your full name'}
              margin="normal"
              autoComplete="name"
              autoFocus
            />

            {/* Email Field */}
            <CustomTextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
                if (errors.email) {
                  setErrors((prev: typeof errors) => ({ ...prev, email: undefined }))
                }
              }}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              autoComplete="email"
            />

            {/* Password Field */}
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
                if (errors.password) {
                  setErrors((prev: typeof errors) => ({ ...prev, password: undefined }))
                }
                // Clear confirm password error if password changes
                if (errors.confirmPassword && confirmPassword) {
                  setErrors((prev: typeof errors) => ({ ...prev, confirmPassword: undefined }))
                }
              }}
              error={!!errors.password}
              helperText={
                errors.password ||
                'Password must be at least 8 characters with uppercase, lowercase, and number'
              }
              margin="normal"
              autoComplete="new-password"
            />

            {/* Confirm Password Field */}
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(e.target.value)
                if (errors.confirmPassword) {
                  setErrors((prev: typeof errors) => ({ ...prev, confirmPassword: undefined }))
                }
              }}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              margin="normal"
              autoComplete="new-password"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isSubmitting}
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                background: '#0c81caff',
                '&:hover': {
                  background: '#023b5eff',
                },
              }}
            >
              {isSubmitting ? 'Creating Account...' : 'Sign Up'}
            </Button>

            {/* Login Link */}
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    underline="hover"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      cursor: 'pointer',
                    }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
