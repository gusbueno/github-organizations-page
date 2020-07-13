import  styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme, palette } from '../../../UI/core'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: ${theme.space};
  box-sizing: border-box;
  border-bottom: 1px solid ${rgba(palette.dark, 0.4)};
`

export const TitleText = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Roboto;
`

export const RepoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.space};
  border-bottom: 1px solid ${rgba(palette.dark, 0.4)};
  &:hover {
    background-color: ${palette.secondary};
    cursor: pointer;
  }
`

export const RepoNameTextLink = styled.a`
  font-size: ${theme.fontSize.default};
  font-family: Roboto;
  text-decoration: none;
  color: ${palette.dark};
`

export const ForkedSourceText = styled.span`
  font-size: ${theme.fontSize.sm};
  font-family: Roboto;
  color: ${rgba(palette.dark, 0.8)};
  > a {
    text-decoration: none;
    color: ${rgba(palette.dark, 0.8)};
    &:hover {
      color: ${palette.primary};
    }
  }
`

export const RepoDescriptionText = styled.span`
  font-size: ${theme.fontSize.default};
  font-family: Roboto;
  margin-top: calc(${theme.space}/2);
  color: ${palette.dark};
`

export const RepoExtraInfoWrapper = styled.div`
  display: flex;
  margin-top: ${theme.space};
`

export const RepoExtraInfoElement = styled.div`
  display: flex;
  margin-right: ${theme.space};
  align-items: center;
`

interface ILanguageCircle {
  color: string
}

export const LanguageCircle = styled.span(({ color }: ILanguageCircle) => {
  return css`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${color};
    margin-right: calc(${theme.space}/2);
  `
})

export const RepoExtraInfoElementText = styled.span`
  font-size: ${theme.fontSize.sm};
  font-family: Roboto;
  color: ${rgba(palette.dark, 0.8)};
`

export const RepoExtraInfoItemIcon = styled.img`
  margin-right: calc(${theme.space}/2);
`
