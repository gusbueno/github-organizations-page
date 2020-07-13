import { IOrganizationDetailState } from './OrganizationDetail/OrganizationDetail.types'

export interface IStore {
  organizationDetail: IOrganizationDetailState
}

export default {
  organizationDetail: {
    isFetching: false,
    organizationInfo: null
  }
}
