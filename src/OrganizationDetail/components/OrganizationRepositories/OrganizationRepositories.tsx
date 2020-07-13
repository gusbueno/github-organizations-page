import React from 'react'

import type { Props } from './OrganizationRepositories.types'
import {
  Container,
  TitleWrapper,
  TitleText,
  RepoWrapper,
  RepoNameTextLink,
  ForkedSourceText,
  RepoDescriptionText,
  RepoExtraInfoWrapper,
  RepoExtraInfoElement,
  LanguageCircle,
  RepoExtraInfoElementText,
  RepoExtraInfoItemIcon
} from './OrganizationRepositories.styles'
import { IRepository } from '../../OrganizationDetail.types'
import starIcon from '../../../assets/star.svg'
import gitBranchIcon from '../../../assets/git-branch.svg'
import lawIcon from '../../../assets/law.svg'
import { formatDate } from '../../../utils'

const OrganizationRepositories = ({ repositories }: Props) => {
  const renderRepositories = () => {
    return repositories.map((repo: IRepository) => {
      const {
        id,
        name,
        description,
        isFork,
        forkCount,
        license,
        forkedFrom,
        resourcePath,
        stars,
        primaryLanguage,
        updatedAt
      } = repo

      return (
        <RepoWrapper key={id}>
          <RepoNameTextLink href={`https://github.com${resourcePath}`} target="_blank">{name}</RepoNameTextLink>
          {isFork && (
            <ForkedSourceText>
              Forked from <a href={`https://github.com/${forkedFrom}`} target="_blank">{forkedFrom}</a>
            </ForkedSourceText>
          )}
          {description && (
            <RepoDescriptionText>{description}</RepoDescriptionText>
          )}
          <RepoExtraInfoWrapper>
            {primaryLanguage && (
              <RepoExtraInfoElement>
                <LanguageCircle color={primaryLanguage.color} />
                <RepoExtraInfoElementText>{primaryLanguage.name}</RepoExtraInfoElementText>
              </RepoExtraInfoElement>
            )}
            {stars > 0 && (
              <RepoExtraInfoElement>
                <RepoExtraInfoItemIcon src={starIcon} alt="stars" />
                <RepoExtraInfoElementText>{stars}</RepoExtraInfoElementText>
              </RepoExtraInfoElement>
            )}
            {forkCount > 0 && (
              <RepoExtraInfoElement>
                <RepoExtraInfoItemIcon src={gitBranchIcon} alt="git branch" />
                <RepoExtraInfoElementText>{forkCount}</RepoExtraInfoElementText>
              </RepoExtraInfoElement>
            )}
            {license && (
              <RepoExtraInfoElement>
                <RepoExtraInfoItemIcon src={lawIcon} alt="law" />
                <RepoExtraInfoElementText>{license}</RepoExtraInfoElementText>
              </RepoExtraInfoElement>
            )}
            <RepoExtraInfoElement>
              <RepoExtraInfoElementText>Updated on {formatDate(updatedAt)}</RepoExtraInfoElementText>
            </RepoExtraInfoElement>
          </RepoExtraInfoWrapper>
        </RepoWrapper>
      )
    })
  }

  return (
    <Container>
      <TitleWrapper>
        <TitleText>Repositories</TitleText>
      </TitleWrapper>
      {repositories.length > 0 && renderRepositories()}
    </Container>
  )
}

export default OrganizationRepositories
