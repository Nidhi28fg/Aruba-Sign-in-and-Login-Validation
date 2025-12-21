'use client'

import TextField, { TextFieldProps } from '@mui/material/TextField'
import { styled, Theme } from '@mui/material/styles'

/**
 * Custom styled TextField component
 * Provides consistent styling across the application
 */
const StyledTextField = styled(TextField)(({ theme }: { theme: Theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

/**
 * Custom TextField component wrapper
 * Extends MUI TextField with consistent styling
 * 
 * @param props - All standard TextField props from MUI
 */
const CustomTextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} fullWidth />
}

export default CustomTextField
