/**
 * Validation utility functions
 * Contains email, password, and name validation helpers
 */

/**
 * Validates email format using regex
 * @param email - Email string to validate
 * @returns true if email is valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates password meets requirements
 * Requirements: minimum 8 characters, at least one uppercase, one lowercase, one number
 * @param password - Password string to validate
 * @returns object with isValid flag and error message if invalid
 */
export const validatePassword = (password: string): { isValid: boolean; error?: string } => {
  if (!password) {
    return { isValid: false, error: 'Password is required' }
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' }
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' }
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' }
  }
  
  if (!/[0-9]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one number' }
  }
  
  return { isValid: true }
}

/**
 * Validates name field
 * @param name - Name string to validate
 * @returns object with isValid flag and error message if invalid
 */
export const validateName = (name: string): { isValid: boolean; error?: string } => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Name is required' }
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' }
  }
  
  if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
    return { isValid: false, error: 'Name can only contain letters and spaces' }
  }
  
  return { isValid: true }
}

/**
 * Validates email field
 * @param email - Email string to validate
 * @returns object with isValid flag and error message if invalid
 */
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email || email.trim().length === 0) {
    return { isValid: false, error: 'Email is required' }
  }
  
  if (!isValidEmail(email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }
  
  return { isValid: true }
}
