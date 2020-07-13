import store from '../store'
import {
  IOrganizationDetailState,
  OrganizationDetailActionTypes,
  FETCH_ORGANIZATION_DETAIL_START,
  FETCH_ORGANIZATION_DETAIL_SUCCESS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_ORGANIZATION_DETAIL_FAIL
} from './OrganizationDetail.types'

const defaultState: IOrganizationDetailState = store.organizationDetail

const organizationDetail = (state = defaultState, action: OrganizationDetailActionTypes): IOrganizationDetailState => {
  switch (action.type) {
    case FETCH_ORGANIZATION_DETAIL_START: {
      return {
        ...state,
        isFetching: true,
        organizationInfo: null
      }
    }
    case FETCH_ORGANIZATION_DETAIL_SUCCESS: {
      // @ts-ignore
      const { organizationInfo } = action
      return {
        ...state,
        isFetching: false,
        organizationInfo
      }
    }
    case FETCH_REPOSITORIES_SUCCESS: {
      // @ts-ignore
      const { repositories } = action
      return {
        ...state,
        isFetching: false,
        repositories
      }
    }
    case FETCH_ORGANIZATION_DETAIL_FAIL: {
      return {
        ...state,
        isFetching: false,
        organizationInfo: null
      }
    }
    default:
      return state
  }
}

export default organizationDetail
