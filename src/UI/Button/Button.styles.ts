import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { ButtonProps } from './Button.types'
import { palette, theme as UITheme } from '../core'

export const ButtonStyled = styled.button(({
  theme,
  ml,
  mt,
  mr,
  mb
}: ButtonProps) => {
  const whiteThemeStyle = css`
    color: black;
    border: 1px solid ${palette.primary};
  `
  const themeStyle = css`
    background-color: ${palette[theme]};
    ${palette[theme] === palette.white && whiteThemeStyle}
  `

  const marginLeftStyle = css`
    margin-left: ${ml}px;
  `

  const marginTopStyle = css`
    margin-top: ${mt}px;
  `

  const marginRightStyle = css`
    margin-right: ${mr}px;
  `

  const marginBottomStyle = css`
    margin-bottom: ${mb}px;
  `

  return css`
    height: 32px;
    font-size: ${UITheme.fontSize};
    font-family: Roboto;
    border-radius: ${UITheme.borderRadius};
    box-sizing: border-box;
    border: 0;
    padding: 0 ${UITheme.space};
    outline: none;
    color: ${palette.white};

    &:hover, :focus {
      cursor: pointer;
      background-color: ${rgba(palette[theme], 0.9)};
    }

    &:disabled {
      background-color: ${rgba(palette[theme], 0.9)};
      cursor: not-allowed;
    }

    ${theme && themeStyle}
    ${ml && marginLeftStyle}
    ${mt && marginTopStyle}
    ${mr && marginRightStyle}
    ${mb && marginBottomStyle}
  `
})
