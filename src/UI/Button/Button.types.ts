import React from 'react'

import { palette } from '../core'

export interface ButtonProps {
  /* Text value of the button */
  children: string | Node | any,
  /* Whether the button is a submit or a button */
  type?: 'submit' | 'button',
  /* Color of the button */
  theme?: keyof typeof palette,
  /* Whether the button is disabled or not */
  isDisabled?: boolean,
  /* Function to be executed when the button is clicked */
  onClick?: () => void,
  /* Margin left */
  ml?: number,
  /* Margin top */
  mt?: number,
  /* Margin right */
  mr?: number,
  /* Margin bottom */
  mb?: number
}

export type Props = ButtonProps & React.HtmlHTMLAttributes<HTMLButtonElement>
