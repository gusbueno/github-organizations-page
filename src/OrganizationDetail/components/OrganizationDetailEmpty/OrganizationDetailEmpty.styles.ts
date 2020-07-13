import styled from 'styled-components'

import { theme } from '../../../UI/core'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
`

export const MainText = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-family: Roboto;
`
