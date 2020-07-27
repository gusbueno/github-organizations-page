interface IPrimaryLanguage {
  name: string,
  color: string
}

export interface IPinnedItem {
  id: string,
  name: string,
  description: string,
  stars: number,
  forkCount: number,
  resourcePath: string,
  primaryLanguage: IPrimaryLanguage
}

export interface IRepository {
  id: string,
  name: string,
  description: string,
  isFork: boolean,
  forkCount: number,
  license: string,
  forkedFrom: string,
  resourcePath: string,
  stars: number,
  primaryLanguage: IPrimaryLanguage,
  updatedAt: string
}

export interface IOrganizationInfo {
  name: string,
  avatarUrl: string,
  description: string,
  location: string,
  websiteUrl: string,
  pinnedItems: Array<IPinnedItem>
}
