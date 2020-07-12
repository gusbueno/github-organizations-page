import React, { forwardRef } from 'react'

import { Props } from './Input.types'
import {
  InputStyled
} from './Input.styles'

const Input = forwardRef<HTMLInputElement, Props>(({
    value,
    onChange,
    type = 'text',
    ...others
  }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }
  return (
    <InputStyled
      ref={ref}
      value={value}
      onChange={handleChange}
      type={type}
      {...others}
    />
  )
})

export default Input
