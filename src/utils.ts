import { IPinnedItem, IRepository } from './OrganizationDetail/OrganizationDetail.types'

export const formatDate = (date: string): string => {
  const today = new Date()
  const dateObj = new Date(date)
  const dateFormatted: string = dateObj.toLocaleString(
    'default', {
      month: 'short',
      day: 'numeric',
      ...(today.getFullYear() !== dateObj.getFullYear() && { year: 'numeric' })
    })

  return dateFormatted
}

export const normalizePinnedItems = (pinnedItems: Array<any>): Array<IPinnedItem> => {
  return pinnedItems.map((pinnedItem: any): IPinnedItem => {
    const { id, name, forkCount, description, primaryLanguage, stargazers: { totalCount }, resourcePath } = pinnedItem.node
    return {
      id,
      name,
      forkCount,
      description,
      primaryLanguage: (primaryLanguage && {
        name: primaryLanguage.name,
        color: primaryLanguage.color
      }),
      stars: totalCount,
      resourcePath
    }
  })
}

export const normalizeRepositories = (repositories: Array<any>): Array<IRepository> => {
  return repositories.map((repo: any): IRepository => {
    const { id, name, description, isFork, forkCount, licenseInfo, parent, resourcePath, stargazers: { totalCount }, primaryLanguage, updatedAt } = repo
    return {
      id,
      name,
      description,
      isFork,
      forkCount,
      forkedFrom: parent?.nameWithOwner,
      license: licenseInfo?.spdxId,
      resourcePath,
      stars: totalCount,
      primaryLanguage: (primaryLanguage && {
        name: primaryLanguage.name,
        color: primaryLanguage.color
      }),
      updatedAt
    }
  })
}
