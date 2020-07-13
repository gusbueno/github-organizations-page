export const FETCH_ORGANIZATION_DETAIL_START: string = 'FETCH_ORGANIZATION_DETAIL_START'
export const FETCH_ORGANIZATION_DETAIL_SUCCESS: string = 'FETCH_ORGANIZATION_DETAIL_SUCCESS'
export const FETCH_REPOSITORIES_SUCCESS: string = 'FETCH_REPOSITORIES_SUCCESS'
export const FETCH_ORGANIZATION_DETAIL_FAIL: string = 'FETCH_ORGANIZATION_DETAIL_FAIL'

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

export interface IOrganizationDetailState {
  isFetching: boolean,
  organizationInfo: IOrganizationInfo,
  repositories: Array<IRepository>
}

interface IOrganizationDetailStartAction {
  type: typeof FETCH_ORGANIZATION_DETAIL_START
}

interface IOrganizationDetailSuccessAction {
  type: typeof FETCH_ORGANIZATION_DETAIL_SUCCESS
}

interface IOrganizationDetailFailAction {
  type: typeof FETCH_ORGANIZATION_DETAIL_FAIL
}

export type OrganizationDetailActionTypes =
  IOrganizationDetailStartAction |
  IOrganizationDetailSuccessAction |
  IOrganizationDetailFailAction

export interface IOrganizationDetailProps {
  onGetOrganizationData: (organizationName: string) => void
}

export type Props = IOrganizationDetailProps & IOrganizationDetailState
