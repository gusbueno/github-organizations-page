import styled from 'styled-components'

import { palette, theme } from '../core'

export const InputStyled = styled.input`
  display: flex;
  flex: 1;
  border-radius: ${theme.borderRadius};
  border-width: 1px;
  border-style: solid;
  border-color: lightgray;
  outline: none;
  padding: 0 ${theme.space};
  font-size: ${theme.fontSize};
  height: 32px;
  font-family: Roboto;
  background-color: ${palette.secondary};

  &:focus {
    border-color: ${palette.dark};
    background-color: ${palette.white};
  }
`
