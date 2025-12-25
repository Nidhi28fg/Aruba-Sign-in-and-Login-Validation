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
import { validateEmail } from '@/utils/validation'
import * as motion from "motion/react-client"



/**
 * Login page component
 * Handles user authentication with email and password
 * Includes form validation and error handling
 */
export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string; submit?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Validates the login form
   * @returns true if form is valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {}

    // Validate email
    const emailValidation = validateEmail(email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long'
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
      console.log('Login successful:', { email })
      setErrors({ submit: 'Login successful! (This is a demo)' })
    } catch (error) {
      setErrors({ submit: 'Invalid email or password. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#0920ecff",
    borderRadius: 5,
    
}

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
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
         <Box
       sx={{
              display: 'flex',
              justifyContent:'left',   
      }}
        >
        <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 15 }}
        />
        </Box>
        <Paper
          elevation={8}
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
            Welcome Back
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Sign in to your account
          </Typography>

          {/* Error Alert */}
          {errors.submit && (
            <Alert
              severity={errors.submit.includes('successful') ? 'success' : 'error'}
              variant="filled"
              sx={{ mb: 3 }}
            >
              {errors.submit}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
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
              autoFocus
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
              }}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              autoComplete="current-password"
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
                  background: '#009dffff',
                },
              }}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>

            {/* Sign Up Link */}
            <Grid container justifyContent="center">
              <Grid size={12}>
                <Typography variant="body2">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/signup"
                    underline="hover"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      cursor: 'pointer',
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            
          </Box>
        </Paper> 
        <Box
       sx={{
              display: 'flex',
              justifyContent:'right',
              zIndex:1,
    
      }}
        >
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 4,
                scale: { type: "spring", visualDuration: 4, bounce: 5 },
            }}
            style={ball}
        />
        </Box>
      </Container>
    </Box>
  )
}
