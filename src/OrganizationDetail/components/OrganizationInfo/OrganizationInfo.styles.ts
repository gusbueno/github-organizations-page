import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme, palette } from '../../../UI/core'

export const Container = styled.section`
  display: flex;
  padding: ${theme.space};
  box-sizing: border-box;
  flex-direction: column;
`

export const InfoWrapper = styled.section`
  display: flex;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const LogoImage = styled.img`
  width: 100px;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  padding: 0 ${theme.space};
  flex-direction: column;
`

export const NameText = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Roboto;
`

export const DescriptionText = styled.span`
  font-size: ${theme.fontSize.default};
  font-family: Roboto;
  align-text: left;
  margin-top: ${theme.space};
  color: ${palette.dark};
`

export const ExtraInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.space};
`

export const ExtraInfoItem = styled.div`
  margin-right: ${theme.space};
  margin-bottom: calc(${theme.space}/2);
  display: flex;
  align-items: center;
`

export const ExtraInfoItemIcon = styled.img`
  margin-right: calc(${theme.space}/2);
`

export const ExtraInfoItemText = styled.span`
  font-size: ${theme.fontSize.sm};
  font-family: Roboto;
  color: ${rgba(palette.dark, 0.8)};

  > a:hover {
    color: ${palette.primary};
  }
`

export const PinnedItemsWrapper = styled.section`
  display: flex;
  margin-top: calc(${theme.space}*2);
  flex-direction: column;
`

export const PinnedItemsTitle = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Roboto;
`

export const PinnedItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(320px, 1fr));
  grid-gap: ${theme.space};
  margin-top: ${theme.space};
`

export const PinnedItemBoxLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${rgba(palette.dark, 0.4)};
  padding: ${theme.space};
  box-sizing: border-box;
  height: 200px;
  text-decoration: none;
  color: ${palette.black};
  &:hover {
    background-color: ${palette.secondary};
    cursor: pointer;
  }
`

export const PinnedItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PinnedItemNameText = styled.span`
  font-size: ${theme.fontSize.default};
  font-family: Roboto;
`

export const PinnedItemDescriptionText = styled.span`
  font-size: ${theme.fontSize.default};
  font-family: Roboto;
  margin-top: calc(${theme.space}/2);
  color: ${palette.dark};
`

export const PinnedItemExtraInfoWrapper = styled.div`
  display: flex;
`

export const PinnedItemExtraInfoElement = styled.div`
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

export const PinnedItemExtraInfoElementText = styled.span`
  font-size: ${theme.fontSize.sm};
  font-family: Roboto;
  color: ${rgba(palette.dark, 0.8)};
`
