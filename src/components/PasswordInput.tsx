'use client'

import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CustomTextField from './CustomTextField'
import { TextFieldProps } from '@mui/material/TextField'


/**
 * Password input component with visibility toggle
 * Extends CustomTextField with password-specific functionality
 * 
 * @param props - All standard TextField props from MUI
 */
const PasswordInput = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  /**
   * Toggles password visibility state
   */
  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => !prev)
  }

  /**
   * Prevents form submission when clicking the visibility toggle
   */
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
  }

  return (
    <CustomTextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput
