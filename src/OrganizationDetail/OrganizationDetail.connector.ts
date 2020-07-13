import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getOrganizationData } from './OrganizationDetail.actions'
import { getIsFetching, getOrganizationInfo, getRepositories } from './OrganizationDetail.selectors'

export const mapStateToProps = (state: IStore) => ({
  isFetching: getIsFetching(state),
  organizationInfo: getOrganizationInfo(state),
  repositories: getRepositories(state)
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetOrganizationData: bindActionCreators(getOrganizationData, dispatch)
})
