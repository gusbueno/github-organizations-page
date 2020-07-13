import styled from 'styled-components'
import { rgba } from 'polished'

import { theme, palette } from '../../../UI/core'

export const Container = styled.form`
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  padding: 0 ${theme.space};
  box-sizing: border-box;
  border-bottom: 1px solid ${rgba(palette.black, 0.1)};
`
