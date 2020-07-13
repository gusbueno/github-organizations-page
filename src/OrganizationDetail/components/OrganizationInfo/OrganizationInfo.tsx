import React from 'react'

import type { Props } from './OrganizationInfo.types'
import {
  Container,
  InfoWrapper,
  LogoWrapper,
  LogoImage,
  DescriptionWrapper,
  NameText,
  DescriptionText,
  ExtraInfoWrapper,
  ExtraInfoItem,
  ExtraInfoItemIcon,
  ExtraInfoItemText,
  PinnedItemsWrapper,
  PinnedItemsTitle,
  PinnedItemsList,
  PinnedItemBoxLink,
  PinnedItemInfoWrapper,
  PinnedItemNameText,
  PinnedItemDescriptionText,
  PinnedItemExtraInfoWrapper,
  PinnedItemExtraInfoElement,
  LanguageCircle,
  PinnedItemExtraInfoElementText
} from './OrganizationInfo.styles'
import locationIcon from '../../../assets/location.svg'
import linkIcon from '../../../assets/link.svg'
import starIcon from '../../../assets/star.svg'
import gitBranchIcon from '../../../assets/git-branch.svg'
import type { IPinnedItem } from '../../OrganizationDetail.types'

const OrganizationInfo = ({ info }: Props) => {
  const { name, description, avatarUrl, location, pinnedItems, websiteUrl } = info

  const renderPinnedItems = () => {
    return (
      <PinnedItemsWrapper>
        <PinnedItemsTitle>Pinned repositories</PinnedItemsTitle>
        <PinnedItemsList>
          {pinnedItems.map((repo: IPinnedItem) => {
            const { name, description, forkCount, resourcePath, stars, primaryLanguage } = repo
            return (
              <PinnedItemBoxLink href={`https://github.com${resourcePath}`} target="_blank">
                <PinnedItemInfoWrapper>
                  <PinnedItemNameText>{name}</PinnedItemNameText>
                  <PinnedItemDescriptionText>{description}</PinnedItemDescriptionText>
                </PinnedItemInfoWrapper>
                <PinnedItemExtraInfoWrapper>
                  <PinnedItemExtraInfoElement>
                    <LanguageCircle color={primaryLanguage.color} />
                    <PinnedItemExtraInfoElementText>{primaryLanguage.name}</PinnedItemExtraInfoElementText>
                  </PinnedItemExtraInfoElement>
                  {stars > 0 && (
                    <PinnedItemExtraInfoElement>
                      <ExtraInfoItemIcon src={starIcon} alt="stars" />
                      <PinnedItemExtraInfoElementText>{stars}</PinnedItemExtraInfoElementText>
                    </PinnedItemExtraInfoElement>
                  )}
                  {forkCount > 0 && (
                    <PinnedItemExtraInfoElement>
                      <ExtraInfoItemIcon src={gitBranchIcon} alt="git branch" />
                      <PinnedItemExtraInfoElementText>{forkCount}</PinnedItemExtraInfoElementText>
                    </PinnedItemExtraInfoElement>
                  )}
                </PinnedItemExtraInfoWrapper>
              </PinnedItemBoxLink>
            )
          })}
        </PinnedItemsList>
      </PinnedItemsWrapper>
    )
  }

  return (
    <Container>
      <InfoWrapper>
        <LogoWrapper>
          <LogoImage src={avatarUrl} alt={`${name}_logo`} />
        </LogoWrapper>
        <DescriptionWrapper>
          <NameText>{name}</NameText>
          <DescriptionText>{description}</DescriptionText>
          <ExtraInfoWrapper>
            <ExtraInfoItem>
              <ExtraInfoItemIcon src={locationIcon} alt="location" />
              <ExtraInfoItemText>{location}</ExtraInfoItemText>
            </ExtraInfoItem>
            <ExtraInfoItem>
              <ExtraInfoItemIcon src={linkIcon} alt="website" />
              <ExtraInfoItemText>
                <a href={websiteUrl} target="_blank">{websiteUrl}</a>
              </ExtraInfoItemText>
            </ExtraInfoItem>
          </ExtraInfoWrapper>
        </DescriptionWrapper>
      </InfoWrapper>
      {pinnedItems.length > 0 && renderPinnedItems()}
    </Container>
  )
}

export default OrganizationInfo
